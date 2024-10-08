# Use a Node.js base image
FROM node:20-alpine

# Set the working directory
WORKDIR /react-docker-gym/

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port to have it mapped by daemon
EXPOSE 8000

# Build the application
RUN npm run build

# Set the command to start the application
CMD ["npm", "run", "preview"]