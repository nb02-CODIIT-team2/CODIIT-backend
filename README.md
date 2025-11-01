# 2팀 - CODI_IT 프로젝트

📄 [2팀 프로젝트 계획서 보기](https://www.notion.so/2-26f02c9656f581a2b5ebcc7f12204fcb)

---

## 👨‍👩‍👧‍👦 팀원 구성

_아래 프로필 사진을 클릭하면 각 팀원의 GitHub 프로필로 이동합니다._

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/chya-chya">
        <img src="https://avatars.githubusercontent.com/u/112245738?v=4" width="150px;" alt="차수연"/>
      </a><br />
      <sub><b>차수연</b></sub>
    </td>
    <td align="center">
      <a href="https://github.com/kwonnahyun0125">
        <img src="https://avatars.githubusercontent.com/u/207654272?v=4" width="150px;" alt="권나현"/>
      </a><br />
      <sub><b>권나현</b></sub>
    </td>
    <td align="center">
      <a href="https://github.com/JINSOLdev">
        <img src="https://avatars.githubusercontent.com/u/130561876?v=4" width="150px;" alt="김진솔"/>
      </a><br />
      <sub><b>김진솔</b></sub>
    </td>
    <td align="center">
      <a href="https://github.com/jrkgus413">
        <img src="https://avatars.githubusercontent.com/u/122591484?v=4" width="150px;" alt="조가현"/>
      </a><br />
      <sub><b>조가현</b></sub>
    </td>
    <td align="center">
      <a href="https://github.com/jinseongnam">
        <img src="https://avatars.githubusercontent.com/u/208552129?v=4" width="150px;" alt="진성남"/>
      </a><br />
      <sub><b>진성남</b></sub>
  </tr>
</table>

---

## 📌 프로젝트 소개

- **프로젝트 이름:** CODI_IT
- **프로젝트 주제:** 패션 이커머스 플랫폼 백엔드 시스템 구축
- **진행 기간:** 2025.09.15 ~ 2025.11.03

---

## 🛠️ 기술 스택

- **Backend:** Nest.js, TypeScript
- **Database:** PostgreSQL, Prisma, AWS RDS/S3
- **API 문서화:** Swagger
- **테스트:** Jest,SuperTest, ESLint
- **협업 도구:** Git & GitHub, Discord, Notion
- **배포/운영:** AWS EC2, Docker, Nginx
- **CI/CD:** Gitgub Actions

---

## 🧩 팀원별 구현 기능

### 💻 차수연
- S3 (이미지 업로드) 모듈: 이미지 업로드
- Cart 모듈: 장바구니 생성, 조회, 수정
- Dashboard 모듈: 대시보드 조회
- 로깅, 에러 추적기: winston 로거, sentry 추적기 추가 

### 💻 권나현

- Auth 모듈: 로그인, 리프레시 토큰 재발급, 로그아웃
- User 모듈: 회원가입, 내 정보 조회 및 수정, 관심 스토어 조회, 회원 탈퇴
- Point 모듈: 내 포인트 조회
- Grade 모듈: 내 등급 조회
- 전역 로깅 미들웨어: 요청(Request)과 응답(Response) 정보를 콘솔에 출력하도록 구현
- 테스트 및 검증
  - Auth, User, Point, Grade 모듈의 유닛 테스트 코드 작성
  - 주요 기능 동작 및 예외 처리 검증을 통해 안정성 확보

### 💻 김진솔

- Store API : 스토어 생성, 수정, 상세조회, 내 스토어 상세 조회, 관심 스토어 등록/해제
- Notification API : 주문, 문의, 등 이벤트 발생 시 알람을 생성하고, 사용자 유형에 따라 다른 알람 제공
- CI/CD & 인프라
  - CI/CD 파이프라인 구축
    - GitHub Actiosn를 활용해 빌드 > 테스트 > Docker 이미지 빌드 > EC2 배포 자동화
    - PR 및 main 브랜치에 push 시 워크플로우 자동 실행
  - 무중단 배포 (Blue-Green Deployment)
    - Nginx Reverse Proxy와 Docker 컨테이너 활용해서 서비스 중단없이 배포

### 💻 조가현

- Review API : 상품 리뷰 등록/수정/삭제, 리뷰 목록/상세 조회
- Inquiry API : 상품 문의 등록/수정/삭제, 판매자 답변 등록/수정/삭제, 문의/답변 상세 조회

### 💻 진성남

---

## 📁 프로젝트 파일 구조

📦 프로젝트 루트

```
📦 project-root
├── 🐳 Dockerfile
├── ⚙️ eslint.config.mjs
├── 📘 nest-cli.json
├── 📦 package.json
├── 🔒 package-lock.json
├── 🧱 tsconfig.json
├── 🧱 tsconfig.build.json
├── 📄 README.md
│
├── 🪵 logs/
│   └── ❗ error.log
│
├── 🧩 prisma/
│   ├── 📜 schema.prisma
│   ├── 🌱 seed.ts
│   ├── 🌱 seedForDashboard.ts
│   └── 🧭 migrations/
│
├── 💻 src/
│   ├── 🚀 main.ts
│   ├── 🧩 app.module.ts
│   ├── 🎛️ app.controller.ts
│   ├── ⚙️ app.service.ts
│   │
│   ├── 🔐 auth/
│   │   ├── 📁 dto/
│   │   │   └── 📝 login.dto.ts
│   │   ├── 🎛️ auth.controller.ts
│   │   ├── ⚙️ auth.service.ts
│   │   ├── 🧩 auth.module.ts
│   │   ├── 🛡️ jwt.guard.ts
│   │   ├── 🧠 jwt.strategy.ts
│   │   └── 🧰 utils/
│   │       ├── 🍪 cookie.util.ts
│   │       └── 🙋 current-user.decorator.ts
│   │
│   ├── 🛒 cart/
│   │   ├── 🎛️ cart.controller.ts
│   │   ├── ⚙️ cart.service.ts
│   │   ├── 💾 cart.repository.ts
│   │   ├── 🧩 cart.module.ts
│   │   └── 🧪 test/
│   │       ├── 🧫 cart.e2e.spec.ts
│   │       └── 🔍 cart.service.spec.ts
│   │
│   ├── 🧱 common/
│   │   ├── 🛡️ guard/
│   │   │   ├── 👤 buyer.guard.ts
│   │   │   └── 🧍 seller.guard.ts
│   │   ├── 🪶 logger/
│   │   │   ├── 🪶 sentry.config.ts
│   │   │   ├── ⚠️ sentry.filter.ts
│   │   │   └── 🧱 winston.config.ts
│   │   ├── 🧩 middleware/
│   │   │   └── 🪵 logger.middleware.ts
│   │   ├── 🧮 pipes/
│   │   │   └── 🧩 parse-cuid.pipe.ts
│   │   └── 🧾 prisma-tx.type.ts
│   │
│   ├── 📊 dashboard/
│   │   ├── 🎛️ dashboard.controller.ts
│   │   ├── ⚙️ dashboard.service.ts
│   │   └── 🧩 dashboard.module.ts
│   │
│   ├── 🎓 grades/
│   │   ├── 🧩 grade.module.ts
│   │   ├── 💾 grade.repository.ts
│   │   ├── ⚙️ grade.service.ts
│   │   └── 🧮 grade.util.ts
│   │
│   ├── 💬 inquiry/
│   │   ├── 🎛️ inquiry.controller.ts
│   │   ├── ⚙️ inquiry.service.ts
│   │   ├── 💾 inquiry.repository.ts
│   │   ├── 🧩 inquiry.module.ts
│   │   └── 📝 inquiry.dto.ts
│   │
│   ├── 🔔 notifications/
│   │   ├── 🎛️ notifications.controller.ts
│   │   ├── ⚙️ notifications.service.ts
│   │   ├── 💾 notifications.repository.ts
│   │   ├── 🧩 notifications.module.ts
│   │   ├── 🔄 notifications.mapper.ts
│   │   ├── 🎯 ticker.token.ts
│   │   └── 🧩 types/
│   │       └── 🧾 allowed-types.type.ts
│   │
│   ├── 🧾 orders/
│   │   ├── 📁 dto/
│   │   │   ├── 📝 create-order.dto.ts
│   │   │   ├── 📝 update-order.dto.ts
│   │   │   ├── 🔍 get-orders-query.dto.ts
│   │   │   └── 📦 order-response.dto.ts
│   │   ├── 🎛️ orders.controller.ts
│   │   ├── ⚙️ orders.service.ts
│   │   ├── 💾 orders.repository.ts
│   │   └── 🧩 orders.module.ts
│   │
│   ├── 💰 points/
│   │   ├── 🎛️ points.controller.ts
│   │   ├── ⚙️ points.service.ts
│   │   ├── 💾 points.repository.ts
│   │   ├── 🧩 points.module.ts
│   │   └── 🧾 points.types.ts
│   │
│   ├── 🧩 prisma/
│   │   ├── ⚙️ prisma.service.ts
│   │   └── 🧩 prisma.module.ts
│   │
│   ├── 🛍️ products/
│   │   ├── 📁 dto/
│   │   │   ├── 📝 create-product.dto.ts
│   │   │   ├── 📝 update-product.dto.ts
│   │   │   ├── 📦 product-response.dto.ts
│   │   │   └── 🔍 product-detail-response.dto.ts
│   │   ├── 🎛️ products.controller.ts
│   │   ├── ⚙️ products.service.ts
│   │   ├── 💾 products.repository.ts
│   │   └── 🧩 products.module.ts
│   │
│   ├── 📝 review/
│   │   ├── 🎛️ review.controller.ts
│   │   ├── ⚙️ review.service.ts
│   │   ├── 💾 review.repository.ts
│   │   ├── 🧩 review.module.ts
│   │   └── 🧾 review.dto.ts
│   │
│   ├── ☁️ s3/
│   │   ├── 🎛️ s3.controller.ts
│   │   ├── ⚙️ s3.service.ts
│   │   └── 🧩 s3.module.ts
│   │
│   ├── 🏪 store/
│   │   ├── 📁 dto/
│   │   │   ├── 📝 create-store.dto.ts
│   │   │   ├── 📝 update-store.dto.ts
│   │   │   ├── 🏬 store-detail.dto.ts
│   │   │   └── 📦 store-response.dto.ts
│   │   ├── 🎛️ store.controller.ts
│   │   ├── ⚙️ store.service.ts
│   │   ├── 💾 store.repository.ts
│   │   └── 🧩 store.module.ts
│   │
│   ├── 👥 users/
│   │   ├── 📁 dto/
│   │   │   ├── 📝 create-user.dto.ts
│   │   │   └── 📝 update-user.dto.ts
│   │   ├── 🎛️ users.controller.ts
│   │   ├── ⚙️ users.service.ts
│   │   ├── 💾 users.repository.ts
│   │   └── 🧩 users.module.ts
│   │
│   └── 🧰 utils/
│       └── (공용 유틸)
│
└── 🧪 test/
    ├── 🧫 app.e2e-spec.ts
    ├── 🧩 jest-e2e.json
    ├── 🧪 mocks/
    │   └── 🧱 prisma.mock.ts
    └── 🧰 utils/
        └── 🧩 mocks.ts
```

---

## 🌐 구현 홈페이지

- **프론트엔드**: [https://nb-02-codi-it-fe.vercel.app/](https://nb-02-codi-it-fe.vercel.app/)

- **백엔드**: [https://codi-it.shop/api](https://codi-it.shop)

- **Swagger**: [https://codi-it.shop/api/docs](https://codi-it.shop/api/docs)

---

## 📊 ERD (Entity Relationship Diagram)

- [Codi‐It ERD 설계](https://github.com/nb02-CODIIT-team2/CODIIT-backend/wiki/Codi%E2%80%90It-ERD-%EC%84%A4%EA%B3%84)

---

## 🧠 프로젝트 회고 및 발표자료

- 차수연 [개인 개발 리포트](https://github.com/chya-chya/NB02_CODI-IT-Team2-Report/blob/main/README.md), 
       [개인 발표 자료](https://www.notion.so/2957b119cb4b80819391eb6291272aff)
- 권나현 [개인 개발 리포트](https://github.com/kwonnahyun0125/NB02_CODI-IT-Team2-Report)
- 김진솔 [개인 개발 리포트](https://www.notion.so/jinsoldev/26f985c9419580ec8f6fcf49138abf38?source=copy_link)
- 조가현 [개인 개발 리포트](https://github.com/jrkgus413/nb02-CODIIT-team2-report)
- 진성남

---
