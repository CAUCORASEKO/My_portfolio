FROM python:3.12-slim

WORKDIR /app

COPY . .

RUN pip3 install -r src/routes/tools/rsi_heatmap/requirements.txt
RUN npm install

CMD ["npm", "run", "dev"]

