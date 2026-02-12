# AI Automation Agency Website

A professional, modern Next.js website for your AI automation agency. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your computer
- A code editor (VS Code recommended)
- Git installed

### Installation

1. **Extract the files** to a folder on your computer

2. **Open terminal/command prompt** in that folder

3. **Install dependencies:**
```bash
npm install
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser** and go to `http://localhost:3000`

You should see your website running!

## 📁 Project Structure

```
ai-agency-website/
├── app/                    # Next.js 14 app directory
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with navigation
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── navigation.tsx    # Header navigation
│   └── footer.tsx        # Footer
├── lib/                   # Utility functions
└── public/               # Static files (images, etc.)
```

## 🎨 Customization

### 1. Update Your Branding

**Change the company name:**

Open `components/navigation.tsx` and replace "AI Agency":
```typescript
<span className="text-2xl font-bold text-primary">
  Your Company Name
</span>
```

**Update contact information:**

Edit `components/footer.tsx`:
```typescript
<a href="mailto:hello@yourcompany.com">
  hello@yourcompany.com
</a>
<a href="tel:+1234567890">
  (123) 456-7890
</a>
```

### 2. Customize Colors

The site uses a blue color scheme. To change it:

Open `tailwind.config.js` and modify the primary color:
```javascript
colors: {
  primary: {
    DEFAULT: "hsl(221.2 83.2% 53.3%)", // Change this
  }
}
```

### 3. Update Content

- **Homepage:** Edit `app/page.tsx`
- **Services:** Edit `app/services/page.tsx`
- **Pricing:** Edit `app/pricing/page.tsx`
- **Contact:** Edit `app/contact/page.tsx`

### 4. Add Your Logo

1. Add your logo image to the `public/` folder
2. Update `components/navigation.tsx`:

```typescript
import Image from "next/image"

<Link href="/" className="flex items-center">
  <Image src="/logo.png" alt="Logo" width={40} height={40} />
  <span className="ml-2 text-2xl font-bold">Your Company</span>
</Link>
```

## 📧 Setting Up Contact Form

The contact form currently just displays a success message. To actually receive submissions:

### Option 1: Email Service (Recommended)

**Using Resend (easiest):**

1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Install the package:
```bash
npm install resend
```

3. Create `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    await resend.emails.send({
      from: 'website@yourdomain.com',
      to: 'hello@yourcompany.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

4. Update `app/contact/page.tsx` handleSubmit:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setIsSubmitted(true)
    }
  } catch (error) {
    alert('Failed to send. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Option 2: Google Forms

1. Create a Google Form
2. Get the form action URL
3. Update the form in `app/contact/page.tsx` to submit to that URL

### Option 3: Supabase (if you want to store submissions)

See the Supabase setup section below.

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free)

1. **Create a Vercel account** at https://vercel.com

2. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

3. **Import to Vercel:**
   - Go to vercel.com/new
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live in 2 minutes

4. **Connect your domain:**
   - Buy a domain (Namecheap, GoDaddy, etc.)
   - In Vercel dashboard, go to Settings > Domains
   - Add your domain and follow DNS instructions

### Alternative: Deploy to Netlify

1. Push code to GitHub (same as above)
2. Go to netlify.com
3. Click "Add new site" > "Import an existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

## 📊 Add Google Analytics

1. Get your GA4 tracking ID from Google Analytics

2. Create `app/layout.tsx` and add:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🔧 Environment Variables

Create a `.env.local` file for secrets:

```bash
# Email service
RESEND_API_KEY=your_resend_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Database (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

**Important:** Never commit `.env.local` to Git. It's already in `.gitignore`.

## 🎯 SEO Optimization

The site is already optimized with:
- ✅ Semantic HTML
- ✅ Meta descriptions
- ✅ Responsive design
- ✅ Fast loading

To improve further:

1. **Add sitemap:** Create `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://yourdomain.com/services',
      lastModified: new Date(),
    },
    // Add all your pages
  ]
}
```

2. **Add robots.txt:** Create `app/robots.ts`:
```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

## 📱 Adding a Booking Calendar

### Using Cal.com (Free)

1. Sign up at https://cal.com
2. Create an event type (e.g., "Free 30-Min Audit")
3. Get your booking link
4. Add to your site:

In `app/contact/page.tsx`, add above the form:
```typescript
<div className="mb-8 p-6 bg-blue-50 rounded-lg">
  <h3 className="font-bold mb-2">Prefer to book directly?</h3>
  <Button asChild>
    <a href="https://cal.com/yourname/30min" target="_blank">
      Book on Calendar
    </a>
  </Button>
</div>
```

## 🐛 Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Styling not working
```bash
# Rebuild Tailwind
npm run dev
```

## 📦 Production Build

Before deploying, test the production build locally:

```bash
npm run build
npm run start
```

This builds the site and runs it in production mode at http://localhost:3000

## 🔐 Security Checklist

Before going live:

- [ ] Remove all placeholder text
- [ ] Update all contact information
- [ ] Set up email forwarding
- [ ] Configure environment variables on Vercel/Netlify
- [ ] Add SSL certificate (automatic on Vercel/Netlify)
- [ ] Set up form spam protection
- [ ] Add privacy policy and terms pages
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check all links work

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🆘 Need Help?

Common issues and solutions:

1. **Site not loading:** Check if dev server is running (`npm run dev`)
2. **Styles broken:** Clear `.next` folder and restart
3. **Form not submitting:** Check browser console for errors
4. **Deployment fails:** Check build logs on Vercel/Netlify

## 📝 Next Steps

After getting the site running:

1. ✅ Customize branding and content
2. ✅ Set up contact form email
3. ✅ Add your domain
4. ✅ Deploy to Vercel
5. ✅ Add Google Analytics
6. ✅ Set up Cal.com booking
7. ✅ Create privacy policy
8. ✅ Test on mobile
9. ✅ Start driving traffic!

---

**Built with ❤️ for your AI automation agency**

Good luck with your business! 🚀
