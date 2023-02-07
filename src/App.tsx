import React, { Suspense } from 'react';
import './App.css';
import { createTheme, CssBaseline, PaletteMode, StyledEngineProvider, ThemeProvider, useMediaQuery } from '@mui/material';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { getTheme } from './Theme';
import Header from './Header';
import PageCharacter from './PageCharacter';
import { ColorModeContext } from './Context/ColorModeContext';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = React.useState<PaletteMode>(prefersDarkMode? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return <StyledEngineProvider injectFirst>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter basename="/">
          <Suspense fallback={null}>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/character" />} />
              <Route path="/character/*" element={<PageCharacter />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </StyledEngineProvider>
}

export default App;
