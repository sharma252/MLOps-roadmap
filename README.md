# MLOps Roadmap - Interactive Learning Platform

A modern, interactive React application for learning MLOps from fundamentals to production deployment. Track your progress through comprehensive phases covering ML fundamentals, DevOps, architecture, AWS cloud deployment, and monitoring.

## 🚀 Features

- **Interactive Progress Tracking**: Mark modules as complete and track your overall progress
- **Phase-based Learning**: Structured learning path from ML fundamentals to production deployment
- **Persistent Storage**: Your progress is automatically saved in localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Bootstrap 5 and custom animations
- **Modular Architecture**: Clean, maintainable code structure

## 📁 Project Structure

```
MLOps-roadmap/
├── .github/             # CI/CD workflows
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── PhaseCard.jsx
│   │   ├── ModuleCard.jsx
│   │   ├── CapstoneProject.jsx
│   │   ├── ExitCriteria.jsx
│   │   └── SuccessConfetti.jsx
│   ├── hooks/          # Custom React hooks
│   │   ├── useProgress.js
│   │   └── usePhaseExpansion.js
│   ├── data/           # Data and configuration
│   │   └── roadmapData.js
│   ├── utils/          # Utility functions
│   │   └── progressUtils.js
│   ├── constants/      # App constants
│   │   └── index.js
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
├── Dockerfile           # Docker configuration
├── nginx.conf           # Nginx configuration
└── README.md
```

## 🛠️ Technologies Used

- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Bootstrap 5** - Responsive CSS framework
- **Lucide React** - Beautiful icon library
- **PropTypes** - Runtime type checking for React props

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd MLOps-roadmap
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐳 Docker Support

To build and run the application using Docker:

1. **Build the Docker image:**

```bash
docker build -t mlops-roadmap .
```

2. **Run the container:**

```bash
docker run -p 8080:80 mlops-roadmap
```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:8080`

## 🔄 CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically:

- Installs dependencies
- Lints the code
- Builds the application
- Verifies the Docker build

This pipeline triggers on push and pull requests to the `main` or `master` branches.

## 🌍 GitHub Pages Deployment

The application is configured to deploy automatically to GitHub Pages using the included workflow (`.github/workflows/deploy.yml`).

1. **Push Changes**: Simply push to the `main` or `master` branch.
2. **Setup**: Go to your repository **Settings > Pages** and verify that "GitHub Actions" is selected as the source.
3. **URL**: The site will be available at `https://<your-username>.github.io/MLOps-roadmap/`.

## 🎨 Key Improvements

1. **Modular Structure**: Separated concerns into components, hooks, utils, and data
2. **Custom Hooks**: Centralized state management with `useProgress` and `usePhaseExpansion`
3. **Utility Functions**: Extracted business logic for better testability
4. **PropTypes Validation**: Added type checking for all components
5. **Accessibility**: Improved keyboard navigation and ARIA labels
6. **Performance**: Optimized re-renders and state updates
7. **Responsive Design**: Mobile-first approach with Bootstrap grid
8. **Modern CSS**: Custom animations and transitions

## 🔧 Configuration

The application uses localStorage for progress persistence. No backend or database is required.

## 📖 Additional Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - Component architecture and data flow

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

Built with ❤️ for aspiring MLOps engineers

---
