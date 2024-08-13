# My Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and experiences in web development, particularly focusing on my work with SvelteKit and TailwindCSS.

## Table of Contents

- Overview
- Features
- Technologies Used
- Setup and Installation
- Usage
- Project Structure
- RSI Heatmap Integration
- Supervisor Configuration
- Contributing
- Contact
- License
- Resources
- Steps to Restart the Project After Reboot
- Troubleshooting Tips

## Overview

This portfolio highlights my expertise in full-stack development, design, and communication. It features various projects, including a crypto trading bot and other tools for cryptocurrency traders.

## Features

- **Responsive Design**: Adaptable layout for all devices.
- **Projects Showcase**: Detailed descriptions of my projects.
- **Contact Form**: Get in touch directly through the site.
- **Crypto Trading Tools**: Information on tools developed for analyzing cryptocurrency markets.
- **RSI Heatmap**: A real-time RSI heatmap visualization for cryptocurrencies integrated within the portfolio.

## Technologies Used

- **Frontend**: SvelteKit, TailwindCSS
- **Backend**: Node.js, Express.js, Flask
- **Other**: Docker, GitHub, Netlify

## Setup and Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
   

   git clone https://github.com/CAUCORASEKO/My_portfolio.git
   cd My_portfolio

    
**Install dependencies**:

npm install --legacy-peer-deps


**Start the development server**:

npm run dev

**Access the application**:

For the Svelte application: http://localhost:5173

**Usage**

Navigate the Site: Explore different sections like Projects, About Me, and more.
Crypto Trading Bot: Access the bot via the provided Telegram link.
Tools Page: Find tools for analyzing the cryptocurrency market.
RSI Heatmap: The heatmap is accessible within the project at http://localhost:5173/tools.

**RSI Heatmap Integration**

The RSI Heatmap feature is integrated into the Tools section of the portfolio. It leverages a Flask backend to generate real-time heatmaps of the Relative Strength Index (RSI) for top cryptocurrencies. Below is an overview of the integration process:

**Backend Deployment**:
        
The RSI heatmap backend is deployed using Flask and hosted on Railway. The backend generates the RSI heatmap image, which the Svelte frontend fetches and displays.

**Frontend Integration**:

In the tools.svelte file, a fetch request is made to the deployed backend to retrieve the heatmap image. The image is then dynamically displayed in the Svelte application.

**CORS Configuration**:

To allow the frontend to request resources from the backend hosted on a different domain, Cross-Origin Resource Sharing (CORS) was enabled in the Flask backend. This ensures that requests from the Svelte frontend are permitted.

**Modifications**:
        
The original RSI heatmap code was adapted to fit our specific deployment needs, including:
Path adjustments: Modified the path for saving and serving the image to ensure compatibility with the Railway hosting environment.

CORS handling: Added CORS headers to the Flask backend to allow cross-origin requests from the Svelte application.

**Credit**:
        
This RSI heatmap implementation is based on the work of Stephan Akkerman. You can find the original repository here.

**Supervisor Configuration**

The project uses supervisord to manage and monitor the Svelte frontend and Flask backend processes. Below is an overview of the supervisord.conf file used in this project:

**Configuration File supervisord.conf**:

[supervisord]
nodaemon=true

[program:flask]
command=gunicorn -w 4 -b 0.0.0.0:5001 src.routes.tools.rsi_heatmap.main:app
directory=/app
autostart=true
autorestart=true
stderr_logfile=/var/log/flask.err.log
stdout_logfile=/var/log/flask.out.log

[program:svelte]
command=npm run preview -- --host 0.0.0.0
directory=/app
autostart=true
autorestart=true
stderr_logfile=/var/log/svelte.err.log
stdout_logfile=/var/log/svelte.out.log

**Explanation**:

[supervisord]:

nodaemon=true: This option runs supervisord in the foreground. It's useful for debugging and ensures that logs are output directly to the terminal, rather than detaching and running as a background process.

    [program
    ]:
        command=gunicorn -w 4 -b 0.0.0.0:5001 src.routes.tools.rsi_heatmap.main:app: This command starts the Flask application using Gunicorn with 4 worker processes. The application is bound to all network interfaces on port 5001.
        directory=/app: Specifies the working directory for the Flask application.
        autostart=true: Ensures that the Flask program starts automatically when supervisord starts.
        autorestart=true: Automatically restarts the Flask program if it crashes.
        stderr_logfile=/var/log/flask.err.log: The log file where standard error output for the Flask program is stored.
        stdout_logfile=/var/log/flask.out.log: The log file where standard output for the Flask program is stored.

    [program
    ]:
        command=npm run preview -- --host 0.0.0.0: This command starts the Svelte application in preview mode, making it accessible on all network interfaces.
        directory=/app: Specifies the working directory for the Svelte application.
        autostart=true: Ensures that the Svelte program starts automatically when supervisord starts.
        autorestart=true: Automatically restarts the Svelte program if it crashes.
        stderr_logfile=/var/log/svelte.err.log: The log file where standard error output for the Svelte program is stored.
        stdout_logfile=/var/log/svelte.out.log: The log file where standard output for the Svelte program is stored.

