import * as React from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle, TouchableWithoutFeedback, Keyboard, TextStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>
  length?: number
  normalGridStyle?: StyleProp<TextStyle>
  careGridStyle?: StyleProp<ViewStyle>
  autoFocus?: boolean
  onChangeText?: (str: string) => void
}

interface State {
  code: string
  focus: boolean
}

export default class CodeIput extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props)
    this.state = {
      code: '',
      focus: false,
    }
  }

  render() {
    const code = this.state.code
    const focus = this.state.focus
    const length = this.props.length !== undefined ? this.props.length : 6
    const grids = Array(length)
    for (let i = 0; i < length; i++) {
      grids[i] = <TextInput
        key={i}
        style={[styles.grid, this.props.normalGridStyle,
        i < code.length || (i == code.length && focus) ? [styles.careGrid, this.props.careGridStyle] : null]}
        editable={false}
        maxLength={1}
        allowFontScaling={false}
        value={code[i]} />
    }
    return (
      <View style={[styles.container, this.props.style]}>
        {grids}
        <TextInput
          style={styles.realInput}
          caretHidden={true}
          maxLength={length}
          keyboardType='number-pad'
          contextMenuHidden={true}
          value={code}
          autoFocus={this.props.autoFocus}
          onFocus={(e) => {
            this.setState({ focus: true })
          }} onBlur={() => {
            this.setState({ focus: false })
          }} onChangeText={(s) => {
            let str = s.replace(/[^0-9]/g, '')
            this.setState({ code: str })
            this.props.onChangeText && this.props.onChangeText(str)
          }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  grid: {
    width: 50,
    height: 50,
    fontSize: 22,
    color: '#000000',
    borderColor: '#DCDFE6',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    flexShrink: 1,
  },
  careGrid: {
    borderColor: '#000000'
  },
  realInput: {
    position: 'absolute',
    fontSize: 0,
    color: 'transparent',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
