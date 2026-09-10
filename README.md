# Osaka 2026 — Day 1 (10/14)

간사이공항 착륙부터 취침까지, 19:20 호텔 체크인에서 갈라지는 저녁 세 갈래 일정 페이지.

- `index.html` — 단일 파일 정적 페이지 (외부 의존성: Google Fonts만)
- Netlify 연결 시 빌드 명령 없음, publish directory `.`

## 배포

Netlify → Add new site → Import from Git → 이 저장소 선택 → Build command 비움 / Publish directory `.`
이후 이 저장소에 push하면 자동 재배포.

## 투표 기능

정적 호스팅이라 서버가 없으므로 투표는 각자 브라우저(localStorage)에만 저장된다.
집계는 페이지의 "내 선택 복사" 버튼으로 모은다.
