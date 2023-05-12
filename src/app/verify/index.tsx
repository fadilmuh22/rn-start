import { Link } from "expo-router";
import { Center } from "../../components/StyledView";
import { Text } from "../../components/Themed";

export default function VerifyScreen() {
  return (
    <Center>
      <Text>Verify</Text>
      <Link href="/main-tabs">
        <Text>Home</Text>
      </Link>
    </Center>
  );
}
