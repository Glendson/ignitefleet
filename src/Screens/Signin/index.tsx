import { Container, Slogan, Title } from "./styles";

import background from "../../assets/background.png";
import { Button } from "../../components/Button";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { IOS_CLIENT_ID, WEB_CLIENT_ID } from "@env";
import { useState } from "react";
import { Alert } from "react-native";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const userInfo = await GoogleSignin.signIn();

      if (!userInfo) {
        throw new Error("Não foi possível autenticar com o Google");
      }
      
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro ao autenticar",
        "Não foi possível autenticar com o Google"
      );
      setIsAuthenticating(false);
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    <Container source={background}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veiculos</Slogan>

      <Button title="Entrar com Google" onPress={handleGoogleSignIn} />
    </Container>
  );
}
