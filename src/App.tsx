import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const mdTheme = createTheme();

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={mdTheme}>
                <CssBaseline/>

                <Routes/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
