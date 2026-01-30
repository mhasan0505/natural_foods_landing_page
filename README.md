# Natural Foods Landing Page

## Backend Setup (MongoDB + Real-time Updates)

### 1. Start MongoDB

Ensure MongoDB is running locally or use MongoDB Atlas. The app expects a connection string.

### 2. Configure Backend Environment

Navigate to the server directory and create `.env`:

```bash
cd server
cp .env.example .env
```

Update `.env` with your MongoDB connection:

```bash
MONGODB_URI=mongodb://localhost:27017/nautral_foods
PORT=4000
```

### 3. Install Backend Dependencies

```bash
pnpm install
```

### 4. Start the Backend Server

```bash
pnpm dev
```

The server runs on `http://localhost:4000` with these endpoints:

- `GET /orders` - Fetch all orders
- `POST /orders` - Create new order
- `GET /orders/stream` - Real-time SSE updates
- `GET /health` - Health check

### 5. Configure Frontend API URL

In the root directory, update `.env`:

```bash
VITE_API_URL=http://localhost:4000
VITE_WEB3FORMS_KEY=your-web3forms-access-key
```

### 6. Start Frontend

```bash
cd ..
pnpm dev --host
```

## Email Notifications

Order submissions send emails via Web3Forms:

1. Create a free Web3Forms account and copy your `Access Key`
1. Set `VITE_WEB3FORMS_KEY` in `.env` (see step 5 above)

If the key is missing, orders are still saved but emails are skipped.
