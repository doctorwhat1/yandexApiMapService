# Use an official Node.js 14 image as a base
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any necessary dependencies
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Run npm start when the container launches
CMD ["npm", "start"]