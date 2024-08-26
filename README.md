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
- **Other**: Docker, GitHub, Netlify, Railway

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

    
### JSON Configuration Files

### package.json

The `package.json` file is a key file in any Node.js project that defines the project's details, manages dependencies, and scripts. Below is an explanation of each section in our `package.json`:

```
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
```
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
     

```
Project Root
├── src/
│   ├── components/
│   │   ├── Footer.svelte
│   │   ├── Header.svelte
│   │   ├── Main.svelte
│   │   ├── Modal.svelte
│   │   ├── modalStore.js
│   │   └── Step.svelte
│   ├── lib/
│   │   └── index.js
│   ├── routes/
│   │   ├── api/
│   │   │   └── contact.js
│   │   └── tools/
│   │       ├── rsi_heatmap/
│   │       │   ├── __pycache__/
│   │       │   ├── data.py
│   │       │   └── main.py
│   │       ├── cryptohunter.svelte
│   │       ├── news.svelte
│   │       ├── rsiheatmap.svelte
│   │       ├── +layout.svelte
│   │       └── +page.svelte
│   ├── app.css
│   ├── app.html
│   └── global.css
├── static/
│   ├── assets/
│   ├── images/
│   └── favicon.png
├── .env
├── .gitattributes
├── .gitignore
├── .hintrc
├── .npmrc
├── Dockerfile
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── Procfile
├── README.md
├── requirements.txt
├── supervisord.conf
├── svelte.config.js
├── tailwind.config.cjs
├── tailwind.config.js
└── vite.config.js
```


      

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


docker logs <container_id>

**Port Conflicts**:

Ensure no other services are running on ports 8081 or 5002. Use lsof -i :<port> to check and kill -9 <PID> to stop them if necessary.

---------------------------------
# SUOMEKSI 
---------------------------------

# Omat Projektini

Tervetuloa henkilökohtaiselle portfoliosivustolleni! Tämä projekti esittelee taitojani, projektejani ja kokemuksiani verkkokehityksessä, erityisesti keskittyen työhöni SvelteKitin ja TailwindCSS:n kanssa.

## Sisällysluettelo

- Yleiskatsaus
- Ominaisuudet
- Käytetyt Teknologiat
- Asennus ja Käyttöönotto
- Käyttöohjeet
- Projektin Rakenne
- RSI-lämpökartan Integrointi
- Supervisor Konfiguraatio
- Osallistuminen
- Yhteystiedot
- Lisenssi
- Resurssit
- Projektin Uudelleenkäynnistyksen Vaiheet
- Vianetsintävinkit

## Yleiskatsaus

Tämä portfolio korostaa asiantuntemustani full-stack-kehityksessä, suunnittelussa ja viestinnässä. Se sisältää erilaisia projekteja, mukaan lukien kryptovaluuttakaupparobotin ja muita työkaluja kryptovaluuttakauppiaille.

## Ominaisuudet

- **Responsiivinen Suunnittelu**: Soveltuva asettelu kaikille laitteille.
- **Projektiesittely**: Yksityiskohtaiset kuvaukset projekteistani.
- **Yhteydenottolomake**: Ota yhteyttä suoraan sivuston kautta.
- **Kryptovaluuttakauppatyökalut**: Tietoa kryptovaluuttamarkkinoiden analysointiin kehitettyistä työkaluista.
- **RSI-lämpökartta**: Reaaliaikainen RSI-lämpökartta kryptovaluutoille, integroitu osaksi portfoliota.

## Käytetyt Teknologiat

- **Frontend**: SvelteKit, TailwindCSS
- **Backend**: Node.js, Express.js, Flask
- **Muut**: Docker, GitHub, Netlify, Railway

## Asennus ja Käyttöönotto

Saadaksesi paikallisen kopion toimimaan, noudata näitä yksinkertaisia ​​vaiheita:

1. **Kloonaa repo**:

   ```bash
   git clone https://github.com/CAUCORASEKO/My_portfolio.git
   cd My_portfolio
   ```

2. **Asenna riippuvuudet**:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Käynnistä kehityspalvelin**:

   ```bash
   npm run dev
   ```

