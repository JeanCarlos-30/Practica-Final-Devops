# Imagen base liviana
FROM node:18-alpine

LABEL maintainer="jeacarlos3015"
LABEL description="Practica Final DevOps CI/CD"

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias primero (mejor caché)
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm install --omit=dev

# Copiar el resto del código
COPY . .

# Puerto que usa Render.com
EXPOSE 10000

ENV NODE_ENV=production
ENV PORT=10000

# Arrancar la app
CMD ["node", "server.js"]