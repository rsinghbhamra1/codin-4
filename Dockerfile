# Step 1: Use Node.js version 20
FROM node:20-alpine

# Step 2: Set the working directory
WORKDIR /Bhamra_Rupinderjit_final_site

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire project
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Install a web server to serve the build files
RUN npm install -g http-server

# Step 8: Expose port 5575
EXPOSE 5575

# Step 9: Serve the React app on port 5575
CMD ["http-server", "build", "-p", "5575"]