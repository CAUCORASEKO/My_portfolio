# Use a base image with Python
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY src/routes/tools/rsi_heatmap/requirements.txt .

# Install the dependencies
RUN pip3 install -r requirements.txt

# Copy the entire project into the container
COPY . .

# Install Node.js dependencies
RUN npm install

# Command to run your Svelte app
CMD ["npm", "run", "dev"]


