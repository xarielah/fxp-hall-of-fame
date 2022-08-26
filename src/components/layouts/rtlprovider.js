import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';

export function RtlProvider({ children }) {
    const cache = createCache({ key: 'css-he', stylisPlugins: [rtl] });
    return <CacheProvider value={cache}>{children}</CacheProvider>;
}
