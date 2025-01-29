import { Container, Slogan, Title } from "./styles";

import background from "../../assets/background.png";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container source={background}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veiculos</Slogan>

      <Button title="Entrar com Google" />
    </Container>
  );
}
