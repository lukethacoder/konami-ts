# konami-ts

super simple library for hiding sneaky easter eggs within your websites using typescript

## Install

`npm i konami-ts -s` or `yarn add konami-ts -s`

## Usage Example

```typescript
import Konami from 'konami-ts';

const options = {
  secret_code: '495051',
  delay: 500,
};

let yourSuperSecretFunction = new KonamiCode(options);

yourSuperSecretFunction.listen(() => {
  console.log('shhh, secrets');
});
```
