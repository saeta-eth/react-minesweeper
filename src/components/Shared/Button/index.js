import styled from 'styled-components';

const Button = styled.button`
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(214, 220, 231);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  padding: 10px;
  cursor: pointer;
  width: 155px;
  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
