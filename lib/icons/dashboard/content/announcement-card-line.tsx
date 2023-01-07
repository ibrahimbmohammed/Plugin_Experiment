interface IAnnouncementCardLineProps {
    className: string;
}

function AnnouncementCardLine({ className }: IAnnouncementCardLineProps) {
    return (
        <svg
            className={className}
            width="11"
            height="100%"
            viewBox="0 0 166 1785"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.8" filter="url(#filter0_d_0_1)">
                <path
                    opacity="0.8"
                    d="M82.9291 18.4899L84.5942 1828.91"
                    strokeWidth="11"
                    strokeDasharray="60 32"
                />
            </g>
            <path d="M83 168C128.84 168 166 130.392 166 84C166 37.6081 128.84 0 83 0C37.1604 0 0 37.6081 0 84C0 130.392 37.1604 168 83 168Z" />
            <defs>
                <filter
                    id="filter0_d_0_1"
                    x="73.4292"
                    y="18.4463"
                    width="20.665"
                    height="1818.5"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default AnnouncementCardLine;
