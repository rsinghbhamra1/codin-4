# Step 1: Use Node.js version 20
FROM node:20-alpine

# Step 2: Set the working directory
WORKDIR /Bhamra_Rupinderjit_ui_garden

# Step 3: Copy package.json
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire project
COPY . .

# Step 6: Build the Storybook
RUN npm run build-storybook

# Step 7: Install a web server to serve build files
RUN npm install -g http-server

# Step 8: Expose the port provided in learn
EXPOSE 8083

# Step 9: Serve the build on port 8083
CMD ["http-server", "storybook-static", "-p", "8083"]
