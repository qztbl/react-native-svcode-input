import * as React from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface CodeIputProps {
  style?: StyleProp<ViewStyle>
  autoFocus?: boolean
  onChangeText?: (str: string) => void
}

let inputRef = React.createRef<TextInput>()

const CodeIput = (props: CodeIputProps) => {

  const [code, setCode] = React.useState('')
  const [focus, setFocus] = React.useState(false)

  return (
    <View style={[props.style, styles.container]}>
      <TextInput style={[styles.grid, focus || isNotEmpty(code[0]) ? styles.careGrid : null]}
        editable={false} maxLength={1} allowFontScaling={false} value={code[0]} />

      <TextInput style={[styles.grid, isNotEmpty(code[0]) ? styles.careGrid : null]}
        editable={false} maxLength={1} allowFontScaling={false} value={code[1]} />

      <TextInput style={[styles.grid, isNotEmpty(code[1]) ? styles.careGrid : null]}
        editable={false} maxLength={1} allowFontScaling={false} value={code[2]} />

      <TextInput style={[styles.grid, isNotEmpty(code[2]) ? styles.careGrid : null]}
        editable={false} maxLength={1} allowFontScaling={false} value={code[3]} />

      <TextInput style={[styles.grid, isNotEmpty(code[3]) ? styles.careGrid : null]}
        editable={false} maxLength={1} allowFontScaling={false} value={code[4]} />

      <TextInput style={[styles.grid, isNotEmpty(code[4]) ? styles.careGrid : null]}
        editable={false} maxLength={1} allowFontScaling={false} value={code[5]} />

      <TextInput style={{
        position: 'absolute', fontSize: 0, color: 'transparent', backgroundColor: 'transparent',
        top: 0, left: 0, right: 0, bottom: 0
      }}
        caretHidden={true} maxLength={6} keyboardType='number-pad' contextMenuHidden={true}
        value={code}
        ref={inputRef}
        autoFocus={props.autoFocus}
        onFocus={(e) => {
          setFocus(true)
        }} onBlur={() => {
          setFocus(false)
        }} onChangeText={(s) => {
          let str = s.replace(/[^0-9]/g, '')
          setCode(str)
          props.onChangeText && props.onChangeText(str)
        }} />
    </View>
  );
};

export default CodeIput;

function isNotEmpty(str?: string | null) {
  return str && str !== null && str.length > 0
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grid: {
    width: 44,
    height: 52,
    fontSize: 22,
    color: '#303133',
    borderColor: '#DCDFE6',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    flexShrink: 1,
  },
  careGrid: {
    borderColor: '#303133'
  }
});
