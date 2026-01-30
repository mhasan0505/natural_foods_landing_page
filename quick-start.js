#!/usr/bin/env node
/* eslint-env node */

/**
 * Quick Start Script for Natural Foods
 *
 * This script helps verify your setup is correct before running the full stack.
 * Run: node quick-start.js
 */

import { spawn } from "node:child_process";
import process from "node:process";

const isWindows = process.platform === "win32";
const shell = isWindows ? "powershell.exe" : "/bin/bash";

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
};

console.log(`
${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}
${colors.blue}Natural Foods - Quick Start${colors.reset}
${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}
`);

const checks = [
  {
    name: "Node.js",
    cmd: "node --version",
    required: true,
  },
  {
    name: "pnpm",
    cmd: "pnpm --version",
    required: true,
  },
  {
    name: "MongoDB",
    cmd: "mongod --version",
    required: true,
  },
];

let allGood = true;

// Check prerequisites
log.info("Checking prerequisites...\n");

for (const check of checks) {
  try {
    const result = spawn(check.cmd, { shell, stdio: "pipe" });
    result.on("close", (code) => {
      if (code === 0) {
        log.success(`${check.name} installed`);
      } else if (check.required) {
        log.error(`${check.name} not found (required)`);
        allGood = false;
      }
    });
  } catch {
    if (check.required) {
      log.error(`${check.name} not found (required)`);
      allGood = false;
    }
  }
}

// Check environment files
log.info("\nChecking environment files...\n");

const fs = await import("node:fs");

if (fs.existsSync(".env")) {
  log.success(".env exists");
} else {
  log.warning(".env not found - create from .env.example");
}

if (fs.existsSync("server/.env")) {
  log.success("server/.env exists");
} else {
  log.warning("server/.env not found - create from server/.env.example");
}

// Instructions
console.log(`
${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}
${colors.blue}Setup Instructions${colors.reset}
${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}

${colors.green}1. Start MongoDB${colors.reset}
   Make sure MongoDB is running on localhost:27017
   ${colors.yellow}mongod${colors.reset}

${colors.green}2. Install Backend Dependencies${colors.reset}
   ${colors.yellow}cd server && pnpm install && cd ..${colors.reset}

${colors.green}3. Start Backend Server${colors.reset}
   ${colors.yellow}cd server && pnpm dev${colors.reset}
   Should show: "API running on port 4000"

${colors.green}4. In New Terminal - Install Frontend Dependencies${colors.reset}
   ${colors.yellow}pnpm install${colors.reset}

${colors.green}5. Start Frontend Development Server${colors.reset}
   ${colors.yellow}pnpm dev --host${colors.reset}
   Opens at http://localhost:5173

${colors.green}6. Test the App${colors.reset}
   - Click admin button
   - Log in with password: admin123
   - Create a test order
   - Verify it appears in real-time

${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}

${colors.blue}Documentation${colors.reset}
- Frontend Setup: See README.md
- Backend Setup: See MONGODB_SETUP.md
- Integration: See INTEGRATION.md
- Admin Guide: See ADMIN_SETUP.md

${allGood ? colors.green : colors.yellow}Ready to start!${colors.reset}
`);
