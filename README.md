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
- **Backend**: Node.js, Express.js, Flask (for heatmap generation)
- **Other**: Docker, GitHub, Netlify

## Setup and Installation

To get a local copy up and running, follow these simple steps:

### Using Docker

1. **Clone the repository**:
   
   git clone https://github.com/CAUCORASEKO/My_portfolio.git
   cd My_portfolio

    Build the Docker image:

    

docker build -t my_svelte_app .

Run the Docker container:



    docker run -p 8081:4173 -p 5002:5001 my_svelte_app

    Visit the site:
        Open your browser and go to http://localhost:8081 for the Svelte application.
        For the Flask API (heatmap), go to http://localhost:5002/heatmap.

After Restarting Your Computer

    Start Docker Desktop to ensure the Docker daemon is running.

    Navigate to your project directory:

   

cd ~/Desktop/My_portfolio

Run the Docker container:



    docker run -p 8081:4173 -p 5002:5001 my_svelte_app

    Visit the site using the URLs mentioned above.

Without Docker (Development Environment)

    Clone the repository:

   

git clone https://github.com/CAUCORASEKO/My_portfolio.git
cd My_portfolio

Install dependencies:



npm install

Start the development server:



    npm run dev

    Visit the site:
    Open your browser and go to http://localhost:5173.

Usage

    Navigate the Site: Explore different sections like Projects, About Me, and more.
    Crypto Trading Bot: Access the bot via the provided Telegram link.
    Tools Page: Find tools for analyzing the cryptocurrency market.

Project Structure

Project Structure
Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or additions.
Contact

Claudio Valenzuela - latribubooking@gmail.com

Project Link: https://github.com/CAUCORASEKO/My_portfolio
License

This project is licensed under the MIT License.





     
