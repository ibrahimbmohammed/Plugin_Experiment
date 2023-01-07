// eslint-disable-next-line import/no-unresolved
import { IconProps } from '../sidebar/Icon.types';

function HouseIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.7566 15.2582H3.24312C3.04395 15.2582 2.85294 15.179 2.7121 15.0382C2.57127 14.8974 2.49215 14.7064 2.49215 14.5072V7.74851H0.239258L7.99447 0.698449C8.13273 0.572646 8.31294 0.50293 8.49987 0.50293C8.6868 0.50293 8.86701 0.572646 9.00527 0.698449L16.7605 7.74851H14.5076V14.5072C14.5076 14.7064 14.4285 14.8974 14.2876 15.0382C14.1468 15.179 13.9558 15.2582 13.7566 15.2582ZM3.99408 13.7562H13.0057V6.36448L8.49987 2.26872L3.99408 6.36448V13.7562Z"
                fill="#FA582E"
            />
        </svg>
    );
}

export default HouseIcon;
