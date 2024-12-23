# Run local
npm start


# Generate PDF file
run the server
node src/generatePDF.js



# Build the image (multi platform!!!!)
docker build -t captainchoi0607/choi-home-dining:latest .

# build & push 
buildx does not save output in local , push directly from build instead

docker buildx build --platform linux/amd64,linux/arm64 -t captainchoi0607/choi-home-dining:mp --push .

# Run the container
docker run -p 3000:3000 captainchoi0607/choi-home-dining:latest

# Push to Docker Hub
docker push captainchoi0607/choi-home-dining:latest


docker tag choi-home-dining captainchoi0607/choi-home-dining
