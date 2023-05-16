import { useState } from 'react';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductDetail from './ProductDetail';
const products = [
  {
    title: 'Iphone 13 Max',
    price: 1300,
    url: 'https://cdn.shopify.com/s/files/1/0575/3628/2777/products/Untitled_500x500px_-2022-06-13T110849.222_793071f0-9499-440b-91c7-5123c15c349e.png?v=1666979362',
    id: '1',
  },
  {
    title: 'Iphone 14 Black',
    price: 2000,
    url: 'https://cdn.shopify.com/s/files/1/0732/9120/2876/products/Untitled_500x500px_-2022-06-13T110917.386.webp?v=1678286482',
    id: '2',
  },
  {
    title: 'Iphone 120 Red',
    price: 100,
    url: 'https://cdn.shopify.com/s/files/1/0575/3628/2777/products/Untitled_500x500px_-2022-06-13T110813.380.png?v=1655144259',
    id: '3',
  },
];

const Products = () => {
  return (
    <Container>
      {products.map((el) => {
        return (
          <Link
            to={`${el.id}/details`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'white  ',
              borderRadius: '20px',
              height: '600px',
              width: '430px',
              textDecoration: 'none',
            }}
          >
            <img
              style={{
                marginTop: '20px',
                height: '80%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
              src={el.url}
              alt={el.title}
            />
            <Desctiption>
              <Title>${el.title}</Title>
              <Title>${el.price}</Title>
            </Desctiption>
          </Link>
        );
      })}
     
    </Container>
  );
};
export default Products;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 100%;
`;
const Title = styled.h2`
  margin: 0;
  color: black;
`;
const Desctiption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 270px;
`;
