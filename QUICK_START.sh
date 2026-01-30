#!/usr/bin/env bash
# Natural Foods - Copy-Paste Quick Start Commands
# Run each section in a different terminal window

# ============================================
# Terminal 1: Start MongoDB
# ============================================
mongod


# ============================================
# Terminal 2: Start Backend Server
# ============================================
cd server
pnpm install
pnpm dev

# Expected output:
# ✓ Server running on http://localhost:4000
# ✓ Connected to MongoDB


# ============================================
# Terminal 3: Start Frontend Server
# ============================================
pnpm install
pnpm dev --host

# Expected output:
# ➜  Local:   http://localhost:5173
# ➜  press h to show help


# ============================================
# Then visit in browser:
# http://localhost:5173
# ============================================

# ============================================
# Test the app:
# 1. Click "🔑 অ্যাডমিন" button
# 2. Log in with password: admin123
# 3. Click "নতুন অর্ডার যোগ করুন" tab
# 4. Fill the form and click "যোগ করুন"
# 5. Watch order appear instantly!
# ============================================


# ============================================
# Troubleshooting: Check if services are running
# ============================================

# Check MongoDB
mongosh --eval "db.version()"

# Check backend
curl http://localhost:4000/health

# Check frontend (should show HTML)
curl http://localhost:5173


# ============================================
# View MongoDB data
# ============================================
mongosh
> use nautral_foods
> db.orders.find()
> db.orders.deleteMany({})  # Clear orders if needed
> exit


# ============================================
# Stop services (Ctrl+C in each terminal)
# ============================================
# Press Ctrl+C in each terminal to stop
