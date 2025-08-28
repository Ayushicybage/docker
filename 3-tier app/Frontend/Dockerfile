FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files (src, public, etc.)
COPY . .

# Expose React dev server port
EXPOSE 3000

# Start React app
CMD ["npm", "start"]
