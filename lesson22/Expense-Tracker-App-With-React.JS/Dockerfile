# Use Ubuntu 22.04 as base image
FROM ubuntu:22.04

# Make bash default shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set timezone to avoid interactive prompt
ENV TZ=Europe/Kyiv
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install required packages
RUN apt-get update && \
    apt-get install -y curl git wget ca-certificates gnupg software-properties-common && \
    rm -rf /var/lib/apt/lists/*

# Set up NVM and Node.js
ENV NVM_DIR /root/.nvm
ENV NODE_VERSION=20.11.1
ENV PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm use $NODE_VERSION && \
    npm install -g npm@10.2.4

# Create app directory
WORKDIR /usr/src/app

# Copy project files
COPY . .

# Install dependencies and Playwright
RUN . $NVM_DIR/nvm.sh && \
    npm install && \
    npx playwright install --with-deps

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
