# 🚀 Express TS Starter Kit

A modern, production-ready **Express.js + TypeScript** starter kit packed with best practices, powerful tooling, and security essentials. Perfect for building scalable APIs with clean code, linting, and structured logging.

---

## ✨ Features

* **Express.js** – Minimal and fast web framework
* **TypeScript** – Type safety and developer productivity
* **ESLint + Prettier** – Consistent and clean code style
* **Winston** – Flexible logging with daily rotation
* **Husky** – Git hooks for pre-commit checks
* **Prisma** – Type-safe ORM for modern databases
* **CORS** – Secure cross-origin requests
* **dotenv** – Environment variable management
* **bcryptjs** – Password hashing and security
* **Helmet.js** – HTTP security headers
* **Zod** – Runtime schema validation and type inference
* **Express Rate Limit** – Prevent brute-force attacks

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/express-ts-starter-kit.git

# Navigate to the project folder
cd express-ts-starter-kit

# Install dependencies
pnpm install
```

---

## ⚡ Scripts

```bash
# Start development server with hot reload
pnpm dev

# Build the project
pnpm build

# Run production build
pnpm start

# Lint the code
pnpm lint

# Format code with Prettier
pnpm format
```

---

## 🛠 Project Structure

```
├── prisma/             # Prisma schema and migrations
├── src/
│   ├── config/         # App configuration (db, env, logger)
│   ├── constants/      # Constants and enums
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Express middlewares
│   ├── modules/        # Feature-based modules
│   ├── routes/         # API routes
│   ├── services/       # Business logic & service layer
│   ├── types/          # Global TypeScript types
│   ├── utils/          # Utilities and helpers
│   ├── validators/     # Request validation schemas (Zod)
│   └── index.ts        # Entry point
├── .env                # Environment variables
├── package.json
└── tsconfig.json
```

---

## 🚦 Git Hooks with Husky

Pre-commit hooks are enabled to ensure linting and formatting run automatically before every commit.

---

## 📝 License

This project is licensed under the MIT License.

---

## 💡 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork and submit PRs.

---

## 🌟 Why This Starter?

Because you deserve a boilerplate that doesn’t fight you back.
Ship faster, stay secure, and keep your codebase clean.
