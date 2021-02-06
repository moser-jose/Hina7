import React, {memo} from 'react';
import styled from 'styled-components/native';

const HinoEstrofes = styled.View``;
const Estrofe = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';
  margin-bottom: 5px;
  color: ${(props) => props.theme.title};
  letter-spacing: 1px;
`;
const NumeroEstrofe = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.title};
  margin-bottom: 5px;
`;

const Estrofes = ({value, tamanho}) => {
  return (
    <HinoEstrofes>
      <NumeroEstrofe style={{fontSize: tamanho}}>{value.numero}</NumeroEstrofe>
      <Estrofe style={{fontSize: tamanho}}>{value.estrofe}</Estrofe>
    </HinoEstrofes>
  );
};

export default memo(Estrofes);
