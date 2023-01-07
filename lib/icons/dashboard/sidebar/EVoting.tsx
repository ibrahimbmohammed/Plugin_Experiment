// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function EVotingIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="20"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z" />
        </svg>
    );
}

EVotingIcon.defaultProps = {
    className: '',
};

export default EVotingIcon;
