# ITR Solution - 실행 및 관리 가이드

이 문서는 IT 솔루션 도입 및 기업 소개 웹사이트인 **ITR Solution** 프로젝트를 로컬 컴퓨터에서 실행하고 관리하기 위한 비전문가용 안내서입니다.

---

## 1. 사전 요구사항

프로젝트를 실행하기 위해 컴퓨터에 다음 프로그램이 설치되어 있어야 합니다.
- **Node.js**: 버전 20 이상 (`node -v` 명령어로 확인 가능)
- **npm** (Node.js 설치 시 함께 설치됨)

---

## 2. 프로젝트 시작하기 (로컬 실행)

1. 터미널(명령 프롬프트)을 열고 프로젝트 폴더로 이동합니다.
2. 필요한 패키지를 설치합니다:
   ```bash
   npm install
   ```
3. 환경 변수 설정 파일을 생성합니다. 프로젝트 루트에 `.env.local` 파일을 만들고 아래 내용을 입력합니다 (Supabase 및 관리자 비밀번호 설정, 관리자 비밀번호 기본값 `itrs@2026`):
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ADMIN_PASSWORD=itrs@2026
   ```
4. 개발 서버를 실행합니다:
   ```bash
   npm run dev
   ```
5. 브라우저를 열고 `http://localhost:3000`에 접속하여 사이트를 확인합니다.

---

## 3. 주요 페이지 안내

- **메인 페이지 (`/`)**: 회사의 핵심 비전, 주요 서비스 요약, 고객사 로고 및 CTA 버튼 제공
- **회사 소개 (`/about`)**: CEO 인사말, 연혁 타임라인, 오시는 길 안내
- **솔루션/서비스 (`/services`)**: 제공하는 IT 솔루션 상세 설명 카드 목록
- **문의하기 (`/contact`)**: 잠재 고객의 상담 및 견적 문의 접수 폼 (Supabase 연동)
- **관리자 문의함 (`/admin/inquiries`)**: 설정된 관리자 비밀번호(`itrs@2026`)로 로그인하여 접수된 문의 내역 확인 및 상태 변경

---

## 4. 테스트 실행

작성된 자동화 테스트(Vitest 기반)를 실행하려면 아래 명령어를 입력합니다:
```bash
npm run test
```

---

## 5. 배포 안내

이 프로젝트는 **Vercel**을 통해 간편하게 무료 배포할 수 있습니다.
1. GitHub 저장소에 코드를 푸시합니다.
2. Vercel(vercel.com)에 로그인 후 새 프로젝트로 해당 GitHub 저장소를 연결합니다.
3. 환경 변수(`.env.local`에 들어간 값들)를 Vercel 프로젝트 설정의 **Environment Variables**에 등록합니다.
4. 배포(Deploy) 버튼을 누르면 자동으로 빌드 및 배포가 완료됩니다.
