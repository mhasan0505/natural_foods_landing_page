# Frontend-Backend Integration Guide

## System Architecture

```
Frontend (React/Vite)
  ├── OrderForm (creates orders)
  ├── AdminDashboard (displays orders)
  └── EventSource (real-time updates)
         ↓ HTTP
Backend (Express/MongoDB)
  ├── GET /orders (fetch all)
  ├── POST /orders (create new)
  └── GET /orders/stream (SSE real-time)
         ↓
   MongoDB (order storage)
```

## Running the Full Stack

### Step 1: Start MongoDB

Make sure MongoDB is running locally:

```bash
# On Windows (if installed globally)
mongod

# Or use MongoDB Atlas cloud connection
```

### Step 2: Start the Backend Server

```bash
cd server
pnpm install  # Only needed first time
pnpm dev
```

You should see:

```
✓ Server running on http://localhost:4000
✓ Connected to MongoDB
```

### Step 3: Start the Frontend

In a new terminal:

```bash
pnpm install  # Only needed first time
pnpm dev --host
```

The app opens at `http://localhost:5173`

## How It Works

### Order Creation Flow

1. User fills the form in AdminDashboard → OrderForm component
2. `handleSubmit` in OrderForm creates a newOrder object
3. `onAddOrder(newOrder)` calls App.jsx's handleAddOrder function
4. handleAddOrder POSTs to backend: `POST /orders`
5. Backend stores order in MongoDB
6. SSE broadcasts to all connected clients with `order-created` event
7. Frontend's EventSource listener updates orders state automatically
8. Email is sent via Web3Forms (optional, if key configured)
9. Form resets and user sees "Order added successfully"

### Real-time Updates Flow

1. Frontend connects to `GET /orders/stream` when AdminDashboard mounts
2. SSE keeps connection alive with 25-second heartbeat
3. When backend broadcasts an event, all connected clients receive it instantly
4. Frontend merges the update into orders state:
   - `order-created`: adds new order to top of list
   - `order-updated`: updates existing order
   - `order-deleted`: removes order from list
5. AdminDashboard re-renders with latest data

## Environment Variables

### Frontend (.env)

```bash
# API base URL (must match backend port)
VITE_API_URL=http://localhost:4000

# Web3Forms email service (optional)
VITE_WEB3FORMS_KEY=your-access-key
```

### Backend (server/.env)

```bash
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/nautral_foods

# Server port
PORT=4000
```

## API Endpoints

### GET /orders

Fetch all orders, sorted newest first.

**Response:**

```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "customer": "রহিম সাহেব",
    "email": "rahim@example.com",
    "phone": "01712345678",
    "address": "ঢাকা, বাংলাদেশ",
    "product": "চিয়া সিড ১ কেজি",
    "quantity": 1,
    "amount": 599,
    "status": "নতুন অর্ডার",
    "date": "2026-01-20T10:30:00.000Z"
  }
]
```

### POST /orders

Create a new order.

**Request:**

```json
{
  "customer": "রহিম সাহেব",
  "email": "rahim@example.com",
  "phone": "01712345678",
  "address": "ঢাকা, বাংলাদেশ",
  "product": "চিয়া সিড ১ কেজি",
  "quantity": 1,
  "amount": 599,
  "status": "নতুন অর্ডার"
}
```

**Response:** Same as GET /orders item (new order created)

### GET /orders/stream

Server-Sent Events stream for real-time updates.

**Event Types:**

```javascript
// New order created
{
  "type": "order-created",
  "data": { /* order object */ }
}

// Order updated
{
  "type": "order-updated",
  "data": { /* updated order object */ }
}

// Order deleted
{
  "type": "order-deleted",
  "data": { "id": "order-id" }
}
```

## Testing the Integration

### Test Order Creation

1. Click admin button on homepage
2. Log in with password: `admin123`
3. Click "নতুন অর্ডার যোগ করুন" tab
4. Fill in the form and submit
5. Verify:
   - Order appears in the Orders list
   - Stats update (total count increases)
   - Email sent (if Web3Forms configured)

### Test Real-time Updates

1. Open AdminDashboard in browser
2. Open the same page in another tab/window
3. Add an order in tab 1
4. Both tabs should show the new order instantly
5. No page refresh needed!

### Test Multiple Connections

1. Open admin dashboard in 2+ browser windows
2. Create an order in any window
3. All windows update in real-time

## Troubleshooting

### Backend won't start

```bash
# Check MongoDB is running
# On Windows: mongod --version

# Check port 4000 is free
# On Windows: netstat -ano | findstr :4000

# Try different port in server/.env
PORT=5000
```

### Frontend can't connect to backend

- Verify backend is running: `curl http://localhost:4000/health`
- Check VITE_API_URL in frontend .env
- Restart frontend after changing .env
- Check browser console for CORS errors

### Orders not persisting

- Verify MongoDB connection string is correct
- Check MongoDB is running and accessible
- Look for errors in backend terminal

### Real-time updates not working

- Check EventSource connection in browser DevTools (Network tab)
- Look for "GET /orders/stream" request
- Should show `text/event-stream` Content-Type

### Emails not sending

- Verify VITE_WEB3FORMS_KEY is set in frontend .env
- Get key from: https://web3forms.com
- Check browser console for Web3Forms errors

## Next Steps

- Add order status updates from admin dashboard
- Implement order deletion
- Add order filtering/search backend
- Add database indexes for performance
- Deploy to production (Vercel/Heroku)
