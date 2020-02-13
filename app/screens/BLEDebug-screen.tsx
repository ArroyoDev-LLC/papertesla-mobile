import { observer } from "mobx-react-lite"
import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Header, Screen, Text, TextField, Wallpaper } from "../components"
// import { useStores } from "../models/root-store"
import { color, spacing } from "../theme"

export interface BleDebugScreenProps extends NavigationInjectedProps<{}> {}

const FULL: ViewStyle = {
  flex: 1,
}
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  paddingHorizontal: spacing[4],
  flex: 1,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const SEND_CONTAINER: ViewStyle = {
  justifyContent: "center",
}
const SEND_BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.orange,
}
const SEND_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}

export const BleDebugScreen: React.FunctionComponent<BleDebugScreenProps> = observer(props => {
  // const { someStore } = useStores()
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen style={ROOT} preset="scroll">
        <Header
          leftIcon="back"
          onLeftPress={goBack}
          headerTx="bleDebugScreen.header"
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Text style={TITLE} preset="header" tx="bleDebugScreen.title" />
        <View style={SEND_CONTAINER}>
          <TextField
            placeholderTx="bleDebugScreen.inputPlaceholder"
            labelTx="bleDebugScreen.inputLabel"
          />
          <Button textStyle={SEND_TEXT} style={SEND_BUTTON} tx="bleDebugScreen.sendButton" />
        </View>
      </Screen>
    </View>
  )
})
