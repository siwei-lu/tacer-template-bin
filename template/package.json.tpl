{
  "name": "{{name}}",
  "version": "{{version}}",
  "description": "{{{description}}}",
  "bin": ".bin/run.js",
  "main": "./dist/index.js",
  "types": "./types",
  "scripts": {
    "start": "npm run build && node .bin/run",
    "build": "tacer-script build",
    "test": "tacer-script test"
  },
  "repository": {
    "type": "git",
    "url": "{{repository}}"
  },
  "keywords": [

  ],
  "author": "{{{author}}}",
  "license": "{{license}}",
  "devDependencies": {
    "@types/chai": "^4.1.7",
    "@types/mocha": "^5.2.7",
    "chai": "^4.2.0",
    "tacer-template-lib": "^0.2.0"
  }
}
