import { Pressable, PressableProps } from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  withTiming,
} from "react-native-reanimated"
import { Feather } from "@expo/vector-icons"

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

import { styles } from "./styles"

type Props = PressableProps & {
  title: string
  icon: keyof typeof Feather.glyphMap
  isSelected: boolean
}

export function Option({ title, icon, isSelected, ...rest }: Props) {
  const animationStatus = useSharedValue(0)

  const animatedPressableStyle = useAnimatedStyle(() => ({
    width: interpolate(
      animationStatus.value,
      [0, 1],
      [42, 144],
      Extrapolation.CLAMP
    ),
  }))

  const animatedTitleStyle = useAnimatedStyle(() => ({
    opacity: animationStatus.value,
  }))

  animationStatus.value = withTiming(isSelected ? 1 : 0)

  return (
    <AnimatedPressable
      style={[styles.container, animatedPressableStyle]}
      {...rest}
    >
      <Feather name={icon} size={18} />
      <Animated.Text style={[styles.title, animatedTitleStyle]}>
        {title}
      </Animated.Text>
    </AnimatedPressable>
  )
}
