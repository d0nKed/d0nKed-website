import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode("#ffffff", "#242424")(props),
        },
    })
}

const fonts = {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
}

const config = {
    useSystemColorMode: true,
    initialColorMode: "light",
}

const theme = extendTheme({ config, fonts, styles })
export default theme