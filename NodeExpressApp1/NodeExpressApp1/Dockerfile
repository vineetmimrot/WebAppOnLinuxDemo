FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN ls
RUN pwd

# Install app dependencies
COPY /opt/vsts/work/1/s/NodeExpressApp1/NodeExpressApp1/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start", "app.js" ]