import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode: mode,
    background: (mode === 'dark')? {
      paper: "#29364D",
      default: "#1B263B"
    } : {},
  },
  typography: {
      fontFamily: [
          'Google Sans',
          'Roboto'
      ].join(','),
      button: {
          textTransform: 'none',
      },
      h2: {
          fontSize: '36px',
          fontWeight: '700',
          letterSpacing: 0,
          lineHeight: '44px',
          textShadow: '0 1px 1px rgb(0 0 0 / 12%)',
          paddingBottom: '12px'
      },
      h4: {
          fontSize: '16px',
          fontWeight: '700',
          height: '36px',
          lineHeight: '18px',
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block"
      },
      subtitle1: {
          fontSize: '20px',
          fontWeight: '500',
          letterSpacing: 0,
          lineHeight: '28px',
          textShadow: '0 1px 1px rgb(0 0 0 / 12%)'
      },
      h6: {
        fontSize: "18px",
      }
  },
  components: {
      MuiButtonBase: {
          defaultProps: {
              disableRipple: true
          }
      },
      MuiTabs: {
          defaultProps: {
              TabIndicatorProps: {
                  style: {
                      borderRadius: "3px 3px 0 0",
                      height: "3px"
                  }
              }
          }
      },
      MuiPaper: {
          defaultProps: {
              style: {
                  borderRadius: "8px !important"
              }
          }
      }
  }
})
