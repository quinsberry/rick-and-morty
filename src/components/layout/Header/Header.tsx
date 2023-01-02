import { FunctionComponent } from 'react';
import { Logo } from '@components/icons/Logo';

interface HeaderProps {}

export const Header: FunctionComponent<HeaderProps> = ({}) => {
    return (
        <header className="bg-slate-200 w-full">
            <div className="container flex justify-between py-4 items-center text-slate-700">
                <span>
                    <Logo />
                </span>
                <nav>
                    <ul>
                        <li>Characters</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
