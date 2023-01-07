/* eslint-disable jsx-a11y/anchor-is-valid */
import type { ReactElement } from 'react';
import { cloneElement } from 'react';
import { useRouter } from 'next/router';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

type ActiveLinkProps = LinkProps & {
    children: ReactElement;
    activeClassName?: string;
    className?: string;
};

const ActiveLink = ({
    children,
    activeClassName = '',
    className = '',
    ...rest
}: ActiveLinkProps) => {
    const { asPath } = useRouter();
    const childClassName = children.props.className ?? '';
    const newClassName = `${childClassName} ${activeClassName ?? ''}`;
    const derivedActiveClassName = asPath === rest.href ? newClassName : childClassName;
    return (
        <Link {...rest}>
            {cloneElement(children, { className: `${derivedActiveClassName} ${className} ` })}
        </Link>
    );
};

export default ActiveLink;
