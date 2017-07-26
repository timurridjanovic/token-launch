FROM node:argon

WORKDIR /data/consensys/src

ADD src  /data/consensys/src
RUN npm install -g yarnpkg
RUN rm -rf node_modules && yarn

EXPOSE 3000
CMD ["bash"]
