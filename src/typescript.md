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
touch index.ts
echo 'export function add3(n: number): number {\n  return n + 3;\n}\n\nconsole.log(`add3(3) = ${add(3)}`)' > index.ts
echo 'import { assert } from "chai";\nimport { add3 } from "./index";\n\ndescribe("Testing add3", () => {\n it("add3 on 5 is 8", () => {\n    assert.deepEqual(add3(5), 8);\n  })\n})' > index.spec.ts
```