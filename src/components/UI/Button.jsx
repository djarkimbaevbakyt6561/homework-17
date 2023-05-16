import styled from 'styled-components';

const Button = ({ onClick, children }) => {
  return <ButtonGoBack onClick={onClick}>{children}</ButtonGoBack>;
};
export default Button;
const ButtonGoBack = styled.button`
 color: white;
 padding: 13px 25px;
 background: #019c9c;
 border: none;
 font-weight: 600;
 font-size: 16px;
 border-radius: 25px;
`
