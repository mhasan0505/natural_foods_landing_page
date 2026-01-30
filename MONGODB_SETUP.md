# MongoDB Setup Guide

## Local MongoDB Installation

### Windows

#### Option 1: Download MongoDB Community Edition

1. Go to https://www.mongodb.com/try/download/community
2. Select Windows platform
3. Download and run installer
4. Follow installation wizard (keep default paths)
5. MongoDB is installed as Windows Service

#### Option 2: Use Chocolatey

```bash
choco install mongodb-community
```

#### Start MongoDB Service

```bash
# Start via Services
# 1. Press Windows + R, type services.msc
# 2. Find "MongoDB Server"
# 3. Right-click → Start

# Or start from command line
mongod
```

#### Verify MongoDB is Running

```bash
# Open another PowerShell window
mongosh

# You should see MongoDB shell prompt
test>
```

### macOS

```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Verify
mongosh
```

### Linux (Ubuntu)

```bash
# Add MongoDB repository
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | apt-key add -

# Install
apt-get update
apt-get install -y mongodb-mongosh mongodb-server-tools mongodb-database-tools

# Start service
sudo systemctl start mongod

# Verify
mongosh
```

## Cloud Option: MongoDB Atlas

### Setup (Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Create account
4. Create organization and project
5. Create a cluster (M0 free tier is sufficient)
6. Wait for cluster to deploy (~5-10 minutes)
7. Click "Connect" button
8. Choose "Drivers" → Node.js
9. Copy connection string

### Update Backend .env

```bash
# Replace with your Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/nautral_foods?retryWrites=true&w=majority
PORT=4000
```

## Verify Database Setup

### Check if Database Created

```bash
# Connect with mongosh
mongosh

# List databases
show dbs

# Switch to our database
use nautral_foods

# List collections
show collections

# View orders collection
db.orders.find()
```

### First Time Setup

When you run the backend for the first time:

1. MongoDB automatically creates the database if it doesn't exist
2. Mongoose creates the `orders` collection based on the schema
3. You should see output in terminal: `MongoDB connected`

### Sample Order Document

When you create an order via the API, you'll see:

```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "customer": "রহিম সাহেব",
  "email": "rahim@example.com",
  "phone": "01712345678",
  "address": "ঢাকা, বাংলাদেশ",
  "product": "চিয়া সিড ১ কেজি",
  "quantity": 1,
  "amount": 599,
  "status": "নতুন অর্ডার",
  "createdAt": ISODate("2026-01-20T10:30:00.000Z"),
  "updatedAt": ISODate("2026-01-20T10:30:00.000Z")
}
```

## Troubleshooting

### MongoDB won't start

```bash
# On Windows, check if port 27017 is in use
netstat -ano | findstr :27017

# Kill the process if needed
taskkill /PID <PID> /F

# Restart MongoDB service
net start MongoDB
```

### Connection String Error

```bash
# Make sure MongoDB is running before starting backend
mongod  # In one terminal

# Then start backend in another
cd server
pnpm dev
```

### Database Locked

```bash
# This happens if MongoDB crashed during write
# Solution: Delete journal files (Windows)
# Locate MongoDB data directory (default: C:\Program Files\MongoDB\Server\7.0\data)
# Delete contents of journal folder
# Restart mongod
```

### Change Stream Not Working

Change streams require MongoDB Replica Set. If using local MongoDB:

```bash
# Start MongoDB as a replica set (local mode)
mongod --replSet rs0

# In mongosh, initialize replica set
rs.initiate()
```

For Atlas (cloud), replica sets are enabled by default.

## Next Steps

- ✅ MongoDB running locally or on Atlas
- ✅ MONGODB_URI configured in server/.env
- ✅ Backend server can connect
- ✅ Orders collection created
- Ready to run: `cd server && pnpm dev`
