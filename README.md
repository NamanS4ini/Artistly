# 🎭 Artistly – Performing Artist Booking Platform (Frontend Demo)

A functional and mobile-responsive web demo built with **Next.js 13+ App Router**, Tailwind CSS, and React Hook Form.

> ✅ This project was created as part of an internship assessment. It simulates a real-world SaaS platform connecting Event Planners and Performing Artists.

---

## ✨ Features

### 🔹 Public Interface
- **Homepage** with hero section and artist category cards
- **Artists Listing** with real-time filters (Category, Location, Price)
- **Detailed Artist Profile** (`/user/[id]`) with full info
- **Onboarding Form** for artists to submit their profile

### 🔹 Admin Interface
- **Manager Dashboard** to view all artist submissions in a styled, sortable table
- Conditional rendering if no submissions exist

### 🧪 Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [ShadCN](https://ui.shadcn.com/)
- TypeScript
- Mock API (`/api/artists`) with static JSON data

---

## 🗂 Folder Structure (Key)

```
/app
  ├── page.tsx                → Homepage
  ├── artists/page.tsx        → Filterable artist listing
  ├── user/[id]/page.tsx      → Artist detail page
  ├── onboarding/page.tsx     → Artist submission form
  ├── dashboard/page.tsx      → Manager view
  └── api/artists/route.ts    → Mock API route

/components
  ├── Header.tsx
  ├── filter-bar.tsx
  └── ui/                     → ShadCN components

/lib
  └── artists.ts              → Mock artist data

/public/images               → Artist image placeholders
```


---

## 🧑‍💻 How to Run Locally

```bash
git clone https://github.com/namans4ini/artistly.git
cd artistly
npm install
npm run dev
```

- Visit: [http://localhost:3000](http://localhost:3000)

---