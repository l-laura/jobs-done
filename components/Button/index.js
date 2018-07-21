import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  height: 40px;
  margin: 0;
  padding: 0 16px;
  border: 0;
  border-radius: 4px;
  background: #666;
  color: ${props => (props.disabled ? '#b1b1b1' : '#f1f1f1')};
  line-height: 40px;
  text-transform: uppercase;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  outline: none;
`;