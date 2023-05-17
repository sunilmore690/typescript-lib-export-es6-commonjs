# typescript-lib-export-es6-commonjs
Example Typescript lib imported as Commonjs and ES6

Add this package into your package.json

```
"dependencies": {
    "my-library": "sunilmore690/typescript-lib-export-es6-commonjs#main"
  },

```

Run below command to install this package

` npm install my-library `


## Import the library

**ES6 Import ( Javascript )**

```jsx
import { mul, sum } from 'my-lib';
console.log('sum',sum(1,2))
```

**CommonJs/Nodejs**

```jsx
const { mul,sum } = require('my-lib')
console.log('sum',sum(1,2)
```

Typescript
