# MongoDB Change Streams - Fix for Replica Set Error

## Problem

You're getting: `The $changeStream stage is only supported on replica sets`

This happens because MongoDB change streams require a **replica set**, but your local MongoDB is running in **standalone mode**.

## Solutions (Pick One)

### Solution 1: Use MongoDB Atlas (Easiest for Now) ✅ RECOMMENDED

MongoDB Atlas (cloud) automatically has replica sets enabled.

1. Go to: https://www.mongodb.com/cloud/atlas
2. Create free account (M0 tier is free forever)
3. Create a cluster
4. Copy connection string
5. Update `server/.env`:

```bash
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/nautral_foods?retryWrites=true&w=majority
```

6. Restart backend
7. Real-time updates will work!

**No local setup needed, just update the connection string.**

---

### Solution 2: Set Up Local MongoDB Replica Set

#### Windows

```bash
# Stop MongoDB if running (Ctrl+C)

# Start MongoDB with replica set
mongod --replSet rs0

# In another terminal, connect to MongoDB
mongosh

# Initialize replica set (run once)
rs.initiate()

# Verify it's a replica set
rs.status()

# Exit
exit
```

#### Mac

```bash
# If using Homebrew
brew services stop mongodb-community

# Start with replica set
mongod --replSet rs0

# In another terminal
mongosh

# Initialize (run once)
rs.initiate()

# Verify
rs.status()

# Exit
exit
```

#### Linux (Ubuntu)

```bash
# Stop service
sudo systemctl stop mongod

# Edit MongoDB config (or start with flags)
mongod --replSet rs0

# In another terminal
mongosh

# Initialize (run once)
rs.initiate()

# Verify
rs.status()

# Exit
exit
```

---

### Solution 3: Disable Real-time Updates (Fallback)

If you don't want to set up replica sets or MongoDB Atlas, the app still works - just without real-time SSE updates. Users need to refresh to see new orders.

The backend has been updated to gracefully handle this.

---

## Current Status

Your backend has been updated to:

- ✅ Handle the replica set error gracefully
- ✅ Show a helpful warning message
- ✅ Keep the app running (just without real-time updates)
- ✅ SSE endpoint still works (but broadcasts won't update in real-time)

## Quick Fix (Recommended)

### Option A: MongoDB Atlas (5 minutes)

1. Visit https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update `server/.env` with the connection string
5. Restart backend

### Option B: Local Replica Set (10 minutes)

1. Stop MongoDB (Ctrl+C)
2. Run: `mongod --replSet rs0`
3. In new terminal: `mongosh`
4. Run: `rs.initiate()`
5. Close mongosh: `exit`
6. Restart backend

### Option C: Keep as-is

App works fine, just no real-time updates. Users refresh to see new orders.

---

## Testing

After setting up replica set or MongoDB Atlas:

1. **Restart backend:**

   ```bash
   cd server
   pnpm dev
   ```

2. **You should see:** `MongoDB connected` (no error)

3. **Test real-time:**
   - Open admin in 2 windows
   - Create order in window 1
   - Window 2 updates instantly (without refresh)

---

## Which Option to Choose?

| Option                | Pros                                                          | Cons                     | Time   |
| --------------------- | ------------------------------------------------------------- | ------------------------ | ------ |
| **MongoDB Atlas**     | ✅ Cloud hosting, auto replica set, free tier, no local setup | Need internet connection | 5 min  |
| **Local Replica Set** | ✅ Real-time works, fully local control                       | More setup, uses RAM     | 10 min |
| **Keep as-is**        | ✅ No setup needed, still functional                          | No real-time updates     | 0 min  |

**Recommendation:** Use **MongoDB Atlas** for simplicity and cloud benefits. Or set up **local replica set** if you prefer everything local.

---

## After Fixing

Your app will have:

- ✅ All orders save to database
- ✅ Orders persist after page refresh
- ✅ Orders sync real-time between windows (if using Atlas or replica set)
- ✅ Admin dashboard fully functional
- ✅ Email notifications working

---

## Help

**Need more details?** See MONGODB_SETUP.md for complete MongoDB configuration guide.

**Questions?** Check INTEGRATION.md for architecture details.
