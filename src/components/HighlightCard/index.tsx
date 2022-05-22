import React from "react";

import {
  Container,
  Footer,
  Header,
  Icon,
  Title,
  Amount,
  LatestTransaction,
} from "./styles";

interface Props {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LatestTransaction type={type}>{lastTransaction}</LatestTransaction>
      </Footer>
    </Container>
  );
}
