import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  position: relative;
`;
