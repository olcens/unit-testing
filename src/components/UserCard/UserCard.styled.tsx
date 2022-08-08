import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  background: #333;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12);
  padding: 16px 24px;
  color: white;
  gap: 16px;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

export const InfoSection = styled.div``;
export const LocationWrapper = styled.div``;
