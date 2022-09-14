import { View, Text, ViewProps } from 'react-native';
import { styles } from './styles';

interface Props extends ViewProps {
  /* Aqui eu posso acrescentar valores ao que a ViewProps oferece,
     adiconando o que eu quero ao que já existe */
  title: string;
  subtitle: string;
}

// o ...rest é todo o resto oferecido pela ViewProps, sem ser o que eu adicionei
export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

    </View>
  );
}