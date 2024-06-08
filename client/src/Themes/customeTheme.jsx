import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Accordion: {
      baseStyle: {
        borderWidth: "0", // Remove border
        borderColor: "transparent", // Set border color to transparent
        boxShadow: "none", // Remove outline
        
        button: {
          paddingLeft: "0",
          paddingRight: "0",
        },
        panel: {
          paddingLeft: "0",
          paddingRight: "0",
          transitionDuration: "0.3s", // Adjust the duration as needed
        },
      },
    },
  },
});

export default customTheme;