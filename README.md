
# react-native-code-input

## Getting started

`$ npm install react-native-code-input --save`

### Mostly automatic installation

`$ react-native link react-native-code-input`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.qzt.codeinput.RNCodeInputPackage;` to the imports at the top of the file
  - Add `new RNCodeInputPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-code-input'
  	project(':react-native-code-input').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-code-input/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-code-input')
  	```


## Usage
```javascript
import RNCodeInput from 'react-native-code-input';

// TODO: What to do with the module?
RNCodeInput;
```
  