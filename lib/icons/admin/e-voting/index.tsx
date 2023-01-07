// eslint-disable-next-line import/no-unresolved
import { IconProps } from '../../dashboard/sidebar/Icon.types';

function EvotingAdminSvg({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="28"
            height="111"
            viewBox="0 0 28 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0.330078 110.189H27.8301L0.330078 0.189453V110.189Z" fillOpacity="0.35" />
        </svg>
    );
}

EvotingAdminSvg.defaultProps = {
    className: '',
};

export default EvotingAdminSvg;
