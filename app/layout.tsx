import '../styles/globals.css';
import { FunctionComponent, ReactNode } from 'react';
import { Header } from '@components/layout/Header/Header';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
    return (
        <html>
            <title>The Rick and Morty</title>
            <head />
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
};
export default RootLayout;
