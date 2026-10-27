import Link from 'next/link';

export default function HomePage() {
  const services = [
    {
      title: '클라우드 솔루션',
      description: '기업 인프라의 클라우드 전환과 안정적인 운영을 위한 최적의 아키텍처를 설계합니다.',
      icon: '☁️',
    },
    {
      title: 'AI 및 빅데이터',
      description: '방대한 데이터 속에서 비즈니스 인사이트를 도출하고 AI 기반 자동화를 구현합니다.',
      icon: '🤖',
    },
    {
      title: '엔터프라이즈 보안',
      description: '강력한 보안 체계와 실시간 모니터링으로 기업의 핵심 자산과 고객 정보를 보호합니다.',
      icon: '🔒',
    },
  ];

  const clients = [
    '삼성전자',
    'LG CNS',
    'SK C&C',
    '현대오토에버',
    '네이버클라우드',
    '카카오엔터프라이즈',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block bg-accent/20 text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-accent/30">
            Innovative Technology & Reliable Solution
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            비즈니스를 혁신하는 <span className="text-blue-500">ITR Solution</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            최신 웹 표준과 안정적인 클라우드·AI 기술로 기업의 미래를 함께 만들어갑니다.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg shadow-lg transition duration-200"
            >
              무료 상담 및 견적 문의
            </Link>
            <Link
              href="/services"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-8 py-3.5 rounded-lg border border-slate-700 transition duration-200"
            >
              서비스 자세히 보기
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </section>

      {/* 서비스 요약 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">핵심 서비스 요약</h2>
          <p className="text-textMain text-lg">
            ITR Solution이 제공하는 전문적인 솔루션으로 기업의 경쟁력을 높이세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-textMain leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/services"
                  className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
                >
                  자세히 보기 &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 고객사 로고 섹션 */}
      <section className="bg-white py-16 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-8">
            신뢰할 수 있는 파트너 및 고객사
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-background py-4 px-6 rounded-lg border border-slate-100 font-bold text-primary flex items-center justify-center shadow-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA(행동 유도) 섹션 */}
      <section className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            지금 바로 ITR Solution과 함께 시작하세요
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            전문 엔지니어의 맞춤형 컨설팅으로 최적의 IT 인프라와 솔루션을 제안해 드립니다.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg shadow-lg transition duration-200"
            >
              문의하기 바로가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
