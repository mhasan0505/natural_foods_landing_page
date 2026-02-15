# Natural Foods Backend API

Express.js backend for Natural Foods order management system.

## Deployment Instructions

### Deploy to Render.com (Free)

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Add backend for deployment"
   git push
   ```

2. **Create Render Account:**
   - Go to https://render.com
   - Sign up with GitHub

3. **Deploy Backend:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `mhasan0505/natural_foods_landing_page`
   - Configure:
     - **Name:** `natural-foods-api`
     - **Root Directory:** `server`
     - **Environment:** `Node`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Instance Type:** `Free`

4. **Add Environment Variables:**
   - Click "Environment" tab
   - Add:
     - **MONGODB_URI:** `mongodb+srv://mhasancoder_db_user:EdmnWF3XuAfryOKg@nfoods.mh3rz5y.mongodb.net/natural_foods?retryWrites=true&w=majority`
     - **PORT:** `4000`

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (3-5 minutes)
   - Copy the URL (e.g., `https://natural-foods-api.onrender.com`)

6. **Update Vercel Frontend:**
   - Go to your Vercel project
   - Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://natural-foods-api.onrender.com`
   - Redeploy frontend

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 4000)

## Local Development

```bash
npm install
npm run dev
```
