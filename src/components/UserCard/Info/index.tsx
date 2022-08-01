import styled from 'styled-components';

export const Info = ({ title, info }: any) => (
  <Wrapper>
    <h4>{title}</h4>
    <p>{info}</p>
  </Wrapper>
);

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;
