import { Routes, Route } from "react-router-dom";

// Local file imports
import Home from './screens/Home/Home'
import About from './screens/About/About'
import UploadPDF from "./screens/SimplifyPDF/UploadPDF/UploadPDF";

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
          <Route path="/app/get-data" element={<UploadPDF />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
