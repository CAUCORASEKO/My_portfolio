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

    Install dependencies:

   

npm install --legacy-peer-deps

Start the development server:



    npm run dev

    Access the application:
        For the Svelte application: http://localhost:5173

Usage

    Navigate the Site: Explore different sections like Projects, About Me, and more.
    Crypto Trading Bot: Access the bot via the provided Telegram link.
    Tools Page: Find tools for analyzing the cryptocurrency market.
    RSI Heatmap: The heatmap is accessible within the project at http://localhost:5173/tools.

RSI Heatmap Integration

The RSI Heatmap feature is integrated into the Tools section of the portfolio. It leverages a Flask backend to generate real-time heatmaps of the Relative Strength Index (RSI) for top cryptocurrencies. Below is an overview of the integration process:
1. Backend Deployment

The RSI heatmap backend is deployed using Flask and hosted on Railway. The backend generates the RSI heatmap image, which the Svelte frontend fetches and displays.
2. Frontend Integration

In the tools.svelte file, a fetch request is made to the deployed backend to retrieve the heatmap image. The image is then dynamically displayed in the Svelte application.
3. CORS Configuration

To allow the frontend to request resources from the backend hosted on a different domain, Cross-Origin Resource Sharing (CORS) was enabled in the Flask backend. This ensures that requests from the Svelte frontend are permitted.
4. Modifications

The original RSI heatmap code was adapted to fit our specific deployment needs, including:

    Path adjustments: Modified the path for saving and serving the image to ensure compatibility with the Railway hosting environment.
    CORS handling: Added CORS headers to the Flask backend to allow cross-origin requests from the Svelte application.

5. Credit

This RSI heatmap implementation is based on the work of Stephan Akkerman. You can find the original repository here.
Project Structure



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

This project is licensed under the MIT License.

Resources ( Search on Google )

    Init SvelteKit w. TailwindCSS: TailwindCSS Guide
    Google Fonts: Google Fonts
    Font Awesome CDN: Font Awesome CDN
    Font Awesome Icons: Font Awesome Icons
    Particles js: Particles.js

Steps to Restart the Project After Reboot

    Open Terminal and navigate to your project directory:

    

cd ~/Desktop/My_portfolio

Start Docker:
Make sure Docker Desktop is running. If it's not, start Docker Desktop from your applications.

Build the Docker image (if needed):



docker build -t my_svelte_app .

Run the Docker container:



    docker run -p 8081:4173 -p 5002:5001 my_svelte_app

    Ensure there are no port conflicts. If there are, stop the conflicting services or containers and try running the command again.

    Access the application:
        For the Svelte application: http://localhost:5173
        For the API (heatmap): http://localhost:5002/heatmap

Troubleshooting Tips

    Check Docker Status:
    Make sure Docker is running. If you encounter issues, restart Docker Desktop.

    Check Logs:
    If the application is not running as expected, check the Docker container logs:

    

docker logs <container_id>

Port Conflicts:
Ensure no other services are running on ports 8081 or 5002. Use lsof -i :<port> to check and kill -9 <PID> to stop them if necessary.