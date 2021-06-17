import {
    Platform,
    StatusBar 
} from 'react-native';
import styled from 'styled-components/native';

const IS_IOS = Platform.OS === 'ios';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${IS_IOS ? 0 : StatusBar.currentHeight}px;
`;