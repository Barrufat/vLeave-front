import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import GlobalStyle from "../styles/GlobalStyles";
import AppStyled from "./AppStyled";
import HomePage from "../../pages/HomePage/HomePage";
import ShopPage from "../../pages/ShopPage/ShopPage";

const App = () => {
  return (
    <AppStyled>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
