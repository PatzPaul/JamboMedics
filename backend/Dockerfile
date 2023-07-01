FROM node:14

ENV PORT=3001

COPY . /backend
WORKDIR /backend
RUN npm install
EXPOSE ${PORT}
CMD [ "npm", "run", "start" ]
