## Deep copy Javascript

- Deep Copy To A Reference Value Javascript 
- So you can freely assign an object / array in a variable 
- Even if inside the object / array is another object / array, it will create a deep full copy of it!

## Getting Started

```javascript
npm install deep-copy-javascript --save
```

## Example

```javascript
const copy = require('deep-copy-javascript');

var obj = {
  name: 'Fabio',
  age: 24,
  hobbies: ['music', 'sports'],
  detail: {
    address: {
      name: 'Street Example',
      no: '12'
    },
    family: {
      brother: 'Kiki',
      sister: 'Chihiro',
      spouse: [
        { name: 'Mary' },
        { name: 'Leo' }
      ]
    }
  },
  date: new Date()
}

let copiedData = copy.deepCopy(obj);

obj.hobbies.push('sing');
obj.detail.address.name = 'Street 2';
obj.detail.family.brother = 'Brother2';
obj.detail.family.spouse[0].name = 'Karen';
obj.date = 'Test';

console.log(copiedData); 

```

Result (copiedData will not affected) :

```javascript
// {
//   name: 'Fabio',
//   age: 24,
//   hobbies: ['music', 'sports'],
//   detail: {
//     address: {
//       name: 'Street Example',
//       no: '12'
//     },
//     family: {
//       brother: 'Kiki',
//       sister: 'Chihiro',
//       spouse: [
//         { name: 'Mary' },
//         { name: 'Leo' }
//       ]
//     }
//   },
//   date: '2019-05-28T06:21:01.997Z'
// }
```
## Authors

*** Fabio Kounang ***
