// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function MembershipIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18 8H2V2H18V8ZM18 13H2V11H18V13ZM18 0H2C0.89 0 0 0.89 0 2V13C0 14.11 0.89 15 2 15H6V20L10 18L14 20V15H18C19.11 15 20 14.11 20 13V2C20 0.89 19.11 0 18 0Z" />
        </svg>
    );
}

MembershipIcon.defaultProps = {
    className: '',
};

export default MembershipIcon;
