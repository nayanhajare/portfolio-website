# Nayan Hajare - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills, projects, and experience as a Full Stack Web Developer.

## 🚀 Live Demo

https://nayanportfolio-p95xocog2-nayan-hajares-projects.vercel.app/

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Key Features](#key-features)
- [Contact](#contact)

## 👨‍💻 About

Hi, I am **Nayan Hajare**, a passionate and detail-oriented Full Stack Web Developer. I specialize in building responsive, dynamic web applications using modern technologies like React, Node.js, MongoDB, and Firebase.

With hands-on experience working on real-world projects such as a Loan Application System, a Collaborative Workspace Platform, and an Investment Portfolio Tracker, I love turning complex problems into simple, user-friendly solutions.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Navigation**: Smooth scrolling navigation with active states
- **Contact Form**: Functional contact form with EmailJS integration
- **Resume Download**: Direct resume download functionality
- **Project Showcase**: Detailed project presentations with external links
- **Skills Display**: Interactive skills section with icons
- **Social Links**: Direct links to LinkedIn, GitHub, and Instagram

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling navigation

### State Management
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux

### Forms & Validation
- **Formik** - Form handling
- **EmailJS** - Email service integration

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/           # Project images and assets
│   ├── resume.pdf        # Resume file for download
│   └── index.html
├── src/
│   ├── components/
│   │   ├── aboutMeSection/     # About me section
│   │   ├── contactMeSection/   # Contact form and social links
│   │   ├── experienceSection/  # Work experience
│   │   ├── footer/             # Footer component
│   │   ├── heroSection/        # Hero section with gradient
│   │   ├── navbar/             # Navigation bar
│   │   ├── projectsSection/    # Project showcase
│   │   ├── skillsSection/      # Skills display
│   │   └── subHeroSection/     # Sub hero section
│   ├── framerMotion/           # Animation variants
│   ├── state/                  # Redux store and slices
│   ├── App.jsx                 # Main app component
│   └── main.jsx               # Entry point
├── package.json
└── README.md
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nayanhajare/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Key Features Implementation

#### Resume Download
- Click "Resume" in the navbar to download the resume PDF
- Opens in new tab and triggers automatic download

#### Project Links
- All project links open in new tabs
- External links have proper security attributes

#### Social Media Links
- LinkedIn, GitHub, and Instagram links open in new tabs
- Secure implementation with `rel="noopener noreferrer"`

#### Contact Form
- Integrated with EmailJS for email functionality
- Form validation with Formik
- Responsive design with proper styling

## 🎯 Key Features

### Navigation
- **Smooth Scrolling**: Seamless navigation between sections
- **Active States**: Visual feedback for current section
- **Mobile Responsive**: Collapsible mobile menu

### Animations
- **Framer Motion**: Smooth entrance animations
- **Hover Effects**: Interactive elements with transitions
- **Scroll Animations**: Elements animate on scroll

### Sections
1. **Hero Section**: Introduction with gradient background
2. **About Me**: Personal introduction and background
3. **Skills**: Technical skills with icons
4. **Experience**: Work history and achievements
5. **Projects**: Portfolio projects with links
6. **Contact**: Contact form and social links

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Responsive breakpoints for tablets
- **Desktop Optimized**: Full desktop experience
- **Cross Browser**: Compatible with all modern browsers

## 🔧 Customization

### Adding Projects
Edit `src/components/projectsSection/ProjectsMain.jsx`:
```javascript
const projects = [
  {
    name: "Your Project",
    year: "2024",
    align: "left", // or "right"
    image: "/path/to/image.jpg",
    link: "https://github.com/your-repo",
  },
];
```

### Updating Skills
Edit `src/components/skillsSection/AllSkills.jsx`:
```javascript
const skills = [
  {
    skill: "Your Skill",
    icon: YourIcon,
  },
];
```

### Changing Colors
Update Tailwind classes in components or modify `tailwind.config.js` for custom colors.

## 📞 Contact

- **LinkedIn**: [Nayan Hajare](https://www.linkedin.com/in/nayan-hajare/)
- **GitHub**: [nayanhajare](https://github.com/nayanhajare)
- **Instagram**: [nayyanhajare](https://www.instagram.com/nayyanhajare)
- **Email**: [Contact via form on website]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Icons** for the beautiful icon set
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first styling
- **Vite** for the fast development experience

---

**Built with ❤️ by Nayan Hajare**
