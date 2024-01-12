import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      contentColor: string;
      background: string;
    };
    typography: {
      mainFontFamily: string;
      contentFontFamily: string;
      mainSize: string;
      secondarySize: string;
      contentSize: string;
      contentWeight: string;
    };
  }
}
