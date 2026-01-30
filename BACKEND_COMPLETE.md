# Natural Foods - Backend Integration Complete ✅

## What's Been Completed

### Frontend-Backend Integration

- ✅ App.jsx now fetches orders from MongoDB API on mount
- ✅ Real-time SSE (Server-Sent Events) connection for live updates
- ✅ OrderForm posts new orders to backend API
- ✅ AdminDashboard displays loading state during fetch
- ✅ Automatic order state updates when new orders created

### Backend API

- ✅ Express server with MongoDB connection
- ✅ GET /orders endpoint (fetch all orders)
- ✅ POST /orders endpoint (create new order)
- ✅ GET /orders/stream endpoint (SSE real-time updates)
- ✅ Change stream watching for automatic broadcasts
- ✅ CORS enabled for frontend access
- ✅ Health check endpoint at /health

### Database

- ✅ MongoDB schema with all required fields
- ✅ Bengali status enum for order tracking
- ✅ Automatic timestamps (createdAt, updatedAt)
- ✅ Change stream support for real-time updates

### Configuration

- ✅ .env.example with VITE_API_URL and VITE_WEB3FORMS_KEY
- ✅ .env file created with default values
- ✅ server/.env.example with MONGODB_URI and PORT
- ✅ server/.env file created with MongoDB connection

### Documentation

- ✅ README.md updated with backend setup steps
- ✅ INTEGRATION.md with architecture diagram and testing guide
- ✅ MONGODB_SETUP.md with installation and troubleshooting
- ✅ ADMIN_SETUP.md with login credentials
- ✅ quick-start.js helper script

## Quick Start

### Prerequisites

- Node.js and pnpm installed
- MongoDB running locally (or MongoDB Atlas connection)

### Step 1: Start MongoDB

```bash
mongod
```

### Step 2: Start Backend

```bash
cd server
pnpm install  # First time only
pnpm dev
```

### Step 3: Start Frontend (New Terminal)

```bash
pnpm install  # First time only
pnpm dev --host
```

Visit `http://localhost:5173` and test:

1. Click admin button
2. Log in with password: `admin123`
3. Create a test order
4. See real-time updates!

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend (React)                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐  │
│  │  OrderForm       │  │ AdminDashboard   │  │ EventSource  │  │
│  │  (creates)       │  │ (displays)       │  │ (real-time)  │  │
│  └──────────────────┘  └──────────────────┘  └──────────────┘  │
│         │                      │                      │           │
└─────────┼──────────────────────┼──────────────────────┼───────────┘
          │ POST /orders         │ GET /orders          │ GET /orders/stream
          │ (create)             │ (fetch all)          │ (SSE stream)
┌─────────┼──────────────────────┼──────────────────────┼───────────────────┐
│         ▼                      ▼                      ▼                     │
│    ┌─────────────────────────────────────────────────────────────────┐    │
│    │              Backend API (Express)                              │    │
│    │  ┌────────────────────────────────────────────────────────────┐ │    │
│    │  │  POST /orders      Create new order                        │ │    │
│    │  │  GET /orders       Fetch all orders (sorted -createdAt)    │ │    │
│    │  │  GET /orders/stream SSE real-time updates (keep-alive)     │ │    │
│    │  │  GET /health       Health check                            │ │    │
│    │  └────────────────────────────────────────────────────────────┘ │    │
│    │         │                                                          │    │
│    │         │ Mongoose ODM                                            │    │
│    │         │                                                          │    │
│    │  ┌──────▼───────────────────────────────────────────────────────┐ │    │
│    │  │  Change Stream Watcher                                       │ │    │
│    │  │  - Watches Order collection                                  │ │    │
│    │  │  - Broadcasts insert/update/delete events                   │ │    │
│    │  │  - Sends to all connected SSE clients                       │ │    │
│    │  └──────────────────────────────────────────────────────────────┘ │    │
│    └──────────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                        ┌─────────────▼──────────────┐
                        │  MongoDB (orders collection)│
                        └────────────────────────────┘
