# Use a base image with Python 3.11
FROM python:3.11-slim

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY src/routes/tools/rsi_heatmap/requirements.txt .

# Install the dependencies
RUN pip3 install --upgrade pip setuptools
RUN pip3 install -r requirements.txt

# Copy the entire project into the container
COPY . .

# Install Node.js dependencies
RUN npm install

# Build the Svelte app
RUN npm run build

# Command to run your Svelte app
CMD ["npm", "run", "preview"]
