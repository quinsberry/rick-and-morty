import cn from 'classnames';
import { FunctionComponent, ReactNode } from 'react';

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'p' | 'label';
type Variant = 'banner' | 'title-1' | 'title-2' | 'body-1' | 'body-2' | 'sub-title-1' | 'sub-title-2';

interface TypographyProps {
    variant: Variant;
    children: ReactNode;
    tag?: Tag;
    className?: string;
}

export const Typography: FunctionComponent<TypographyProps> = ({ tag = 'div', children, variant, className }) => {
    const Component = tag;
    return <Component className={cn(variant, className)}>{children}</Component>;
};
