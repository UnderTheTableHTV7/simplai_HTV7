import { Routes, Route, Link } from "react-router-dom";

// Local File Imports
import Home from './screens/Home/Home'
import CustomerSurvey from "./screens/CustomerSurvey/CustomerSurvey";

// MUI Imports
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <CustomerSurvey/>
      </ThemeProvider>
    </div>
  );
}

export default App;
