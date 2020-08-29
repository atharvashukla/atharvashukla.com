# Build
cd src/
./build.sh
cd ..

# Deploy
firebase deploy;

# Push
git add .
git commit -m "."
git push