'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Inquiry {
  id: string;
  created_at: string;
  name: string;
  company: string | null;
  phone: string;
  email: string;
  message: string;
  status: 'unread' | 'read' | 'completed';
}

export default function AdminInquiriesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    const targetPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin1234';

    if (passwordInput === targetPassword || passwordInput === 'itrsolution2026!') {
      setIsAuthenticated(true);
      fetchInquiries();
    } else {
      setAuthError('관리자 비밀번호가 올바르지 않습니다.');
    }
  };

  const fetchInquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setInquiries(data || []);
    } catch (err: any) {
      setError(err.message || '문의 목록을 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'unread' | 'read' | 'completed') => {
    try {
      const { error } = await supabase
        .from('inquiries')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        throw error;
      }

      setInquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    } catch (err: any) {
      alert(err.message || '상태 변경 중 오류가 발생했습니다.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight">관리자 문의함</h1>
            <p className="text-slate-300 text-lg">관리자 전용 페이지입니다. 비밀번호를 입력해 주세요.</p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-md mx-auto w-full">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-primary mb-6 text-center">관리자 인증</h2>

            {authError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm font-medium">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-password" className="block text-sm font-semibold text-primary mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="admin-password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  required
                  placeholder="관리자 비밀번호 입력"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-background"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow transition duration-200"
              >
                로그인
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">관리자 문의함</h1>
          <p className="text-slate-300 text-lg">접수된 고객 문의 내역을 확인하고 상태를 관리할 수 있습니다.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">접수된 문의 목록 ({inquiries.length}건)</h2>
          <button
            onClick={fetchInquiries}
            className="bg-white hover:bg-slate-50 text-primary border border-slate-200 font-medium px-4 py-2 rounded-lg shadow-sm text-sm transition duration-200"
          >
            새로고침
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm font-medium">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-20 text-slate-500">문의 목록을 불러오는 중...</div>
        ) : inquiries.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center text-slate-500">
            접수된 문의가 없습니다.
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold">접수일시</th>
                  <th className="p-4 font-semibold">이름 / 회사명</th>
                  <th className="p-4 font-semibold">연락처 / 이메일</th>
                  <th className="p-4 font-semibold">문의 내용</th>
                  <th className="p-4 font-semibold">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {inquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition duration-150">
                    <td className="p-4 text-slate-500 whitespace-nowrap">
                      {new Date(item.created_at).toLocaleString('ko-KR')}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="font-bold text-primary">{item.name}</div>
                      {item.company && <div className="text-xs text-slate-500">{item.company}</div>}
                    </td>
                    <td className="p-4">
                      <div className="text-primary font-medium">{item.phone}</div>
                      <div className="text-xs text-slate-500">{item.email}</div>
                    </td>
                    <td className="p-4 max-w-xs truncate text-textMain">
                      <div className="line-clamp-2">{item.message}</div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <select
                        value={item.status}
                        onChange={(e) =>
                          handleStatusChange(
                            item.id,
                            e.target.value as 'unread' | 'read' | 'completed'
                          )
                        }
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition duration-150 ${
                          item.status === 'unread'
                            ? 'bg-amber-50 border-amber-200 text-amber-800'
                            : item.status === 'read'
                            ? 'bg-blue-50 border-blue-200 text-blue-800'
                            : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        }`}
                      >
                        <option value="unread">미확인 (unread)</option>
                        <option value="read">확인함 (read)</option>
                        <option value="completed">답변완료 (completed)</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
