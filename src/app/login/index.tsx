import { Link } from "expo-router";
import { Center } from "../../components/StyledView";
import { Text } from "../../components/Themed";

export default function LoginScreen() {
  return (
    <Center>
      <Text>Login</Text>
      <Link href="/verify">
        <Text>Verify</Text>
      </Link>
    </Center>
  );
}
