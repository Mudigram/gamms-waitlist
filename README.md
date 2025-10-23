# GammsApp Waitlist

A modern, responsive waitlist landing page built with Next.js 16, Supabase, and TailwindCSS. This project features a beautiful UI with a countdown timer, social proof, and seamless email collection.

![GammsApp Waitlist](public/logo.jpg)

## 🌟 Features

- ⚡️ Built with Next.js 16 and TypeScript
- 🎨 Styled with TailwindCSS
- 🔐 Supabase for database management
- ⏰ Dynamic countdown timer
- 🌓 Dark mode optimized
- 📱 Fully responsive design
- 🔄 Real-time form validation
- 🎉 Success animations and social sharing
- 🔒 Environment variable protection

## 🚀 Demo

Visit the live demo at [https://gammsapp.vercel.app](https://gammsapp.vercel.app)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- A Supabase account

## 💻 Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/gamms-waitlist.git
cd gamms-waitlist
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

4. Set up your Supabase database:

   - Create a new table called `waitlist` with columns:
     - `email` (text, primary key)
     - `source` (text)
     - `created_at` (timestamp with time zone, default: now())

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Built With

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [Supabase](https://supabase.com/) - Open Source Firebase Alternative
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## 📱 Features Breakdown

- **Dynamic Countdown**: Shows time remaining until launch
- **Email Collection**: Secure email collection with Supabase integration
- **Social Proof**: Display of current waitlist members
- **Share Functionality**: Twitter sharing integration
- **Responsive Design**: Works seamlessly on all devices
- **Loading States**: Smooth loading states for better UX
- **Error Handling**: Comprehensive error handling and user feedback

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

## 📄 Environment Variables

Required environment variables:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

## 🛠️ Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- Your Name - _Initial work_ - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Supabase team for the excellent backend service
- TailwindCSS team for the utility-first CSS framework
