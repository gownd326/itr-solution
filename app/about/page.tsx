import React from 'react';

export default function AboutPage() {
  const history = [
    { year: '2026', title: 'ITR Solution 법인 전환 및 클라우드 서비스 고도화', desc: '엔터프라이즈 AI 및 클라우드 통합 솔루션 출시' },
    { year: '2024', title: '기업부설 연구소 설립 및 기술 특허 취득', desc: '빅데이터 기반 실시간 모니터링 시스템 개발 완료' },
    { year: '2022', title: 'ITR Solution 설립', desc: 'IT 컨설팅 및 웹/시스템 구축 사업 시작' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 배너 */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">회사 소개</h1>
          <p className="text-slate-300 text-lg">
            최고의 기술력과 신뢰를 바탕으로 고객의 디지털 혁신을 선도하는 ITR Solution입니다.
          </p>
        </div>
      </section>

      {/* CEO 인사말 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center text-slate-400 font-semibold text-lg border border-slate-200">
            CEO 사진 공간
          </div>
          <div className="md:col-span-2 space-y-4">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">CEO Greeting</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              "기술의 가치를 넘어 고객의 성공을 디자인합니다."
            </h2>
            <p className="text-textMain leading-relaxed">
              안녕하십니까, ITR Solution 대표입니다. 급변하는 디지털 환경 속에서 기업이 지속 가능한 성장을 이루기 위해서는 강력하고 유연한 IT 인프라가 필수적입니다.
            </p>
            <p className="text-textMain leading-relaxed">
              저희 ITR Solution은 풍부한 현장 경험과 전문성을 갖춘 엔지니어들과 함께 고객 여러분의 비즈니스 파트너로서 최적의 솔루션을 제공하고 있습니다. 언제나 신뢰할 수 있는 기술력으로 보답하겠습니다.
            </p>
            <div className="pt-2">
              <p className="font-bold text-primary">ITR Solution 대표 임직원 일동</p>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 타임라인 */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-3">연혁 타임라인</h2>
            <p className="text-textMain text-lg">ITR Solution이 걸어온 도전과 혁신의 발자취입니다.</p>
          </div>
          <div className="relative border-l-2 border-accent/30 ml-4 sm:ml-32 space-y-12">
            {history.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-10">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-white shadow" />
                <div className="sm:absolute sm:-left-32 sm:text-right sm:w-24 font-extrabold text-accent text-xl mb-1 sm:mb-0">
                  {item.year}
                </div>
                <div className="bg-background p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-textMain">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 안내 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">오시는 길</h2>
          <p className="text-textMain text-lg">ITR Solution 본사 찾아오시는 방법을 안내해 드립니다.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">주소</h3>
              <p className="text-primary font-medium">서울특별시 강남구 테헤란로 123, ITR 빌딩 8층</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">연락처</h3>
              <p className="text-primary font-medium">02-1234-5678</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">이메일</h3>
              <p className="text-primary font-medium">contact@itrsolution.co.kr</p>
            </div>
          </div>
          <div className="md:col-span-2 bg-slate-100 min-h-[350px] flex items-center justify-center text-slate-400 font-medium border-t md:border-t-0 md:border-l border-slate-200">
            [지도 영역: 서울시 강남구 테헤란로 123]
          </div>
        </div>
      </section>
    </div>
  );
}
