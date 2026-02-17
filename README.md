# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and provides a way to get in touch.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface built with Tailwind CSS
- **Component-Based Architecture**: Organized React components for easy maintenance and scalability
- **Type Safety**: Built with TypeScript for robust type checking and better development experience
- **Fast Performance**: Powered by Vite for lightning-fast development and optimized production builds
- **Interactive Sections**:
  - Hero section with introduction
  - About section with personal information
  - Skills showcase
  - Projects gallery
  - Contact form

## 🛠️ Built With

- [React 19](https://react.dev/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vite.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## 🔧 Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

## 🏃 Running the Project

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open at `http://localhost:5173/`

### Production Build

Build the project for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/             # Static assets
├── src/
│   ├── assets/        # Images, fonts, and other assets
│   ├── components/    # React components
│   │   ├── About/     # About section component
│   │   ├── Contact/   # Contact section component
│   │   ├── Hero/      # Hero section component
│   │   ├── Navbar/    # Navigation bar component
│   │   ├── Projects/  # Projects section components
│   │   └── Skills/    # Skills section component
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles (Tailwind imports)
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Customization

### Updating Content

1. **Hero Section**: Edit `src/components/Hero/Hero.tsx`
2. **About Section**: Edit `src/components/About/About.tsx`
3. **Skills**: Edit `src/components/Skills/Skills.tsx`
4. **Projects**: Edit `src/components/Projects/Projects.tsx` and `ProjectCard.tsx`
5. **Contact Information**: Edit `src/components/Contact/Contact.tsx`

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Use Tailwind utility classes within each component

## 📦 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://app.netlify.com/)

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ using React and TypeScript
