import { FunctionComponent } from 'react';
import { Logo } from '@components/icons/Logo';
import Link from 'next/link';
import { ROUTES } from '@utils/routes';

interface HeaderProps {}

export const Header: FunctionComponent<HeaderProps> = ({}) => {
    return (
        <header className="w-full bg-slate-200">
            <div className="container flex items-center justify-between py-4 text-slate-700">
                <span>
                    <Link href={ROUTES.HOME}>
                        <Logo />
                    </Link>
                </span>
                <nav>
                    <ul>
                        <li>
                            <Link href={ROUTES.CHARACTERS}>Characters</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
