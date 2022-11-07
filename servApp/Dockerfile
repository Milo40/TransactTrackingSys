FROM node:19
RUN mkdir -p /usr/transactTrackingSys/servApp
WORKDIR /usr/transactTrackingSys/servApp
COPY /servApp/package.json .
COPY /servApp/package-lock.json .
COPY /servApp/.env.local .
RUN mv .env.local .env
RUN npm install
COPY /servApp/* .
RUN npm run build
EXPOSE 7000
CMD [ "node", "dist/index.js" ]
