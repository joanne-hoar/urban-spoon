# Urban Spoon - Hello World Azure Static Web App

A simple Hello World application demonstrating CI/CD deployment to Azure Static Web Apps.

## 🎯 Purpose

This project demonstrates:
- Building a simple static web application
- Deploying to Azure Static Web Apps
- Implementing CI/CD with GitHub Actions
- Teaching students modern web deployment practices

## 🚀 Features

- Clean, responsive Hello World page
- Automatic deployment via GitHub Actions
- Modern CSS with animations
- Mobile-friendly design

## 📁 Project Structure

```
.
├── index.html                          # Main HTML page
├── styles.css                          # CSS styling
├── script.js                           # JavaScript functionality
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml  # CI/CD workflow
└── README.md                           # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- GitHub account
- Azure account (free tier works!)

### Azure Static Web Apps Setup

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

2. **Configure the Static Web App**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: Choose a unique name (e.g., `urban-spoon-demo`)
   - **Region**: Choose closest to you
   - **Source**: Select "GitHub"
   - **GitHub Account**: Authorize and select your account
   - **Organization**: Select your GitHub username
   - **Repository**: Select `urban-spoon`
   - **Branch**: Select `main`
   - **Build Presets**: Select "Custom"
   - **App location**: `/`
   - **Api location**: (leave empty)
   - **Output location**: (leave empty)

3. **Get Deployment Token**
   - After creation, go to your Static Web App resource
   - Click "Manage deployment token"
   - Copy the deployment token

4. **Add Secret to GitHub**
   - Go to your GitHub repository
   - Click "Settings" → "Secrets and variables" → "Actions"
   - Click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: Paste the deployment token
   - Click "Add secret"

### Manual Workflow Setup (if needed)

If Azure didn't automatically create the workflow file:
1. The workflow file is already in `.github/workflows/azure-static-web-apps.yml`
2. Make sure the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret is configured
3. Push to the `main` branch to trigger deployment

## 🎓 For Students

### How CI/CD Works

1. **Developer pushes code** to the `main` branch or opens a Pull Request
2. **GitHub Actions triggers** automatically
3. **Workflow runs** build and deployment steps
4. **Azure deploys** the application
5. **Live site updates** automatically!

### Understanding the Workflow

The `.github/workflows/azure-static-web-apps.yml` file contains:
- **Triggers**: When to run (push to main, PR events)
- **Jobs**: What to do (build and deploy, or close PR environment)
- **Steps**: Individual actions to execute

### Key Concepts

- **Static Web App**: HTML, CSS, and JavaScript files served directly
- **CI/CD**: Continuous Integration/Continuous Deployment
- **GitHub Actions**: Automation platform for workflows
- **Azure**: Microsoft's cloud computing platform

## 🔄 Development Workflow

1. Make changes to `index.html`, `styles.css`, or `script.js`
2. Commit and push to your branch
3. Open a Pull Request to `main`
4. Review the preview deployment
5. Merge to `main` to deploy to production

## 🌐 Local Development

Simply open `index.html` in your web browser:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Or just open the file directly
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Then visit: `http://localhost:8000`

## 📝 Customization

### Update the Content
Edit `index.html` to change the message and structure.

### Modify Styling
Edit `styles.css` to customize colors, fonts, and layout.

### Add Interactivity
Edit `script.js` to add JavaScript functionality.

## 🎨 Color Scheme

- Primary: `#667eea` (Purple-Blue)
- Secondary: `#764ba2` (Deep Purple)
- Background: Linear gradient from primary to secondary
- Text: `#333` (Dark Gray)

## 🤝 Contributing

This is a teaching/demo project. Feel free to fork and customize!

## 📚 Additional Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [HTML/CSS/JavaScript Tutorials](https://developer.mozilla.org/)

## 📄 License

This project is open source and available for educational purposes.