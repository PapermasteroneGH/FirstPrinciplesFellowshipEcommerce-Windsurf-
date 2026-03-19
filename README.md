# First Principles Fellowship Website

A modern, responsive informational website built with Next.js 16, React, TypeScript, and TailwindCSS for First Principles Fellowship - a research & development organization providing technical consulting, training, mentorship, and sponsorships to scientific researchers.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, React 18, TypeScript, TailwindCSS
- **Responsive Design**: Mobile-first design with shadcn/ui components
- **Service Information**: Comprehensive details about 4 service categories
- **Contact System**: Interactive contact forms and information pages
- **Professional UI**: Clean, modern design optimized for researchers

## 📦 Services Offered

### Technical Consulting
- Basic Technical Consulting
- Premium Technical Consulting

### Training Programs
- Research Methods Workshop
- Advanced Research Techniques

### Mentorship
- Monthly Mentorship Program
- Annual Mentorship Fellowship

### Sponsorships
- Starter Research Grant
- Advanced Research Fellowship

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts         # Utility functions
└── globals.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/first-principles-fellowship.git
cd first-principles-fellowship
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Create GitHub Repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `first-principles-fellowship`
   - Don't initialize with README (we already have one)

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/first-principles-fellowship.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

4. **Custom Domain** (optional):
   - In Vercel dashboard, go to Project Settings
   - Add your custom domain
   - Update DNS records as instructed

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# For future payment integration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Contact form (if using external service)
CONTACT_API_ENDPOINT=https://...
```

## 📱 Features Breakdown

### Homepage
- Hero section with organization branding
- Services overview with interactive cards
- Testimonials from researchers
- Impact statistics
- Call-to-action sections

### Services Overview
- Category-based service information
- Detailed service descriptions
- Contact forms for service inquiries
- Responsive layout

### Additional Pages
- **About**: Organization mission, team, values
- **Contact**: Contact form, FAQ, multiple contact methods

## 🎨 Design System

- **Primary Color**: Blue (#2563eb)
- **Font**: Geist Sans (system font stack)
- **Components**: shadcn/ui for consistency
- **Icons**: Lucide React
- **Responsive**: Mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, please contact:
- Email: info@firstprinciples.org
- Phone: +1 (555) 123-4567

---

Built with ❤️ for the scientific research community
