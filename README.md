# 🎭 Stand Up Sydney - Comedian Portal

A modern, responsive comedian booking platform built with Next.js, TypeScript, and Wix SDK integration.

## 🌟 Features

- **Comedian Authentication** - Secure login/registration with Google OAuth integration
- **Show Applications** - Browse and apply for comedy shows and events
- **Dashboard Analytics** - Track applications, success rates, and performance metrics
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates** - Live status updates for applications and bookings
- **Profile Management** - Manage comedian profiles, bio, and experience levels

## 🚀 Live Demo

**Production Site:** [https://standupsydney.wixstudio.com/stand-up-sydney](https://standupsydney.wixstudio.com/stand-up-sydney)

## 🛠️ Tech Stack

- **Frontend:** Next.js 14.2.3, React 18, TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Backend:** Wix SDK integration for data management
- **Authentication:** Wix Members API with OAuth support
- **Deployment:** Vercel with automatic CI/CD

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Wix Developer Account

### Setup Instructions

1. **Clone and install:**
   ```bash
   git clone <repository-url>
   cd Comedian_Portal
   npm install
   ```

2. **Install additional Wix packages:**
   ```bash
   npm install @wix/members @wix/redirects @wix/data @wix/identity
   ```

3. **Environment Configuration:**
   Copy `.env.local` and update with your values:
   ```bash
   # WIX Configuration
   NEXT_PUBLIC_WIX_CLIENT_ID=a50c7850-dcd6-4184-b9ad-957b5f2f239c
   NEXT_PUBLIC_WIX_SITE_ID=9b8ae25f-875a-4476-8700-919aa1191a37
   NEXT_PUBLIC_SITE_URL=https://standupsydney.wixstudio.com/stand-up-sydney
   ```

4. **Development:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Quick Deploy to Vercel

1. **One-click deployment:**
   ```bash
   npm run build
   vercel --prod
   ```

2. **Set environment variables in Vercel dashboard:**
   - `NEXT_PUBLIC_WIX_CLIENT_ID`
   - `NEXT_PUBLIC_WIX_SITE_ID` 
   - `NEXT_PUBLIC_SITE_URL`

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   npm run start
   ```

2. **Deploy to your preferred platform:**
   - Vercel (recommended)
   - Netlify
   - Railway
   - Your own server

## 🎯 Current Implementation Status

### ✅ **Working Features:**
- Beautiful responsive UI/UX design
- Login/Registration forms with validation
- Dashboard with analytics cards
- Mock data system for testing
- Google OAuth integration (UI ready)
- Mobile-first responsive design
- TypeScript type safety
- Tailwind CSS styling system

### 🔄 **In Progress/Next Steps:**
- Wix Backend Integration
  - Real authentication with Wix Members API
  - CMS data collections for shows/applications
  - Payment processing integration
- Show Management System
  - Real show data from Wix CMS
  - Application submission functionality
  - Status tracking and notifications
- Advanced Features
  - Email notifications
  - Calendar integration
  - Advanced filtering and search

## 📁 Project Structure

```
Comedian_Portal/
├── pages/
│   ├── _app.tsx          # App configuration & global styles
│   └── index.tsx         # Main portal application
├── styles/
│   ├── globals.css       # Global CSS with Tailwind
│   └── global.css        # Additional custom styles
├── package.json          # Dependencies & scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment config
└── .env.local           # Environment variables
```

## 🔧 Configuration Files

### Key Dependencies
```json
{
  "@wix/sdk": "^1.12.5",
  "@wix/members": "^1.0.0",      // For authentication
  "@wix/data": "^1.0.0",        // For CMS collections  
  "@wix/redirects": "^1.0.0",   // For URL management
  "next": "14.2.3",
  "react": "^18.3.1",
  "tailwindcss": "^3.4.3"
}
```

### Wix Integration
- **Client ID:** `a50c7850-dcd6-4184-b9ad-957b5f2f239c`
- **Site ID:** `9b8ae25f-875a-4476-8700-919aa1191a37`
- **Domain:** `https://standupsydney.wixstudio.com/stand-up-sydney`

## 🎨 Design System

The portal uses a custom design system with:
- **Brand Colors:** Purple gradients (`#6366f1`) and Blue accents (`#3b82f6`)
- **Typography:** System fonts with careful hierarchy
- **Components:** Glassmorphism cards, gradient buttons, responsive layouts
- **Animations:** Smooth transitions and hover effects

## 🧪 Development Workflow

### Testing the Portal
1. **Login Flow:** Use any email/password (currently mocked)
2. **Registration:** Fill out the comedian profile form
3. **Dashboard:** View stats and available shows
4. **Applications:** Click "Apply" buttons (alerts for now)

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Tailwind for consistent styling
- Component-based architecture

## 🤝 Contributing

1. **Setup development environment** (see Installation above)
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Test your changes:** `npm run dev` and test locally
4. **Commit changes:** `git commit -m 'Add amazing feature'`
5. **Push to branch:** `git push origin feature/amazing-feature`
6. **Open Pull Request** with detailed description

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**CSS Issues:**
```bash
# Rebuild Tailwind
npm run dev
```

**Wix Connection Issues:**
- Verify environment variables are set correctly
- Check Wix client/site IDs are valid
- Ensure Wix site has proper permissions

### Getting Help
- Check the [Wix SDK Documentation](https://dev.wix.com/docs/sdk)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Open an issue in this repository

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Live Site:** [https://standupsydney.wixstudio.com/stand-up-sydney](https://standupsydney.wixstudio.com/stand-up-sydney)
- **Wix Dashboard:** [Wix Studio](https://manage.wix.com/)
- **Documentation:** [Wix SDK Docs](https://dev.wix.com/docs/sdk)

---

**Built with ❤️ for the Sydney Comedy Community** **Add proper Next.js folder structure**