**Usage**

To start supervisord with this configuration, ensure that the supervisord.conf file is properly set up in your Docker container or server. This will automatically manage the Svelte and Flask processes, ensuring that they start on boot and restart in case of failure.
Benefits

**Using supervisord provides the following benefits**:

    Process Management: Automatically starts and restarts your processes, ensuring high availability.
    Logging: Centralized logging makes it easy to track the output and errors of both the Svelte and Flask applications.
    Scalability: With Gunicorn managing multiple workers for the Flask app, the system can handle multiple requests concurrently, improving performance.

    
## JSON Configuration Files

### package.json

The `package.json` file is a key file in any Node.js project that defines the project's details, manages dependencies, and scripts. Below is an explanation of each section in our `package.json`:

{
  "name": "cauco",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "vite dev --host",
    "build": "vite build",
    "preview": "vite preview --host",
    "start": "node build",
    "start:railway": "vite preview --host 0.0.0.0 --port $PORT"
  },
  "devDependencies": {
    "@sveltejs/adapter-auto": "^2.0.0",
    "@sveltejs/kit": "^1.30.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "svelte": "^4.0.5",
    "tailwindcss": "^3.4.6",
    "vite": "^4.4.2"
  },
  "dependencies": {
    "@sveltejs/adapter-node": "^5.2.0",
    "chart.js": "^4.4.3",
    "mdn-data": "^2.9.0",
    "nodemailer": "^6.9.14"
  },
  "type": "module"
}

name: The name of the project.

version: The version of the project.

private: If set to true, it prevents the project from being accidentally published to the npm registry.

scripts: Defines commands that you can run from the command line using npm run <script>. 

In this project:

dev: Starts the Vite development server in host mode.
build: Compiles the project into a production-optimized format.
preview: Previews the production build.
start: Starts the application using Node.js.
start:railway: Configures and launches the application on Railway with the necessary options for deployment.

devDependencies: Dependencies required only for project development. It includes tools like Vite, Svelte, TailwindCSS, and PostCSS.

dependencies: Dependencies required for the project to run in production. It includes adapters for Svelte, libraries like Chart.js, and Nodemailer for sending emails.

type: Indicates that the project uses ECMAScript modules, instead of CommonJS modules.

**package-lock.json**

The package-lock.json file is automatically generated when you run npm install in a project. This file ensures that dependencies are installed in the same way across all machines by locking the exact versions of each package and its sub-dependencies.

**This file includes**:

version: The version of the package-lock.json schema.
requires: Indicates if the package requires other dependencies.
dependencies: A detailed list of each dependency, including its version, integrity, and the versions of its sub-dependencies.

The package-lock.json is crucial for maintaining a consistent development environment, ensuring that all developers and deployment environments use the same versions of the project’s dependencies.


**Project Structure**
     

     |-- src
|   |-- components
|   |   |-- Step.svelte
|   |   |-- rsiheatmap.svelte
|   |-- routes
|       |-- index.svelte
|       |-- about.svelte
|       |-- tools.svelte
|-- static
|   |-- images
|       |-- profile.png
|       |-- Project Structure.png
|-- package.json
|-- svelte.config.js
|-- Dockerfile

      

Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or additions.
Contact

Claudio Valenzuela - latribubooking@gmail.com

Project Link: https://github.com/CAUCORASEKO/My_portfolio
License

**This project is licensed under the MIT License.**

**Resources**

Init SvelteKit w. TailwindCSS: TailwindCSS Guide
Google Fonts: Google Fonts
Font Awesome CDN: Font Awesome CDN
Font Awesome Icons: Font Awesome Icons
Particles js: Particles.js

Steps to Restart the Project After Reboot

**Open Terminal and navigate to your project directory**:


cd ~/Desktop/My_portfolio

**Start Docker**:

Make sure Docker Desktop is running. If it's not, start Docker Desktop from your applications.

**Build the Docker image (if needed)**:

docker build -t my_svelte_app .

**Run the Docker container**:



    docker run -p 8081:4173 -p 5002:5001 my_svelte_app

Ensure there are no port conflicts. If there are, stop the conflicting services or containers and try running the command again.

**Access the application**:
        
For the Svelte application: http://localhost:5173
For the API (heatmap): http://localhost:5002/heatmap

**Troubleshooting Tips**

Check Docker Status:
Make sure Docker is running. If you encounter issues, restart Docker Desktop.

**Check Logs**:

If the application is not running as expected, check the Docker container logs:

bash

docker logs <container_id>

**Port Conflicts**:

Ensure no other services are running on ports 8081 or 5002. Use lsof -i :<port> to check and kill -9 <PID> to stop them if necessary.