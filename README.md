# object-to-md

> Convert JS Object to leaf api schema


## Installation

```bash
$ npm i object-to-md -S
```

## Usage


```js
const ots = require('object-to-md');

const obj = {
  id: 100,
  owner: {
    show: true,
    login: 'japsu',
  },
  name: 'Tom',
  books: [
    {
      name: 'Hackers and Painters',
      author: 'Paul Graham',
    },
  ],
};

const jsonSchema = ots.json(obj);
const apiSchema = ots.api(obj);

console.log(JSON.stringify(jsonSchema, null, 2));

```
