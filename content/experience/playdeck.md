---
date: '5'
period: '2023 - 2024'
title: 'Playdeck'
url: 'https://tonplay.io/'
stack:
  - Vite
  - React
  - TypeScript
  - Zustand
  - react-lottie
  - Axios
  - i18next
  - ESlint
  - Stylelint
  - SCSS
---

Contract job on a project Playdeck - Telegram games catalog. I did mostly infrastructure things & from time to time implement new features (Tournaments, for ex.).

1. Switch CRA → Vite; React Context hell → Zustand; Components → FSD Style.
2. Developed analytics service for all the events throughout Market
3. Developed ServiceLogger for sending events to Sentry through backend as a proxy. Increased visibility and decreased frontend build for 70 kb there.
4. Setup from scratch all the ESlint, Prettier, Precommit, browserlist, etc
5. Analyzed & improved build size via Lighthouse + custom metrics like page_load_time
6. Developed & refactored nitty-gritty telegram API things: link-openers, bot-params-api, etc