import styled from 'styled-components';

export const Wrapper = styled.div`
  opacity: ${props => (props.background ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.background});
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  transition: opacity 0.5s linear;
`;