4. **Käytä sovellusta**:

   Svelte-sovellukselle: http://localhost:5173

## Käyttöohjeet

Selaa sivustoa: Tutustu eri osioihin, kuten Projektit, Tietoa minusta ja paljon muuta.  
Kryptovaluuttakaupparobotti: Käytä robottia annetun Telegram-linkin kautta.  
Työkalusivu: Löydä työkaluja kryptovaluuttamarkkinoiden analysointiin.  
RSI-lämpökartta: Lämpökartta on käytettävissä projektin sisällä osoitteessa http://localhost:5173/tools.

## RSI-lämpökartan Integrointi

RSI-lämpökarttaominaisuus on integroitu portfolion Työkalut-osioon. Se hyödyntää Flask-taustapalvelinta tuottamaan reaaliaikaisia ​​RSI-lämpökarttoja tärkeimmistä kryptovaluutoista. Alla on yhteenveto integrointiprosessista:

### Taustapalvelimen Käyttöönotto:

RSI-lämpökartta-taustapalvelin on otettu käyttöön käyttämällä Flaskia ja se on isännöity Railwaylla. Taustapalvelin luo RSI-lämpökarttakuvan, jonka Svelte-frontend hakee ja näyttää.

### Frontend Integraatio:

Tiedostossa tools.svelte tehdään haku pyyntö käyttöönotettuun taustapalvelimeen lämpökarttakuvan noutamiseksi. Kuva näytetään sitten dynaamisesti Svelte-sovelluksessa.

### CORS-konfiguraatio:

Jotta frontend voisi pyytää resursseja eri verkkotunnuksessa isännöidystä taustapalvelimesta, Flask-taustapalvelimessa otettiin käyttöön Cross-Origin Resource Sharing (CORS). Tämä varmistaa, että pyynnöt Svelte-frontendista ovat sallittuja.

### Muutokset:

Alkuperäinen RSI-lämpökoodia mukautettiin vastaamaan erityisiä käyttöönoton tarpeitamme, mukaan lukien:
- Polun säätäminen: Kuvan tallennus- ja tarjoilupolun muokkaaminen yhteensopivuuden varmistamiseksi Railway-hosting-ympäristön kanssa.
- CORS-käsittely: CORS-otsikoiden lisääminen Flask-taustapalvelimeen mahdollistamaan cross-origin-pyynnöt Svelte-sovelluksesta.

### Kiitokset:

Tämä RSI-lämpökarttatoimeenpano perustuu Stephan Akkermanin työhön. Alkuperäisen repoon voit tutustua täällä.

## Supervisor Konfiguraatio

Projekti käyttää supervisord-ohjelmaa hallitsemaan ja valvomaan Svelte-frontendin ja Flask-taustapalvelimen prosesseja. Alla on yleiskatsaus supervisord.conf-tiedostosta, jota käytetään tässä projektissa:

### Konfiguraatiotiedosto supervisord.conf:

```ini
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
```

### Selitys:

- `[supervisord]`:

  - `nodaemon=true`: Tämä asetus suorittaa supervisordin etualalla. Se on hyödyllinen vianetsinnässä ja varmistaa, että lokit tulostetaan suoraan terminaaliin sen sijaan, että ne irtoaisivat ja toimisivat taustaprosessina.

- `[program:flask]`:
  - `command=gunicorn -w 4 -b 0.0.0.0:5001 src.routes.tools.rsi_heatmap.main:app`: Tämä komento käynnistää Flask-sovelluksen käyttämällä Gunicornia neljän työntekijäprosessin kanssa. Sovellus on sidottu kaikkiin verkkoliitäntöihin portissa 5001.
  - `directory=/app`: Määrittää Flask-sovelluksen työkirjaston.
  - `autostart=true`: Varmistaa, että Flask-ohjelma käynnistyy automaattisesti, kun supervisord käynnistyy.
  - `autorestart=true`: Käynnistää Flask-ohjelman automaattisesti uudelleen, jos se kaatuu.
  - `stderr_logfile=/var/log/flask.err.log`: Lokitiedosto, johon Flask-ohjelman virhelokit tallennetaan.
  - `stdout_logfile=/var/log/flask.out.log`: Lokitiedosto, johon Flask-ohjelman tulostuslokit tallennetaan.

