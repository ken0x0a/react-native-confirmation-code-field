// @flow
import { KeyboardType } from 'react-native/Libraries/Components/TextInput/TextInput';
import { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';
import { VariantNames, INDEX, InputPositions } from '../../types';

export interface Props {
  codeLength?: number,
  defaultCode?: string,
  compareWithCode?: string,
  ignoreCaseWhenCompareCode?: boolean,

  activeColor?: string,
  cellBorderWidth?: number,
  inactiveColor?: string,
  inputPosition?: InputPositions,
  size?: number,
  space?: number,
  variant?: VariantNames,
  keyboardType?: KeyboardType,
  maskSymbol?: string,

  autoFocus?: boolean,
  // isMatching will be true|false when "compareWithCode" prop isn't empty string
  onFulfill: (code: string, isMatching?: boolean) => void,
  onChangeCode?: (code: string) => void,

  getInputProps?: (index: INDEX) => Object,
  // help set custom style to any inputs
  getInputStyle?: (
    index: INDEX,
    isFocused: boolean,
    hasValue: boolean,
  ) => Object,
  containerProps?: ViewProps,

  testID?: any,
};

export type State = {
  codeSymbols: Array<string>,
  currentIndex: number,
}

export type PropsTypeCustomValidatorFn = (
  props: {codeLength: number},
  propName: string,
  componentName: string,
) => Error | undefined;
