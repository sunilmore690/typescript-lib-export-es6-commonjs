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

```tsx
import { sum } from 'my-lib';
const a:number = 1;
const b:number = 2;
const out:number = sum(a,b);
console.log(out)
```


Here is codesandbox link to use this package

[https://codesandbox.io/s/hardcore-dan-2vourk?file=/src/index.ts](https://codesandbox.io/s/hardcore-dan-2vourk?file=/src/index.ts)
