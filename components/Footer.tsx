import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              ITR <span className="text-blue-500">Solution</span>
            </span>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              최신 웹 표준과 안정적인 클라우드·AI 기술로 기업의 비즈니스 혁신을 선도하는 신뢰할 수 있는 IT 파트너입니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition duration-200">
                  메인 페이지
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition duration-200">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition duration-200">
                  솔루션/서비스
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition duration-200">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">고객센터</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>전화: 02-1234-5678</li>
              <li>이메일: contact@itrsolution.co.kr</li>
              <li>주소: 서울특별시 강남구 테헤란로 123, ITR 빌딩 8층</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} ITR Solution. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">이용약관</span>
            <span className="hover:text-slate-400 cursor-pointer">개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
