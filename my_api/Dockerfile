# Use the official Node.js image from Docker Hub
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
