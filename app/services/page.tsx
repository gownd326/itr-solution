import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const serviceList = [
    {
      id: 'cloud',
      title: '클라우드 솔루션',
      subtitle: 'Cloud Infrastructure & Migration',
      description: '기업의 기존 인프라를 클라우드 환경으로 안전하게 마이그레이션하고, 고가용성과 확장성을 갖춘 최적의 아키텍처를 설계·운영합니다.',
      features: [
        'AWS, Azure, GCP 멀티클라우드 아키텍처 설계',
        '무중단 마이그레이션 및 컨테이너화(Docker/Kubernetes)',
        '클라우드 비용 최적화(FinOps) 및 실시간 모니터링'
      ],
      icon: '☁️',
    },
    {
      id: 'ai-bigdata',
      title: 'AI 및 빅데이터',
      subtitle: 'Artificial Intelligence & Big Data',
      description: '방대한 기업 데이터 수집부터 분석, AI 모델 적용까지 비즈니스 가치를 극대화할 수 있는 지능형 데이터 파이프라인을 구축합니다.',
      features: [
        '머신러닝 및 딥러닝 기반 예측 모델 개발',
        '대규모 데이터 실시간 스트리밍 및 분석 파이프라인 구축',
        'LLM 및 생성형 AI 도입 컨설팅 및 맞춤형 챗봇 구축'
      ],
      icon: '🤖',
    },
    {
      id: 'security',
      title: '엔터프라이즈 보안',
      subtitle: 'Enterprise Security & Compliance',
      description: '사이버 위협으로부터 기업의 핵심 자산과 고객 개인정보를 철저히 보호하기 위한 다중 보안 방어 체계를 구축합니다.',
      features: [
        '웹 방화벽, DDoS 방어 및 침입 탐지 시스템 구축',
        '개인정보 보호법 및 국제 보안 인증(ISMS-P, ISO27001) 대응',
        '보안 취약점 진단 및 실시간 모니터링 관제 서비스'
      ],
      icon: '🔒',
    },
    {
      id: 'web-system',
      title: '웹 및 시스템 통합 구축',
      subtitle: 'Web Application & SI',
      description: '최신 웹 표준(Next.js, React)을 반영한 고성능 기업용 웹사이트 및 맞춤형 비즈니스 시스템(ERP, CRM 등)을 개발합니다.',
      features: [
        'Lighthouse 성능 90점 이상 보장 고성능 웹 서비스 개발',
        '레거시 시스템 현대화 및 API 연동 통합',
        '안정적인 유지보수 및 24시간 장애 대응 체계 운영'
      ],
      icon: '⚡',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 배너 */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">솔루션 및 서비스 소개</h1>
          <p className="text-slate-300 text-lg">
            ITR Solution이 제공하는 전문적인 IT 서비스와 엔터프라이즈 솔루션을 만나보세요.
          </p>
        </div>
      </section>

      {/* 서비스 카드 목록 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-16">
          {serviceList.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              <div className="lg:col-span-4 bg-slate-50 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                <div>
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider block mb-2">
                    {service.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                </div>
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-primary hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition duration-200 text-sm shadow-sm"
                  >
                    이 서비스 문의하기
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-center space-y-6">
                <p className="text-textMain text-lg leading-relaxed">
                  {service.description}
                </p>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                    주요 제공 기능 및 특징
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-textMain">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 CTA 섹션 */}
      <section className="bg-white py-16 border-t border-slate-200 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            귀사에 딱 맞는 맞춤형 솔루션이 궁금하신가요?
          </h2>
          <p className="text-textMain text-base">
            전문 컨설턴트가 기업 환경을 분석하여 최적의 아키텍처와 도입 방안을 제안해 드립니다.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg shadow-md transition duration-200"
            >
              무료 컨설팅 신청하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
