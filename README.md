# Sauce Demo — Test Automation Framework (Playwright + TypeScript)

Professional end-to-end automation framework for the Sauce Demo web application.
The project is designed as a portfolio-quality example that demonstrates modern automation practices, clean structure, and CI readiness.

---

## 🎯 Objectives

- Showcase strong UI automation skills
- Follow clean architecture & best practices
- Build reusable, maintainable tests
- Support debugging and CI pipelines
- Demonstrate real-world project structure for CV / interviews

---

## 🛠 Tech Stack

- **Playwright Test**
- **TypeScript**
- **Node.js / npm**
- **Page Object Model (POM)**
- **GitHub Actions (CI-ready)**
- **Prettier (code formatting)**

---

## 📂 Project Structure

```text
src/                  -> Page objects & core framework logic
tests/e2e/            -> End-to-end test suites
utils/                -> Helper functions & utilities
playwright.config.ts  -> Global Playwright configuration
.github/workflows     -> CI workflows (optional)
.gitignore            -> Ignored files
README.md             -> Project documentation
```

---

## 🚀 Quickstart

1. Clone the repo

   ```bash
   git clone https://github.com/stylianosSeniorAutomation/Sauce_Demo_Practice.git
   cd Sauce_Demo_Practice
   ```

2. Install dependencies

   ```bash
   npm install
   npx playwright install
   ```

3. Run the full test suite

   ```bash
   npx playwright test
   ```

4. Run a single test file

   ```bash
   npx playwright test tests/e2e/my-test.spec.ts
   ```

5. Open HTML report after a run

   ```bash
   npx playwright show-report
   ```

6. Run tests in headed mode / with trace for debugging

   ```bash
   npx playwright test --headed
   npx playwright test --trace on
   ```

---

## ⚙️ Configuration

- Primary configuration is in `playwright.config.ts`. Adjust browsers, timeouts, and projects there.
- Use environment variables for secrets or credentials instead of committing them.

---

## 🧩 Contributing

Contributions and improvements are welcome. Typical workflow:

- Fork the repository
- Create a feature branch
- Add tests and update docs
- Open a PR with a clear description of changes

---

## 🧑‍🏫 Training Pull Request — Intentional Mistakes & Fix Workflow

This project includes a dedicated **training pull request** where we
intentionally introduced different kinds of mistakes so that juniors and mids
can practice how to detect and resolve them.

Examples of issues included:

- Typos and naming inconsistencies
- Missing / wrong `await`
- Unnecessary aliases and selectors
- Flaky patterns and poor assertions
- Code style and readability problems
- Minor test logic issues

### How we fix them

Inside the PR conversation we walk through:

1. **Identifying the problem** (why it matters)
2. **Suggested fix** (best practice)
3. **Before vs After** comparison
4. **What to avoid next time**

### Automated checks

- **GitHub Actions** runs the test workflow on every commit.
- **CodeRabbit AI Review** leaves comments and suggestions to improve quality.

### When we get the green light to merge

A pull request can be accepted when:

✔ All GitHub Actions checks pass  
✔ CodeRabbit comments are reviewed / resolved  
✔ Tests are stable and readable  
✔ The code follows project conventions

This PR is designed as a learning reference — showing common mistakes and how to resolve them quickly and safely.

---

## ✉️ Contact

Maintained by stylianosSeniorAutomation — open an issue or PR for questions, suggestions, or fixes.

---

## 📜 License

This project is provided as an example. Add or change a license file as appropriate for your use.
