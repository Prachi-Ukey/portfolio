# Prachi Ukey - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The website is designed to showcase professional information, projects, technical skills, experience, and contact details in a clean and interactive interface.

## 🚀 Features

* **Modern Design**: Dark theme with glassmorphism effects and gradients
* **Fully Responsive**: Optimized for mobile, tablet, and desktop screens
* **Smooth Animations**: Powered by Framer Motion
* **SEO Friendly**: Includes essential meta tags and social sharing metadata
* **Accessible**: Semantic HTML and keyboard-friendly components
* **Component-Based**: Built with reusable React components
* **Project Showcase**: Displays projects with technologies and GitHub links
* **Contact Section**: Provides multiple ways for visitors to get in touch
* **Responsive Navigation**: Smooth navigation between portfolio sections

## 📋 Sections

* **Hero**
* **About**
* **Skills**
* **Experience**
* **Projects**
* **Education**
* **Certifications**
* **Achievements**
* **Contact**
* **Footer**

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Version Control**: Git, GitHub

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Prachi-Ukey/portfolio.git
```

Navigate to the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment

This project can be deployed on platforms such as Vercel or Netlify.

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select **Vite** as the framework.
4. Use:

```text
Build Command: npm run build
Output Directory: dist
```

5. Deploy the project.

## 🎨 Customization

Portfolio content is centralized in:

```text
src/data/portfolio.ts
```

This allows the portfolio information to be updated without modifying individual components.

The project follows a component-based structure, making it easier to maintain and extend.

## 📱 Responsive Design

The website is designed to work across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

## ♿ Accessibility

The project includes:

* Semantic HTML
* Accessible interactive elements
* Keyboard-friendly navigation
* Visible focus states
* Alternative text for images
* Responsive layouts

## 👤 Author

**Prachi Ukey**

* GitHub: https://github.com/Prachi-Ukey
* LinkedIn: https://www.linkedin.com/in/prachi-ukey-02573b2a2/
* Email: [ukeyp9051@gmail.com](mailto:ukeyp9051@gmail.com)

