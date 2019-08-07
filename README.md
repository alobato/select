# Select

> Select react component

## Install

```sh
yarn add @alobato/select
```

## Usage

```js
import Select, { SelectRaw }  from '@alobato/select'
...
<Select placeholder='Select...' value={status} onChange={e => setStatus(e.target.value)}>
  <option>Item 1</option>
  <option>Item 2</option>
</Select>
```
