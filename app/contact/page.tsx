'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMessage('필수 입력값을 모두 입력해 주세요.');
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          name: formData.name,
          company: formData.company || null,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          status: 'unread',
        },
      ]);

      if (error) {
        throw error;
      }

      setSuccessMessage('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || '문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 배너 */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">문의하기</h1>
          <p className="text-slate-300 text-lg">
            ITR Solution의 전문가가 귀사의 비즈니스 혁신을 위한 맞춤형 상담을 도와드립니다.
          </p>
        </div>
      </section>

      {/* 폼 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">상담 및 견적 문의</h2>
            <p className="text-textMain text-sm">
              필수 정보를 입력해 주시면 담당 엔지니어가 확인 후 신속하게 연락을 드립니다.
            </p>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm font-medium">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-background"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                  회사명 <span className="text-slate-400 font-normal">(선택)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="(주)ITR솔루션"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-background"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@itrsolution.co.kr"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-background"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="구축하고자 하는 시스템이나 도입을 검토 중인 솔루션에 대해 자세히 적어주세요."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-background resize-y"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg transition duration-200 disabled:opacity-50"
              >
                {submitting ? '제출 중...' : '문의하기 제출'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
