FROM node:6.10.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app
# RUN npm install

EXPOSE 80
CMD [ "npm", "start", "app.js" ]
