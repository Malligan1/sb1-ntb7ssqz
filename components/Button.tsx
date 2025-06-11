import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: any;
}

export default function Button({ title, onPress, variant = 'primary', style }: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <TouchableOpacity style={[styles.secondaryButton, style]} onPress={onPress}>
        <Text style={styles.secondaryButtonText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <LinearGradient
        colors={['#f9a8d4', '#c084fc', '#67e8f9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    overflow: 'hidden',
    marginVertical: 8,
  },
  gradientButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#c084fc',
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#ffffff',
  },
  secondaryButtonText: {
    color: '#c084fc',
    fontSize: 16,
    fontWeight: '600',
  },
});