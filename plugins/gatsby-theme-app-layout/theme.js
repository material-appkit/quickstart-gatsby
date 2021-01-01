import { createMuiTheme } from '@material-ui/core/styles';

const APP_BAR_HEIGHT = 56;
const NAVBAR_WIDTH = 220;

const baseTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#3C3B6E',
    },
    secondary: {
      main: '#B22234',
    },
  },

  typography: {
    button: {
      textTransform: 'none',
    },

    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',

    h1: {
      fontSize: baseTheme.typography.pxToRem(40),
      fontWeight: 400,
    },

    h2: {
      fontSize: baseTheme.typography.pxToRem(24),
      fontWeight: 400,
    },

    h3: {
      fontSize: baseTheme.typography.pxToRem(20),
      fontWeight: 400,
    },

    h4: {
      fontSize: baseTheme.typography.pxToRem(16),
      fontWeight: 400,
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body, #___gatsby, #gatsby-focus-wrapper': {
          [baseTheme.breakpoints.up('md')]: {
            height: '100vh',
          },
        },
      },
    },

    MuiTypography: {
      button: {
        fontSize: 'inherit',
        fontWeight: 600,
        lineHeight: 'inherit',
      },
    },

    MuiLink: {
      button: {
        fontFamily: 'inherit',
        fontSize: baseTheme.typography.button.fontSize,
        verticalAlign: 'unset',
      }
    },
  },

  //----------------------------------------------------------------------------
  // Application Theme
  appbar: {
    height: APP_BAR_HEIGHT,
  },

  navbar: {
    width: NAVBAR_WIDTH,
  },


  // PROPERTY LIST
  propertyList: {
    root: {
      padding: 0,
    },

    listItem: {
      listItemRoot: {
        alignItems: 'baseline',
        display: 'flex',
        fontSize: baseTheme.typography.pxToRem(14),
        padding: '1px 0',
      },

      listItemIconRoot: {
        marginRight: 5,
        minWidth: 20,
      },

      listItemIcon: {
        height: 18,
        width: 18,
      },

      listItemTextRoot: {
        margin: 0,
        padding: 0,
      },

      label: {
        fontWeight: 500,
        marginRight: baseTheme.spacing(.5),
        "&:after": {
          content: '":"',
        },
      },

      inlineNestedList: {
        display: 'inline-flex',

        '& > *:not(:last-child)': {
          marginRight: baseTheme.spacing(.5),
          '&:after': {
            content: '","',
          },
        },
      },

      nestedListItem: {
        padding: 0,
        width: 'initial',
      }
    },
  },
});

export default theme;
