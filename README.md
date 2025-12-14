# 🔢 Modern Counter Application

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A beautifully designed counter application with elegant UI and smooth animations**

[View Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Overview

This is a modern, elegant counter application built with React 19 and styled with Tailwind CSS 4. Featuring a stunning "Coming Soon" inspired design, this counter app demonstrates the power of React hooks (useState) combined with beautiful, responsive UI design.

### ✨ Key Features

- 🎨 **Stunning UI/UX** - Inspired by premium "Coming Soon" pages with elegant gradients
- ⚡ **Lightning Fast** - Built on Vite for optimal performance and instant HMR
- 📱 **Fully Responsive** - Perfect experience across all devices and screen sizes
- 🎯 **Interactive Buttons** - Increment, Decrement, +5, and Reset functionality
- 🌊 **Smooth Animations** - Beautiful hover effects and transitions
- 🎭 **Professional Design** - Clean navigation bar with social media icons
- 🔢 **Large Display** - Easy-to-read counter with elegant padding
- 💫 **Modern Stack** - React 19, Vite, and Tailwind CSS 4

---

## 🎬 Features Breakdown

### Counter Operations
- **Increment** - Add 1 to the counter
- **Decrement** - Subtract 1 from the counter  
- **+5** - Quick increment by 5
- **Reset** - Return counter to 0

### UI Elements
- Elegant navigation bar with logo and links
- Social media integration (Facebook, Twitter, Telegram)
- Large, centered counter display with glass-morphism effect
- Rounded button design with hover animations
- "Learn More" call-to-action link
- "Made by Mayank Soni" attribution
- Subtle background pattern for depth

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/counter-app.git
   cd counter-app
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
   ```
   Navigate to http://localhost:5173
   ```

---

## 🛠️ Built With

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.2.0 |
| **Vite** | Build Tool & Dev Server | 7.2.5 |
| **Tailwind CSS** | Styling Framework | 4.1.17 |
| **ESLint** | Code Quality | 9.39.1 |

---

## 📁 Project Structure

```
counter-app/
├── src/
│   ├── components/
│   │   └── counter.jsx          # Main counter component
│   ├── App.jsx                   # App root component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
└── eslint.config.js              # ESLint configuration
```

---

## 💻 Code Example

The counter uses React's `useState` hook for state management:

```javascript
const [count, setCount] = useState(0)

const increment = () => {
    setCount(count + 1)
}

const decrement = () => {
    setCount(count - 1)
}

const reset = () => {
    setCount(0)
}

const incBy5 = () => {
    setCount(count + 5)
}
```

---

## 🎨 Design Philosophy

This counter application follows modern web design principles:

- **Minimalism** - Clean layout with focus on functionality
- **Hierarchy** - Clear visual hierarchy with size and spacing
- **Color Theory** - Soft gray gradients with teal accents
- **Accessibility** - High contrast and readable fonts
- **Responsiveness** - Mobile-first approach
- **Micro-interactions** - Subtle animations for better UX

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

- **Vercel** - Connect your GitHub repo for automatic deployments
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use GitHub Actions for deployment
- **Railway** - One-click deployment from GitHub

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎯 Use Cases

This counter template can be adapted for:

- 📊 Analytics dashboards
- 🎮 Game score tracking
- 🛒 Shopping cart quantities
- 👥 People counters
- ⏱️ Event attendance tracking
- 📈 Data visualization components
- 🎓 Educational React projects

---

## 🔧 Customization

### Changing Colors

Edit the Tailwind classes in `counter.jsx`:

```javascript
// Change button colors
className="bg-teal-800 hover:bg-teal-900"

// Change background gradient
className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200"
```

### Modifying Initial Value

Change the initial state:

```javascript
const [count, setCount] = useState(10) // Start from 10
```

### Adding New Operations

Add custom counter operations:

```javascript
const multiplyBy2 = () => {
    setCount(count * 2)
}
```

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mayank Soni**

- Portfolio: [mikeydebug.github.io](https://mikeydebug.github.io/portfolio/)
- GitHub: [@mikeydebug](https://github.com/mikeydebug)

---

## 🙏 Acknowledgments

- Design inspired by modern "Coming Soon" pages
- React documentation and community
- Tailwind CSS for utility-first styling
- Vite for blazing fast development experience
- The open-source community

---

## 📸 Screenshots

### Desktop View
![Counter Desktop](screenshot-desktop.png)

### Mobile View
![Counter Mobile](screenshot-mobile.png)

---

## 🗺️ Roadmap

- [ ] Add dark mode toggle
- [ ] Implement counter history
- [ ] Add keyboard shortcuts
- [ ] Create custom increment/decrement values
- [ ] Add sound effects
- [ ] Implement localStorage for persistence
- [ ] Add animation presets
- [ ] Create multiple counter instances

---

<div align="center">

**⭐ Star this repo if you find it helpful! ⭐**

Made with ❤️ by Mayank Soni

</div>
