import Hero from "../Hero/Hero";
import GlobalStyle from "../styles/GlobalStyles";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <AppStyled>
      <GlobalStyle />
      <Hero />
    </AppStyled>
  );
};

export default App;
