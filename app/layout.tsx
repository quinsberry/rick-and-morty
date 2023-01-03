import '../styles/globals.css';
import { FunctionComponent, ReactNode } from 'react';
import { Header } from '@components/layout/Header/Header';
import { TRPCProvider } from '@/src/hooks/trpc';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
    return (
        <html>
            <head />
            <body>
                <TRPCProvider>
                    <Header />
                    <div className="container">{children}</div>
                </TRPCProvider>
            </body>
        </html>
    );
};
export default RootLayout;
