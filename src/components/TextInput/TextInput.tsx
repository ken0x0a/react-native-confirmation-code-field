import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { omit } from '../../omit';

import { INDEX } from '../../types';

interface Props {
  id: INDEX,
  onChangeText: (string: INDEX) => void,
  onFocus: (i: INDEX) => void,
  forwardRef: (TextInput: TextInput | undefined, INDEX: INDEX) => void,
};

export default class TextInputCustom extends Component<Props> {
  onChangeText = (text: string) => this.props.onChangeText(text, this.props.id);

  onFocus = () => this.props.onFocus(this.props.id);

  inputRef = (ref: TextInput) => this.props.forwardRef(ref, this.props.id);

  render() {
    return (
      <TextInput
        {...omit(['id', 'forwardRef'], this.props)}
        ref={this.inputRef}
        onChangeText={this.onChangeText}
        onFocus={this.onFocus}
      />
    );
  }
}