- `[program:svelte]`:
  - `command=npm run preview -- --host 0.0.0.0`: Tämä komento käynnistää Svelte-sovelluksen esikatselutilassa, mikä tekee siitä käytettävissä kaikilla verkkoliitännöillä.
  - `directory=/app`: Määrittää Svelte-sovelluksen työkirjaston.
  - `autostart=true`: Varmistaa, että Svelte-ohjelma käynnistyy automaattisesti, kun supervisord käynnistyy.
  - `autorestart=true`: Käynnistää Svelte-ohjelman automaattisesti uudelleen, jos se kaatuu.
  - `stderr_logfile=/var/log/svelte.err.log`: Lokitiedosto, johon Svelte-ohjelman virhelokit tallennetaan.
  - `stdout_logfile=/var/log/svelte.out.log`: Lokitiedosto, johon Svelte-ohjelman tulostuslokit tallennetaan.

### Käyttö:

Käynnistä supervisord tällä kokoonpanolla varmistaaksesi, että supervisord.conf-tiedosto on oikein määritetty Docker-kontissasi tai palvelimellasi. Tämä hallitsee automaattisesti Svelte- ja Flask-prosessit, varmistaen, että ne käynnistyvät käynnistyksessä ja käynnistyvät automaattisesti uudelleen, jos ne kaatuvat.

```bash
supervisord -c /path/to/supervisord.conf
```

**Supervisorin käytön edut ovat seuraavat**:

- Prosessien hallinta: Käynnistää ja käynnistää prosessisi automaattisesti varmistaen korkean käytettävyyden.
- Kirjaaminen: Keskitetty kirjaaminen helpottaa sekä Svelte- että Flask-sovellusten tulostuksen ja virheiden seurantaa.
- Skaalautuvuus: Kun Gunicorn hallitsee useita työntekijöitä Flask-sovelluksessa, järjestelmä voi käsitellä useita pyyntöjä samanaikaisesti, mikä parantaa suorituskykyä.

## JSON-konfiguraatiotiedostot

### package.json

`package.json`-tiedosto on keskeinen tiedosto missä tahansa Node.js-projektissa, joka määrittelee projektin yksityiskohdat, hallitsee riippuvuuksia ja skriptejä. Alla on selitys jokaisesta osasta meidän `package.json`-tiedostossamme:

```json
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
```

- `name`: Projektin nimi.

- `version`: Projektin versio.

- `private`: Jos asetettu true, estää projektin vahingossa julkaisemisen npm-rekisteriin.

- `scripts`: Määrittää komennot, joita voit suorittaa komentoriviltä käyttämällä `npm run <skripti>`.

  Tässä projektissa:
  - `dev`: Käynnistää Vite-kehityspalvelimen isäntätilassa.
  - `build`: Kääntää projektin tuotanto-optimoiduksi.
  - `preview`: Esikatselee tuotantoversiota.
  - `start`: Käynnistää sovelluksen käyttäen Node.js:ää.
  - `start:railway`: Määrittää ja käynnistää sovelluksen Railwayllä tarvittavilla käyttöönottovaihtoehdoilla.

- `devDependencies`: Kehitykseen tarvittavat riippuvuudet. Sisältää työkaluja kuten Vite, Svelte, TailwindCSS ja PostCSS.

- `dependencies`: Riippuvuudet, joita projekti tarvitsee tuotannossa. Sisältää adapterit Svelteen, kirjastot kuten Chart.js ja Nodemailer sähköpostien lähettämiseen.

- `type`: Ilmaisee, että projekti käyttää ECMAScript-moduuleja CommonJS-moduulien sijaan.

### package-lock.json

`package-lock.json`-tiedosto luodaan automaattisesti, kun suoritat `npm install` projektissa. Tämä tiedosto varmistaa, että riippuvuudet asennetaan samalla tavalla kaikissa koneissa lukitsemalla kunkin paketin ja sen aliriippuvuuksien tarkat versiot.