```

## Data Flow Examples

### Creating an Order

```
User fills form → handleSubmit → onAddOrder → fetch POST /orders → Backend saves to DB → Change stream broadcasts → SSE sends event → Frontend updates state → AdminDashboard re-renders
```

### Real-time Updates (Multiple Windows)

```
Window 1: Add order → POST /orders → MongoDB saves → Change stream detects → Broadcasts to all SSE clients → Window 1 & 2 both update instantly
```

### Initial Load

```
AdminDashboard mounts → useEffect fetches GET /orders → Displays existing orders → Connects EventSource → Ready for live updates
```

## API Request Examples

### Fetch All Orders

```bash
curl http://localhost:4000/orders
```

### Create New Order

```bash
curl -X POST http://localhost:4000/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer": "রহিম সাহেব",
    "email": "rahim@example.com",
    "phone": "01712345678",
    "address": "ঢাকা, বাংলাদেশ",
    "product": "চিয়া সিড ১ কেজি",
    "quantity": 1,
    "amount": 599,
    "status": "নতুন অর্ডার"
  }'
```

### Subscribe to Real-time Events

```bash
curl http://localhost:4000/orders/stream
# Connection stays open, receives events as they happen
```

## Environment Variables

### Frontend (.env)

```bash
# API server location
VITE_API_URL=http://localhost:4000

# Email service (optional)
VITE_WEB3FORMS_KEY=your-web3forms-access-key
```

### Backend (server/.env)

```bash
# MongoDB connection
MONGODB_URI=mongodb://localhost:27017/nautral_foods

# Server port
PORT=4000
```

## Available Commands

### Frontend

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Check code style
```

### Backend

```bash
cd server
pnpm dev          # Start with auto-reload
pnpm start        # Start production server
```

## Testing Checklist

- [ ] MongoDB is running
- [ ] Backend server starts with "API running on port 4000"
- [ ] Frontend connects to http://localhost:5173
- [ ] Can log in with password: admin123
- [ ] Can create new orders
- [ ] Orders appear instantly (no refresh needed)
- [ ] Stats update in real-time
- [ ] Orders persist after page reload
- [ ] Multiple windows/tabs show same orders
- [ ] Email sent (check console/spam folder if configured)

## Troubleshooting

### "Cannot connect to MongoDB"

- Verify MongoDB is running: `mongod`
- Check connection string in server/.env
- Try localhost vs 127.0.0.1

### "CORS error in browser console"

- Backend server must be running
- VITE_API_URL must match backend address
- Restart frontend after changing .env

### "Orders not updating in real-time"

- Check EventSource in DevTools Network tab
- Should be GET /orders/stream request
- Look for any SSE connection errors

### "500 error creating order"

- Check all required fields are sent
- Verify product price matches available products
- Look at backend terminal for detailed error

## Next Features to Add

1. **Order Status Updates**
   - Add PUT /orders/:id endpoint
   - Update status from AdminDashboard
   - Broadcast status changes via SSE

2. **Order Deletion**
   - Add DELETE /orders/:id endpoint
   - Remove order from AdminDashboard
   - Broadcast deletion via SSE

3. **Advanced Filtering**
   - Backend filters by date range
   - Filter by status with query params
   - Sort options (newest/oldest/highest amount)

4. **Search Optimization**
   - MongoDB text indexes
   - Full-text search capability
   - Pagination support

5. **Export/Download**
   - Export orders as CSV
   - Generate PDF invoices
   - Email export to admin

6. **Authentication**
   - Replace hardcoded password with proper auth
   - JWT tokens for API
   - Role-based access control

7. **Production Deployment**
   - Deploy frontend to Vercel
   - Deploy backend to Render/Railway
   - Use MongoDB Atlas for cloud database
   - Configure environment variables

## Support

For detailed setup instructions, see:

- [README.md](README.md) - Project overview
- [INTEGRATION.md](INTEGRATION.md) - Architecture & testing
- [MONGODB_SETUP.md](MONGODB_SETUP.md) - Database setup
- [ADMIN_SETUP.md](ADMIN_SETUP.md) - Admin login
