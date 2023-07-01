FROM node:14

ENV PORT=5173

COPY . /frontend
WORKDIR /frontend
RUN npm install
EXPOSE ${PORT}
CMD [ "npm", "run", "dev" ]