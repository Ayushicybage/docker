FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy all project files including public/index.html
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
