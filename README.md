# LLM 커피 원두 요약 설명기 Backend (Nest.js)

간단한 학습용 Nest.js 백엔드 프로젝트입니다.  
프론트엔드(Next.js) 원두 상세 페이지에 사용할 **제품 목록/상세 데이터 API**를 제공합니다.

🔗 관련 링크: [Frontend Repository](https://github.com/JinWorkBench/coffee-shop-frontend)

## ✨ 주요 기능
- In-memory 목업 데이터 제공 (DB 없이 시작)
- 제품 목록 API: `GET /products?type=bean`
- 제품 상세 API: `GET /products/:id`
- CORS 설정 (Next.js 프론트엔드와 연동 가능)

## 🛠 기술 스택
- [Nest.js](https://nestjs.com/)  
- TypeScript  
- Node.js
