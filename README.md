# react-native-svcode-input

## Install

`$ yarn add react-native-svcode-input`

or

`$ npm install react-native-svcode-input --save`

## Import

`import {CodeInput} from 'react-native-svcode-input'`

## Example

```
<CodeInput
  style={styles.codeInput}
  length={5}
  normalGridStyle={{ color: 'red', borderColor: 'pink' }}
  careGridStyle={{ borderColor: 'blue' }} 
  autoFocus={true}
  onChangeText={(str)=>{
    console.info(str)
  }}/>
```

![](./example.png)

