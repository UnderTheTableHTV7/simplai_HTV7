import { Routes, Route, Link } from "react-router-dom";

// Local file imports
import Home from './screens/Home/Home'
import About from './screens/About/About'
import UploadPDF from "./screens/SimplifyPDF/UploadPDF"
import TranslatePDF from "./screens/SimplifyPDF/TranslatePDF"
import UserDetails from "./screens/SimplifyPDF/UserDetails"

// MUI Imports
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(8, 10, 15, 0.95)'
    },
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/app/user-config" element={<UserDetails />} />
          <Route path="/app/get-data" element={<UploadPDF />} />
          <Route path="/app/translate" element={<TranslatePDF />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
