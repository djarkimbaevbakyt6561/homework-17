import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <NavLink
        to="/homework-17/"
        style={({ isActive }) => {
          return {
            color: isActive ? '#202020' : 'white',
            textDecoration: 'none',
            marginLeft: '60px',
          };
        }}
      >
        iStore
      </NavLink>
      <NavList>
        <NavLink
          to="/homework-17/products"
          style={({ isActive }) => {
            return {
              color: isActive ? '#202020' : 'white',
              textDecoration: 'none',
            };
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/homework-17/myCart"
          style={({ isActive }) => {
            return {
              color: isActive ? '#202020' : 'white',
              textDecoration: 'none',
            };
          }}
        >
          My Cart
        </NavLink>
        <NavLink
          to="/homework-17/myOrders"
          style={({ isActive }) => {
            return {
              color: isActive ? '#202020' : 'white',
              textDecoration: 'none',
            };
          }}
        >
          My Orders
        </NavLink>
      </NavList>
    </Container>
  );
};
export default Header;
const Container = styled.div`
  font-weight: 500;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3399ff;
  color: white;
  font-size: 32px;
`;
const NavList = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-right: 60px;
`;
