# Osaka 2026 (10/14–10/18)

6인 가족 오사카 여행 일정 페이지. 정적 HTML, 빌드 없음.

## 구조

```
index.html    전체 일정 + 고정 정보(항공·숙소·터미널)
day1.html     10/14 (수) 도착 · 저녁 세 갈래
day2.html     10/15 (목) USJ
day3.html     10/16 (금)
day4.html     10/17 (토)
day5.html     10/18 (일) 귀국
assets/base.css      공통 스타일 (전 페이지 공유)
assets/kid-boy.png   헤더 아바타
assets/kid-girl.png  헤더 아바타
netlify.toml  publish=".", 빌드 명령 없음
```

## 수정

날짜 하나만 바꿀 때는 그 `dayN.html` 하나만 교체하면 된다.
디자인을 바꿀 때는 `assets/base.css` 하나만 교체하면 전 페이지에 반영된다.

GitHub → Add file → Upload files → 같은 이름으로 덮어쓰기 → Commit → Netlify 자동 재배포.
