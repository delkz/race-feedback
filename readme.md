# 🏎️ Race Feedback Bot
## About
Race Feedback Bot is a simple, open-source project that reads telemetry data from iRacing and gives you actionable feedback on how to improve your driving performance.

This tool is designed especially for beginner drivers (just like me!) who want to get faster but don't yet know where to start.

## Features (Planned)
🖥️ Front-end Interface — Simple and intuitive dashboard for viewing feedback and lap data

🔊 Text-to-Speech (TTS) — Get voice feedback right after your lap ends

📜 Logging — Save your sessions and track your progress

🧠 Pluggable AI Engine — Easily switch between different AI providers

## Tech Stack (Planned)

Node.js + TypeScript for backend logic and AI integration

React for the front-end UI

Docker + Ollama for running the AI locally or in containers

## Goals

Make learning and improving in iRacing easier for new drivers

Keep everything modular, customizable, and lightweight

Offer a free alternative to commercial telemetry tools

## 📝 How to Commit

To keep the project organized and make it easier to generate changelogs, we follow the **Conventional Commits** standard for commit messages.

### Commit Message Format

Your commit message should look like this:

<type>(<scope>): <subject>


**Examples:**

- `feat(ui): add feedback panel`
- `fix(api): handle missing telemetry data`
- `docs: update README with commit guidelines`

---

### Using Commitlint + Husky

- When you try to commit, Husky will run `commitlint` automatically and block commits that don't follow the format.  
- If your commit message is invalid, you will see an error and will need to fix it before committing.

---

### Using Commitizen (Optional)

To make committing easier, you can use Commitizen, which provides an interactive prompt to create proper commit messages.

1. Run:

```bash
npm run commit
```

2. Follow the prompts to write your commit message.

Manual Commit Example
If you want to commit manually, here’s a valid example:

```bash
git commit -m "feat: add telemetry feedback feature"
```

## 🤝 Contributing
Contributions are always welcome!
Whether you're fixing bugs, improving documentation, or adding new features — thank you! ❤️

We’ll soon have Husky, ESLint, and other tooling set up to help maintain code quality and consistency.

## 📄 License

This project is licensed under the MIT License.
Feel free to use, modify, and share it — just give credit where it's due.
