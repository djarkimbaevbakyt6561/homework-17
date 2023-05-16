import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button';
const products = [
  {
    title: 'Iphone 13 Max',
    price: 1300,
    url: 'https://cdn.shopify.com/s/files/1/0575/3628/2777/products/Untitled_500x500px_-2022-06-13T110849.222_793071f0-9499-440b-91c7-5123c15c349e.png?v=1666979362',
    id: '1',
    description:
      'Устойчивое к отпечаткам олеофобное покрытие, Поддержка одновременного отображения нескольких языков и наборов символов, Дисплей с расширенным цветовым охватом (P3), Дисплей True Tone, HDR, Super Retina XDR дисплей, Яркость до 1200 кд/м² при просмотре контента в формате HDR, Передняя панель Ceramic Shield',
  },
  {
    title: 'Iphone 14 Black',
    price: 2000,
    url: 'https://cdn.shopify.com/s/files/1/0732/9120/2876/products/Untitled_500x500px_-2022-06-13T110917.386.webp?v=1678286482',
    id: '2',
    description:
      'Отправка сообщений, установка напоминаний и многое другое с помощью голосовых команд Голосовая активация Управление воспроизведением музыки Быстрые команды Siri появляются прямо на экране блокировки Голосовые команды для часто используемых приложений Машинное обучение ',
  },
  {
    title: 'Iphone 120 Red',
    price: 100,
    url: 'https://cdn.shopify.com/s/files/1/0575/3628/2777/products/Untitled_500x500px_-2022-06-13T110813.380.png?v=1655144259',
    id: '3',
    description:
      '	Поддежка быстрой зарядки Поддержка Dolby Vision и HDR10 AirPlay Поддержка вывода видео через адаптеры (продаются отдельно) Система Neural Engine Беспроводная зарядка (поддерживаются зарядные устройства стандарта Qi) Apple Pay U1 чип для пространственной осведомленности Экспресс-карты с резервным питанием Видеозвонки FaceTime Аудиозвонки FaceTime Совместимость со слуховыми аппаратами M3, T4 Apple Card Поддержка аксессуаров MagSafe',
  },
];
const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  function goBackHandler() {
    navigate(-1);
  }
  const findedProducts = products.find((el) => el.id === params.productId);
  return (
    <Container>
      <img src={findedProducts.url} alt="" />
      <Desctiption>
        <Button onClick={goBackHandler}>Go back</Button>
        <h1>{findedProducts.title}</h1>
        <h2>
          Price: <span>${findedProducts.price}</span>
        </h2>
        <p>{findedProducts.description}</p>
      </Desctiption>
    </Container>
  );
};
export default ProductDetail;
const Container = styled.div`
  display: flex;
  width: 94%;
  background-color: white;
  margin-top: 40px;
`;
const Desctiption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  h1 {
    margin: 0;
    margin-top: 30px;
  }
  h2 {
    margin: 0;
    margin-top: 30px;
    span {
      font-weight: 500;
    }
  }
  p {
    margin: 0;
    width: 800px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
  }
`;
