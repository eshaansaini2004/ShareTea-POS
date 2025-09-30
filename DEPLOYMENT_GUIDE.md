# 🚀 Tea Shop Deployment Guide

This guide will help you deploy your tea shop application to production hosting platforms.

## 📋 Prerequisites

- GitHub account (to store your code)
- Google Cloud Console account (for OAuth)
- OpenWeatherMap account (for weather API)

## 🎯 Hosting Architecture

```
Frontend (React) → Vercel
Backend (Node.js) → Railway
Database (PostgreSQL) → Railway PostgreSQL
```

## 📦 Step 1: Prepare Your Code for Production

### 1.1 Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git remote add origin https://github.com/yourusername/tea-shop-app.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 1.2 Create Production Environment Files

Create these files in your project:

**Backend `.env` (for Railway):**
```env
# Database configuration
PSQL_USER=postgres
PSQL_HOST=your-railway-db-host
PSQL_DATABASE=railway
PSQL_PASSWORD=your-railway-db-password
PSQL_PORT=5432
SSL_MODE=true

# Server configuration
API_MASTER_KEY=your-secure-api-key-here
PORT=8080
NODE_ENV=production
```

**Frontend `.env.production` (for Vercel):**
```env
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
REACT_APP_GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Weather API Configuration
REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key_here

# Backend API URL (will be your Railway URL)
REACT_APP_API_URL=https://your-app-name.railway.app

# API Key for backend authentication
REACT_APP_API_KEY=your-secure-api-key-here
```

## 🗄️ Step 2: Set Up Database (Railway PostgreSQL)

1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Provision PostgreSQL"
4. Copy the connection details:
   - Host
   - Port
   - Database name
   - Username
   - Password
5. Update your backend `.env` with these details

## 🔧 Step 3: Deploy Backend (Railway)

1. In Railway, click "New Project" → "Deploy from GitHub repo"
2. Select your repository
3. Choose the `backend` folder as the root directory
4. Add environment variables:
   - Copy all variables from your backend `.env`
5. Deploy!
6. Note your backend URL (e.g., `https://your-app-name.railway.app`)

## ⚛️ Step 4: Deploy Frontend (Vercel)

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project" → Import your repository
4. Set build settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Add environment variables:
   - Copy all variables from your frontend `.env.production`
6. Deploy!

## 🔐 Step 5: Update OAuth Settings

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to your OAuth 2.0 credentials
3. Add authorized redirect URIs:
   - `https://your-vercel-app.vercel.app/oauth2callback`
4. Update your frontend environment variables

## 🧪 Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Test the kiosk functionality
3. Test manager login with Google OAuth
4. Verify all features work correctly

## 🔄 Step 7: Set Up Database Schema

After your backend is deployed, you need to set up the database:

1. SSH into your Railway backend or use Railway's console
2. Run: `npm run setup`

Or create a one-time setup script that runs automatically.

## 📊 Monitoring & Maintenance

### Railway Backend
- Monitor logs in Railway dashboard
- Check resource usage
- Set up alerts for downtime

### Vercel Frontend
- Monitor deployments in Vercel dashboard
- Check analytics for usage
- Set up custom domain if needed

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Update CORS settings in backend
   - Ensure frontend URL is whitelisted

2. **Database Connection Issues**
   - Verify environment variables
   - Check SSL settings

3. **OAuth Not Working**
   - Verify redirect URIs match exactly
   - Check client ID and secret

4. **API Calls Failing**
   - Verify API URL in frontend
   - Check backend is running

## 💡 Pro Tips

1. **Custom Domain**: You can add a custom domain to both Vercel and Railway
2. **Environment Management**: Use different environment variables for staging/production
3. **Backup**: Set up automated database backups
4. **Monitoring**: Use Railway and Vercel's built-in monitoring tools

## 🔗 Useful Links

- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [PostgreSQL on Railway](https://docs.railway.app/databases/postgresql)

---

**Need Help?** Check the troubleshooting section or refer to the platform documentation.
