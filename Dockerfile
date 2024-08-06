# Usar una imagen oficial de Python como imagen base
FROM python:3.11-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el contenido del directorio actual en el contenedor en /app
COPY . .

# Actualizar apt-get e instalar dependencias necesarias incluyendo distutils
RUN apt-get update && apt-get install -y curl supervisor python3-distutils

# Instalar las dependencias especificadas en requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Instalar Node.js para Svelte
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install

# Construir la aplicación Svelte
RUN npm run build

# Copiar el archivo de configuración de supervisord
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Exponer los puertos
EXPOSE 4173
EXPOSE 5000

# Ejecutar la aplicación usando supervisord
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
