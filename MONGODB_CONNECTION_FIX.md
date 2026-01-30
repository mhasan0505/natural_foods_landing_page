# MongoDB Atlas Connection Issue Fix

## Problem

`querySrv ECONNREFUSED _mongodb._tcp.cluster0.xsyjkog.mongodb.net`

This means the SRV DNS lookup for MongoDB Atlas is failing on your network.

## Root Cause

Your network/firewall/DNS is blocking the SRV record lookup (`_mongodb._tcp.*`) required by `mongodb+srv://` connections.

## Solution: Use Standard Connection String

### Step 1: Get Standard Connection String from Atlas

1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Click **Database** → **Connect** → **Drivers**
3. Under "Add your connection string", **click the toggle to switch from SRV to Standard**
4. Copy the **full connection string** (it looks like):
   ```
   mongodb://cluster0-shard-00-00.xsyjkog.mongodb.net:27017,cluster0-shard-00-01.xsyjkog.mongodb.net:27017,cluster0-shard-00-02.xsyjkog.mongodb.net:27017/natural_foods?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0
   ```

### Step 2: Update server/.env

Replace the MONGODB_URI in `server/.env` with the Standard string:

```bash
MONGODB_URI=mongodb://cluster0-shard-00-00.xsyjkog.mongodb.net:27017,cluster0-shard-00-01.xsyjkog.mongodb.net:27017,cluster0-shard-00-02.xsyjkog.mongodb.net:27017/natural_foods?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0
PORT=4000
```

**Important:** Replace `<username>` and `<password>` with your actual credentials:

- Username: `mhasancoder_db_user`
- Password: `qjRZ7pEZdEtbnxGI`

### Step 3: Check Atlas Network Access

1. In Atlas → **Network Access**
2. Click **Add IP Address**
3. Choose **Allow Access from Anywhere** (0.0.0.0/0) for testing
4. Or add your current IP address

### Step 4: Restart Backend

```bash
cd server
pnpm dev
```

You should see:

```
MongoDB connected
API running on port 4000
```

## If Standard Connection Still Fails

### Check IP Whitelist

- Atlas → Network Access → make sure your IP is listed or use 0.0.0.0/0

### Verify Credentials

- Atlas → Database Access → make sure user `mhasancoder_db_user` exists with correct password

### Test Connection Manually

```bash
# In PowerShell
Test-NetConnection cluster0-shard-00-00.xsyjkog.mongodb.net -Port 27017
```

Should show `TcpTestSucceeded: True`

### Check Firewall

Make sure port **27017** (MongoDB) is not blocked by:

- Windows Firewall
- Antivirus
- VPN
- Corporate firewall

## Alternative: Use Local MongoDB (Temporary)

If Atlas doesn't work, install MongoDB locally:

### Windows

```bash
# Install via Chocolatey
choco install mongodb

# Or download from mongodb.com/try/download/community

# Start with replica set
mongod --replSet rs0 --dbpath C:\data\db

# In another terminal
mongosh
rs.initiate()
exit
```

Then update `server/.env`:

```bash
MONGODB_URI=mongodb://localhost:27017/natural_foods?replicaSet=rs0
PORT=4000
```

Restart backend and it should work with real-time updates.

## Expected Result

After fixing, you should see:

```
MongoDB connected
API running on port 4000
```

**No more** `querySrv ECONNREFUSED` errors!

Real-time updates will work because Atlas and local replica sets support change streams.
