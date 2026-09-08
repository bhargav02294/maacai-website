# MaacAI Website

MaacAI is a **React + Vite** website.

This repository is public so anyone can view and clone the source code. Selected contributors can make changes and submit updates to the project.

---

## 🚀 Tech Stack

* React 19
* React DOM 19
* Vite
* JavaScript
* CSS
* npm
* Git & GitHub
* Vercel

---

## 📋 Requirements

Install these before starting:

* [Node.js](https://nodejs.org/)
* Git

Check installation:

```bash
node -v
npm -v
git --version
```

---

# 💻 Run the Project Locally

## 1. Clone the repository

```bash
git clone https://github.com/bhargav02294/maacai-website.git
```

## 2. Enter the project

```bash
cd maacai-website
```

## 3. Install dependencies

```bash
npm install
```

This creates `node_modules/`.

You do **not** need to manually create `node_modules`.

## 4. Start the development server

```bash
npm run dev
```

Open the URL shown by Vite, normally:

```text
http://localhost:5173
```

---

# 🛠️ Available Commands

### Start development

```bash
npm run dev
```

Runs the website locally with Vite.

### Production build

```bash
npm run build
```

Creates the production build in:

```text
dist/
```

### Preview production build

```bash
npm run preview
```

Tests the production build locally.

### Lint

```bash
npm run lint
```

Checks the project using Oxlint.

---

# 📁 Project Structure

```text
maacai-website/
│
├── public/              # Public assets
│
├── src/
│   ├── components/      # React components
│   ├── assets/          # Project assets
│   ├── App.jsx          # Main application
│   ├── App.css
│   ├── index.css
│   └── main.jsx         # React entry point
│
├── index.html
├── package.json         # Dependencies & scripts
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

# ✏️ Making Changes

After cloning the project:

```bash
npm install
npm run dev
```

Make your changes inside the project.

For example:

```text
src/components/
src/App.jsx
src/App.css
src/index.css
```

Before submitting changes, test the project:

```bash
npm run build
```

Make sure the build completes successfully.

---

# 🌿 Recommended Git Workflow

Do **not** directly modify `main` unless you are authorized to do so.

Create a separate branch for your work:

```bash
git checkout -b feature-name
```

Example:

```bash
git checkout -b update-footer
```

Make your changes, then:

```bash
git add .
```

Commit:

```bash
git commit -m "Update footer"
```

Push your branch:

```bash
git push -u origin update-footer
```

---

# 🔄 Pull Request

After pushing your branch:

1. Open the GitHub repository.
2. GitHub will show your recently pushed branch.
3. Click **Compare & pull request**.
4. Add a short description of your changes.
5. Create the Pull Request.
6. Wait for review.
7. After approval, the changes can be merged into `main`.

### Workflow

```text
Clone
  ↓
Create branch
  ↓
Make changes
  ↓
Test
  ↓
Commit
  ↓
Push branch
  ↓
Pull Request
  ↓
Review
  ↓
Merge into main
  ↓
Vercel deployment
```

---

# 🔄 Keeping Your Local Project Updated

Before starting new work, get the latest `main`:

```bash
git checkout main
git pull origin main
```

Then create a new branch:

```bash
git checkout -b your-branch-name
```

---

# 👥 Contributors

The repository is public, but **only authorized GitHub collaborators can push directly to the repository**.

Public users can:

* View the code
* Clone the repository
* Fork the repository
* Create their own changes
* Submit Pull Requests

Selected collaborators can contribute directly according to their GitHub permissions.

---

# 🌐 Deployment

The production website is deployed through **Vercel**.

The deployment is connected to:

```text
GitHub
└── bhargav02294/maacai-website
```

The production build uses:

```bash
npm run build
```

which runs:

```bash
vite build
```

and generates:

```text
dist/
```

When approved changes are merged into the production branch, Vercel can automatically build and deploy the updated website.

---

# 🔐 Important — Do Not Commit Secrets

Never commit:

```text
.env
.env.local
.env.*.local
API keys
Passwords
Access tokens
Private keys
Database credentials
```

Sensitive configuration should be stored using environment variables.

The following directories should also not be committed:

```text
node_modules/
dist/
```

They are already excluded through `.gitignore`.

---

# 🧹 Before Creating a Pull Request

Run:

```bash
npm install
npm run lint
npm run build
```

Make sure there are no important errors.

Then commit and push your changes.

---

# 📌 Quick Start

For someone who just wants to run the website:

```bash
git clone https://github.com/bhargav02294/maacai-website.git
cd maacai-website
npm install
npm run dev
```

For production testing:

```bash
npm run build
npm run preview
```

---

## 🔗 Repository

GitHub:

https://github.com/bhargav02294/maacai-website

---

## 📄 License

See the repository for the current licensing terms.
