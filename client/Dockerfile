# Pull Docker Hub base image
FROM node:14.16.0-alpine3.10
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Copy app to container
COPY . .

# Run the "dev" script in package.json
CMD ["npm", "run", "dev"]




# # Dockerfile for React client

# # Build react client
# FROM node:10.16-alpine

# # Working directory be app
# WORKDIR /usr/src/app

# COPY package*.json ./

# ###  Installing dependencies

# RUN npm install --silent

# # copy local files to app folder
# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]