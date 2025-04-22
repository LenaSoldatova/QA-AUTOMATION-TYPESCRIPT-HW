# Expense Tracker App With React.JS!

Build Expense Tracker App Using React.JS + ES6 & React Hooks...... React (Javascript Most Famous Framework)...... Expense App Panacloud Bootcamp 2020 First Assignment...!

➡️➡️➡️ https://expense-tracker-app-react-web2.surge.sh/ 🚀

# Expense Tracker App with React and Playwright

This project is a simple Expense Tracker built with React.js.  
It includes automated UI tests written with Playwright.

## Features

- Add and track income/expenses
- Display current balance and transaction history
- Simple UI built with React Hooks
- Dockerized development and test environments

## Project Structure

```
.
├── src/                      # React application
├── tests/                   # Playwright tests
├── Dockerfile               # React app container
├── Dockerfile.test          # Playwright test container
├── docker-compose.yml       # Multi-container orchestration
├── wait-for-app.js          # Waits for app to be ready
├── .env                     # Environment variables
```

## How to Run

### 1. Start the App and Run Tests (in Docker)

```bash
docker compose up --build
```

> This builds and starts the app, waits for readiness, and then runs Playwright tests.

### 2. Run Only Tests

If the app is already running:

```bash
docker compose run --rm tests sh -c "node wait-for-app.js && npx playwright test"
```

### 3. Rebuild after Code Changes

If you change test or app code, rebuild the images:

```bash
docker compose build
```