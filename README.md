# HEADLINER

Shopping cart management application built with React, TypeScript, and Vite.

deploy: https://headliner-delta.vercel.app/

## Quick Start

### Installation

```bash
npm install
```

### Environment Setup

Create `.env` file in the root directory:

```bash
cp .env.example .env
```

Default API: `https://dummyjson.com`

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Architecture

### Tech Stack

- **React 19** — UI framework
- **TypeScript** — type safety
- **Vite** — build tool
- **React Router** — routing
- **TanStack Query** — server state management
- **Zustand** — client state management
- **Emotion** — CSS-in-JS styling

### Project Structure

```
src/
├── api/           # API client and endpoints
├── components/    # React components (pages)
├── hooks/         # Custom React hooks
├── store/         # Zustand stores
└── types/         # TypeScript type definitions
```

### Key Features

- **Carts List** — paginated list with filters (limit, userId)
- **Cart Details** — view and edit cart products
- **State Persistence** — navigation state preserved via Zustand
- **Optimistic Updates** — instant UI updates via React Query
- **Error Handling** — comprehensive error states

### State Management

- **Server State** — React Query (caching, background refetch)
- **Client State** — Zustand (page, limit, userId filters)

## Author

- [Pavel Gordienko](https://github.com/gordienkodev)
