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

const components = {
    Link: {
        baseStyle: {
            '&:hover': {
                transition: '400ms ease-in-out all',
                color: 'fxpBlue',
            },
        },
    },
    Button: {
        variants: {
            'main-btn': {
                color: '#fafafa',
                bg: '#333333',
                _hover: {
                    bg: 'fxpBlue',
                    boxShadow: '0 0 10px #33333355',
                },
                _active: {
                    bg: 'fxpBlue',
                },
            },
            'copied-btn': {
                color: 'fxpBlue',
                bg: '#333333',
                _hover: {
                    bg: 'fxpBlue',
                    color: 'white',
                    boxShadow: '0 0 10px #33333355',
                },
                _active: {
                    bg: 'fxpBlue',
                },
            },
        },
        defaultProps: {
            size: 'sm',
        },
    },
};

const theme = extendTheme({ styles, components, colors });

export default theme;