**Tämä tiedosto sisältää**:

- `version`: `package-lock.json`-skeeman versio.
- `requires`: Ilmoittaa, tarvitseeko paketti muita riippuvuuksia.
- `dependencies`: Yksityiskohtainen lista jokaisesta riippuvuudesta, mukaan lukien sen versio, eheys ja sen aliriippuvuuksien versiot.

`package-lock.json` on tärkeä yhdenmukaisen kehitysympäristön ylläpitämiseksi, mikä varmistaa, että kaikki kehittäjät ja käyttöönottoympäristöt käyttävät projektin riippuvuuksien samoja versioita.

## Projektin Rakenne

```
Projektin Juuri
├── src/
│   ├── components/
│   │   ├── Footer.svelte
│   │   ├── Header.svelte
│   │   ├── Main.svelte
│   │   ├── Modal.svelte
│   │   ├── modalStore.js
│   │   └── Step.svelte
│   ├── lib/
│   │   └── index.js
│   ├── routes/
│   │   ├── api/
│   │   │   └── contact.js
│   │   └── tools/
│   │       ├── rsi_heatmap/
│   │       │   ├── __pycache__/
│   │       │   ├── data.py
│   │       │   └── main.py
│   │       ├── cryptohunter.svelte
│   │       ├── news.svelte
│   │       ├── rsiheatmap.svelte
│   │       ├── +layout.svelte
│   │       └── +page.svelte
│   ├── app.css
│   ├── app.html
│   └── global.css
├── static/
│   ├── assets/
│   ├── images/
│   └── favicon.png
├── .env
├── .gitattributes
├── .gitignore
├── .hintrc
├── .npmrc
├── Dockerfile
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── Procfile
├── README.md
├── requirements.txt
├── supervisord.conf
├── svelte.config.js
├── tailwind.config.cjs
├── tailwind.config.js
└── vite.config.js
```

## Osallistuminen

Osallistuminen on tervetullutta! Forkaa tämä repositorio ja lähetä pull request parannuksista tai lisäyksistä.

## Yhteystiedot

Claudio Valenzuela - latribubooking@gmail.com

Projektin linkki: https://github.com/CAUCORASEKO/My_portfolio

## Lisenssi

**Tämä projekti on lisensoitu MIT-lisenssillä.**

## Resurssit

- Init SvelteKit w. TailwindCSS: TailwindCSS Guide
- Google Fonts: Google Fonts
- Font Awesome CDN: Font Awesome CDN
- Font Awesome Icons: Font Awesome Icons
- Particles js: Particles.js

## Projektin Uudelleenkäynnistyksen Vaiheet

**Avaa Terminal ja siirry projektikansioosi**:

```bash
cd ~/Desktop/My_portfolio
```

**Käynnistä Docker**:

Varmista, että Docker Desktop on käynnissä. Jos se ei ole, käynnistä Docker Desktop sovelluksistasi.

**Rakenna Docker-kuva (jos tarpeen)**:

```bash
docker build -t my_svelte_app .
```

**Käynnistä Docker-kontti**:

```bash
docker run -p 8081:4173 -p 5002:5001 my_svelte_app
```

Varmista, että ei ole porttien ristiriitoja. Jos niitä on, lopeta ristiriitaiset palvelut tai kontin ja yritä suorittaa komento uudelleen.

**Käytä sovellusta**:

- Svelte-sovellukselle: http://localhost:5173
- API:lle (lämpökartta): http://localhost:5002/heatmap

## Vianetsintävinkit

**Tarkista Dockerin tila**:  
Varmista, että Docker on käynnissä. Jos kohtaat ongelmia, käynnistä Docker Desktop uudelleen.

**Tarkista lokit**:

Jos sovellus ei toimi odotetusti, tarkista Docker-kontin lokit:

```bash
docker logs <container_id>
```

**Porttien ristiriidat**:

Varmista, että muilla palveluilla ei ole käytössä portteja 8081 tai 5002. Käytä `lsof -i :<port>` tarkistaaksesi ja `kill -9 <PID>` lopettaaksesi ne tarvittaessa.

---
