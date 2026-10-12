# SmartWallet

A front-end concept for a personal finance web app: a landing page, login and sign-up screens, and an admin area with four modules – **Track Expenses**, **Automate Payments**, **Secure Wallets** and **Send Money**.

> **Built with AI.** I built this project with AI coding assistants (such as ChatGPT and Codex). I came up with the idea and the design direction, described what I wanted, tested the pages and directed the changes – the AI wrote most of the code. I'm not a professional developer; this project helped me understand how a modern React / Next.js front end is organised.

**Status:** UI prototype – front end only, no real back end or real money.

## Features

- Responsive landing page (hero, features, footer)
- Login and sign-up pages with basic form checks
- Admin dashboard linking to four modules
- Module pages with example data (transactions, categories, alerts…)

## Built with

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · ESLint

## Run it locally

Requires [Node.js](https://nodejs.org) 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000

Other commands: `npm run build` (production build), `npm run lint` (code checks).

## Project structure

```
app/
├── page.tsx           Landing page
├── login/, signup/    Authentication screens
├── features/          Features page
└── admin/             Dashboard and the four modules
components/            Shared parts (navbar, hero, footer, background…)
public/                Images, icons and logo
```

## Limitations

- **No real authentication:** the login only stores a flag in the browser (localStorage), and any email/password works.
- All figures and transactions are example data written in the code.
- No database, no payments, no bank connection.
