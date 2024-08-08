# My Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and experiences in web development, particularly focusing on my work with SvelteKit and TailwindCSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Overview

This portfolio highlights my expertise in full-stack development, design, and communication. It features various projects, including a crypto trading bot and other tools for cryptocurrency traders.

## Features

- **Responsive Design**: Adaptable layout for all devices.
- **Projects Showcase**: Detailed descriptions of my projects.
- **Contact Form**: Get in touch directly through the site.
- **Crypto Trading Tools**: Information on tools developed for analyzing cryptocurrency markets.

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

Build the Docker image:



docker build -t my_svelte_app .

Run the Docker container:



    docker run -p 8081:4173 -p 5002:5001 my_svelte_app

Usage

    Navigate the Site: Explore different sections like Projects, About Me, and more.
    Crypto Trading Bot: Access the bot via the provided Telegram link.
    Tools Page: Find tools for analyzing the cryptocurrency market.
    RSI Heatmap: The heatmap is accessible within the project at http://localhost:5173/.

Project Structure

Project Structure
Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or additions.
Contact

Claudio Valenzuela - latribubooking@gmail.com

Project Link: https://github.com/CAUCORASEKO/My_portfolio
License

This project is licensed under the MIT License.


### Steps to Restart the Project After Reboot

1. **Open Terminal and navigate to your project directory**:


   cd ~/Desktop/My_Portfolio

    Start Docker:
    Make sure Docker Desktop is running. If it's not, start Docker Desktop from your applications.

    Build the Docker image (if needed):
    If you haven't built the Docker image yet or if there have been changes, build the image:

  

docker build -t my_svelte_app .

Run the Docker container:


    docker run -p 8081:4173 -p 5002:5001 my_svelte_app

    Ensure there are no port conflicts. If there are, stop the conflicting services or containers and try running the command again.

    Access the application:
        For the Svelte application: http://localhost:8081
        For the API (heatmap): http://localhost:5002/heatmap

Troubleshooting Tips

    Check Docker Status:
    Make sure Docker is running. If you encounter issues, restart Docker Desktop.

    Check Logs:
    If the application is not running as expected, check the Docker container logs:

    bash

docker logs <container_id>

Port Conflicts:
Ensure no other services are running on ports 8081 or 5002. Use lsof -i :<port> to check and kill -9 <PID> to stop them if necessary.