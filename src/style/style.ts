import {createTheme} from "@mui/material";
import styled from "@mui/material/styles/styled";

export const button = {
    backgroundColor: '#00B6F4',
}

export const modal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 460,
    borderRadius: '4px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#fff',
    padding: '34px',
    outline: 'none'
}

export const theme = createTheme({
    typography: {
        button: {
            textTransform: "none",
            padding: '8px 24px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            fontFamily: 'inherit'
        },

    }
});







