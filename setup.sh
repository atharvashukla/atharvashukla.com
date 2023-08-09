#!/bin/zsh

# Check if the number of arguments is not equal to 1
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 directory_name"
    exit 1
fi

DIR_NAME="$1"

# Check if directory already exists
if [ -d "$DIR_NAME" ]; then
    echo "Directory $DIR_NAME already exists!"
    exit 1
fi

# Create directory
mkdir "$DIR_NAME"

# Change directory
cd "$DIR_NAME"

# Initialize Typescript Starter

npm init -y

npm i --save-dev typescript ts-node nodemon rimraf jest ts-jest concurrently @types/jest @types/node

npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true

# Remove comments from tsconfig.json
jq . tsconfig.json > tsconfig.tmp.json && mv tsconfig.tmp.json tsconfig.json

mkdir src && echo '// Adds two numbers
export function add(a: number, b: number): number {
    return a + b;
}
' > src/index.ts

echo 'import { add } from "."

describe("test", () => {
  test("add", async () => {
    expect(1 + 1).toEqual(2);
  });
});' > src/index.spec.ts

echo 'module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "node",
  testRegex: "/src/.*\.(test|spec)\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"],
};' > jest.config.js

echo '{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}' > nodemon.json

jq '.scripts += {
  "start:dev": "npx nodemon",
  "build": "rimraf ./build && tsc",
  "start": "npm run build && node build/index.js",
  "test": "jest",
  "test:dev": "jest --watchAll",
  "watch": "concurrently \"npm run test:dev\" \"npm run start:dev\""
}' package.json > package.tmp.json && mv package.tmp.json package.json
