# Usa una imagen base de Node.js con Python preinstalado
FROM node:14

# Instala Python y pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu aplicación
COPY . .

# Instala las dependencias de Python
RUN pip3 install -r src/routes/tools/rsi_heatmap/requirements.txt

# Instala las dependencias de Node.js
RUN npm install

# Construye la aplicación Svelte
RUN npm run build

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]
