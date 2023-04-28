import { View } from "react-native";

import { Text } from "../../../../components/Text/Text";

import { styles } from "./styles";

interface Props {
  children: string;
}

export function Message({ children }: Props) {
  return (
    <View style={styles.message}>
      <Text>{children}</Text>
    </View>
  );
}
