
import { useContext } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Intro from "./component/Intro";
import ProductList from "./component/ProductList";
import Toggle from "./component/Toggle";
import { ThemeContext,ThemeProvider } from "./context";

const App = () => {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (<ThemeProvider>
    <div
      style={{
        backgroundColor:  useContext(ThemeContext).state.darkMode ? "#222" : "white",
        color: false && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
    </ThemeProvider>
  );
};

export default App;
