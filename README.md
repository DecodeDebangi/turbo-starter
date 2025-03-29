# TurboRepo Starter Project

This repository serves as a **starter template** for future projects using **Turborepo**. It is designed to streamline the setup process, allowing you to quickly clone and customize it for new projects.

## 📌 Features

- **TurboRepo Monorepo Setup**
- **Preconfigured CI/CD Pipeline (GitHub Actions)**
- **DigitalOcean Deployment with PM2 & Nginx**
- **Database Setup with Prisma & Neon.tech**
- **WebSocket & HTTP Server Preconfigured**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

To start a new project using this template, clone the repository:

```sh
git clone https://github.com/DecodeDebangi/turbo-starter.git my-new-project
cd my-new-project
```

### 2️⃣ Remove Existing Git History

Detach the repository from the original remote:

```sh
rm -rf .git
```

### 3️⃣ Initialize a New Git Repository

```sh
git init
git add .
git commit -m "Initial commit from TurboRepo starter"
git branch -M main
git remote add origin <your-new-repo-url>
git push -u origin main
```

---

## ⚙️ Project Setup

### 4️⃣ Install Dependencies

Ensure **pnpm** is installed globally:

```sh
npm install -g pnpm
```

Then install project dependencies:

```sh
pnpm install
```

### 5️⃣ Setup Environment Variables

Create **.env** files inside `packages/db/.env` and `apps/web/.env` as needed.

Example **packages/db/.env**:

```env
DATABASE_URL="your-database-url"
```

Example **apps/web/.env**:

```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

---

## 🏗 Running the Project

### 6️⃣ Start Development Server

```sh
pnpm run dev
```

This will start all required services.

### 7️⃣ Running in Production with PM2

```sh
pm install -g pm2
pm2 start npm --name "http-server" -- start
pm2 start npm --name "ws-server" -- start
pm2 start npm --name "frontend-server" -- start
pm2 save
pm2 startup
```

---

## 🔄 CI/CD Workflow (GitHub Actions)

This project includes **GitHub Actions** workflows for automatic deployments:

- **`main` branch → Deploys to Dev Server**
- **`production` branch → Deploys to Staging Server**

To deploy changes to the staging server, follow these steps:

```sh
git checkout main
git pull origin main
git add .
git commit -m "your comment"
git push origin HEAD
```

To deploy changes to the production server, follow these steps:

```sh
git checkout main
git pull origin main
git checkout production
git merge main
Resolve conflicts if any
git add .
git commit -m "your comment"
git push origin HEAD
```

---

## 📝 Author

Created & maintained by **Debangi Choudhury** 🚀

For contributions or issues, feel free to open a PR or reach out!
