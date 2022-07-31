import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import Page from "./pages/Page";
import { lightTheme,darkTheme } from "./Themes";


function App() {

  const [theme,setTheme] = useState('dark')
  const themeToggle = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Page themeToggle={themeToggle}/>
    </ThemeProvider>
  );
}

export default App;
