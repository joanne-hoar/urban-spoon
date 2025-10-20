# Urban Spoon

A simple "Hello World" Angular application deployed to Azure Static Web Apps with CI/CD.

## Overview

This is a minimal Angular application demonstrating deployment to Azure Static Web Apps using GitHub Actions for continuous integration and deployment.

## Features

- Simple Angular standalone component
- Azure Static Web Apps deployment
- Automated CI/CD with GitHub Actions
- Responsive "Hello World" interface

## Prerequisites

- Node.js (v20 or later)
- npm
- Angular CLI (`npm install -g @angular/cli`)

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload when you change source files.

3. **Build the project:**
   ```bash
   ng build
   ```
   Build artifacts will be stored in the `dist/urban-spoon-app/` directory.

4. **Run tests:**
   ```bash
   ng test
   ```

## Azure Static Web Apps Deployment

This project is configured for automatic deployment to Azure Static Web Apps.

### Setup Instructions

1. **Create an Azure Static Web App:**
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new Static Web App resource
   - Link it to this GitHub repository

2. **Configure the secret:**
   - Azure will automatically add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your repository
   - This enables the GitHub Actions workflow to deploy your app

3. **Automatic deployment:**
   - Push to the `main` branch to trigger deployment
   - Pull requests will create preview environments
   - When PRs are closed, preview environments are cleaned up

### Workflow Configuration

The deployment workflow is defined in `.github/workflows/azure-static-web-apps.yml`:
- **App location:** `/` (root of the repository)
- **Output location:** `dist/urban-spoon-app` (Angular build output)
- **Triggers:** Push to main branch and pull request events

## Project Structure

```
urban-spoon/
├── src/
│   ├── app/
│   │   ├── app.ts          # Main application component
│   │   ├── app.html        # Component template
│   │   ├── app.css         # Component styles
│   │   └── app.spec.ts     # Unit tests
│   ├── index.html          # Main HTML file
│   └── main.ts             # Application entry point
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml  # CI/CD workflow
├── angular.json            # Angular CLI configuration
├── package.json            # npm dependencies
└── tsconfig.json           # TypeScript configuration
```

## Technologies Used

- **Angular** (v20.3.6) - Frontend framework
- **TypeScript** - Programming language
- **Azure Static Web Apps** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

## License

This project is open source and available for educational purposes.

