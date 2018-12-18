import styled from 'styled-components';

export const Wrapper = styled.button`
  color: #fff;
  font-family: Avenir;
  font-weight: bold;
  font-size: 16px;
  background: #7342e1;
  border: 0;
  padding: 0.6rem 1rem;
  width: 100%;
  display: inline-block;
  border-radius: 0.25rem;
  user-select: none;
  border-radius: 6px;
  letter-spacing: 1.5px;
  transition: background 0.3s ease-in-out;

  &:focus,
  &:hover {
    cursor: pointer;
    background: #6136c1;
    text-decoration: none;
    outline: 0;
  }

  &:disabled {
    background: rgba(36, 40, 47, 0.48);
    cursor: default;
  }
`;
