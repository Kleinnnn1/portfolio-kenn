# Kenneth Jhun N. Balino - Portfolio

A modern, responsive portfolio website showcasing projects, experience, and skills for Full Stack Developer Kenneth Jhun N. Balino.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Hero Section**: Professional profile introduction with profile image and call-to-action buttons
- **Projects Showcase**: Display of completed projects with details and links
- **Experience Timeline**: Professional work experience and background
- **Skills Section**: Technical skills and technologies
- **Contact Form**: Integrated contact form with email functionality and CAPTCHA verification
- **Custom UI**: Pixel grid background effect for visual interest
- **Dark Theme**: Modern dark mode design with smooth scrolling navigation

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.2.1
- **UI Components**: Lucide React, React Icons
- **Form Services**: EmailJS for email delivery
- **Security**: Cloudflare Turnstile for CAPTCHA
- **Linting**: ESLint

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-kenn
```

2. Install dependencies:
```bash
npm install
```

## Development

To run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` with hot module reload (HMR) enabled.

## Build

To build for production:

```bash
npm run build
```

The optimized build output will be in the `dist/` directory.

## Preview

To preview the production build locally:

```bash
npm run preview
```

## Linting

To run ESLint:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── ui/
│   └── background.jsx (Pixel grid component)
├── assets/
│   └── projectsimg/
├── App.jsx
├── main.jsx
└── index.css
```

## Author

**Kenneth Jhun N. Balino**  
Full Stack Developer

---

Built with React, Vite, and Tailwind CSS
