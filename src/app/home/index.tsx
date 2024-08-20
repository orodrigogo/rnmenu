import { useState } from "react"
import { View, Pressable } from "react-native"
import { Feather } from "@expo/vector-icons"

import { Option } from "../../components/option"

import { styles } from "./styles"

export function Home() {
  const [option, setOption] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.back}>
          <Feather name="chevron-left" size={18} />
        </Pressable>

        <View style={styles.options}>
          <Option
            title="Home"
            icon="home"
            onPress={() => setOption("home")}
            isSelected={option === "home"}
          />
          <Option
            title="Documentos"
            icon="file-text"
            onPress={() => setOption("docs")}
            isSelected={option === "docs"}
          />
          <Option
            title="Notificações"
            icon="bell"
            onPress={() => setOption("notifications")}
            isSelected={option === "notifications"}
          />
        </View>
      </View>
    </View>
  )
}
