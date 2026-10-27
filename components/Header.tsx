'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: '홈', href: '/' },
    { name: '회사 소개', href: '/about' },
    { name: '솔루션/서비스', href: '/services' },
    { name: '문의하기', href: '/contact' },
    { name: '관리자 문의함', href: '/admin/inquiries' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                ITR <span className="text-blue-500">Solution</span>
              </span>
            </Link>
          </div>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition duration-200 py-2 border-b-2 ${
                  isActive(link.href)
                    ? 'border-accent text-white'
                    : 'border-transparent text-slate-300 hover:text-white hover:border-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 우측 CTA 버튼 */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow transition duration-200"
            >
              상담 문의하기
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg"
              aria-label="메뉴 열기"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition duration-200 ${
                isActive(link.href)
                  ? 'bg-accent text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-accent hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow transition duration-200"
            >
              상담 문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
