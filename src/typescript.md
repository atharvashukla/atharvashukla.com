# Typescript

```zsh
mkdir new-project
cd new-project
npm init -y
tsc --init --rootDir src --outDir dist --allowJs true --noImplicitAny true --sourceMap true
npm i --save-dev typescript ts-mocha ts-node chai mocha @types/node @types/chai @types/mocha
mkdir src
mkdir dist
cd src
touch hello.ts
'console.log("hello")' > hello.ts
```