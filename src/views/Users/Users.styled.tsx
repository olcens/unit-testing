import styled from 'styled-components';

export const LoadingText = styled.h2`
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  
  & > * + * {
    margin-top: 24px;
  }
`;
