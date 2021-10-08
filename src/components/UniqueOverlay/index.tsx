import React from 'react';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="#">Tesla Clone</a>
          </li>
          <li>
            <a href="#">made with ❤️</a>
          </li>
          <li>
            <a href="#">by matg0mes</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
