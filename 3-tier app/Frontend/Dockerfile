FROM node:18

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything (src + public + others)
COPY . .

EXPOSE 3000

# Make React dev server listen on all interfaces
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
