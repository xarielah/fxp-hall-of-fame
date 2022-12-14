import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: {
        body: {
            bg: '#FAFAFA',
            color: 'fxpDark',
        },
    },
};

const colors = {
    fxpBlue: '#33ccff',
    fxpDarkBlue: '#3355aa',
    fxpDark: '#3e3e3e',
    fxpGold: '#daa520',
    fxpRed: '#ff0000',
    fxpSup: '#0000ff',
};

const btn = {
    color: '#fafafa',
    bg: 'blackAlpha.700',
    borderRadius: 'full',
    _hover: {
        bg: 'fxpBlue',
        boxShadow: '0 0 10px #33333355',
    },
    _active: {
        bg: 'fxpBlue',
    },
};

const components = {
    Link: {
        baseStyle: {
            '&:hover': {
                transition: '200ms ease-in-out all',
                color: 'fxpBlue',
            },
        },
    },
    Text: {
        variants: {
            'header-option': {
                fontWeight: 'bold',
                color: '#fafafa',
            },
        },
    },
    Button: {
        variants: {
            'main-btn': btn,
            'red-btn': { ...btn, bg: 'fxpRed' },
        },
        defaultProps: {
            size: 'sm',
        },
    },
};

const theme = extendTheme({ styles, components, colors });

export default theme;
