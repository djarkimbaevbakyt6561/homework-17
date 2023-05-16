import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button';
const MyOrders = () => {
  const navigate = useNavigate();
  function goBackHandler() {
    navigate(-1);
  }
  return (
    <TotalContainer>
      <Container>
        <h2>My Order page</h2>
      </Container>
      <ButtonContainer>
        <Button onClick={goBackHandler}>Go back</Button>
      </ButtonContainer>
    </TotalContainer>
  );
};
export default MyOrders;

const Container = styled.div`
  display: flex;
  width: 94%;
  background-color: white;
  height: 150px;
  h2 {
    margin-left: 25px;
  }
`;
const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 94%;
  justify-content: flex-start;
  margin-top: 30px;
`;

