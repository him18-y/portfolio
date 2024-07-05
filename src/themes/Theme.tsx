import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1A4472',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,

        h1: { fontSize: 60 },
        h2: { fontSize: 48 },
        h3: { fontSize: 42 },
        h4: { fontSize: 36 },
        h5: { fontSize: 20 },
        h6: { fontSize: 18 },
        subtitle1: { fontSize: 18 },
        subtitle2: { fontSize: 18 },
        body1: { fontSize: 16 },
        body2: { fontSize: 16 },
        button: { textTransform: 'none' },
    },
});

export default theme;