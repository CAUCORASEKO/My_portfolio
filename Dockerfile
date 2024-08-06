# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Install Node.js (for Svelte)
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install

# Build the Svelte app
RUN npm run build

# Install supervisor
RUN apt-get install -y supervisor

# Copy supervisor config file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports
EXPOSE 4173
EXPOSE 5000

# Run the application using supervisor
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
