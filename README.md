# AI Agent App

A full-stack AI agent application built with a modern monorepo architecture.

## Project Structure

```
ai-agent-app/
├── apps/
│   ├── web/          # Next.js frontend application
│   └── backend/      # NestJS backend API
└── packages/
    ├── application-types/  # Shared TypeScript types
    ├── eslint-config/      # Shared ESLint configuration
    └── typescript-config/  # Shared TypeScript configuration
```

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS, Clerk (authentication)
- **Backend**: NestJS
- **Monorepo**: Turborepo
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm 10.26.2

### Installation

```bash
pnpm install
```

### Development

Run all apps in development mode:

```bash
pnpm dev
```

Run specific app:

```bash
pnpm dev --filter=web      # Frontend only
pnpm dev --filter=backend  # Backend only
```

### Build

Build all apps and packages:

```bash
pnpm build
```

### Lint

Lint all code:

```bash
pnpm lint
```
