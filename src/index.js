import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { RtlProvider } from './components/layouts/rtlprovider';
import MainLayout from './components/layouts/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <RtlProvider>
                <MainLayout>
                    <App />
                </MainLayout>
            </RtlProvider>
        </ChakraProvider>
    </React.StrictMode>
);
