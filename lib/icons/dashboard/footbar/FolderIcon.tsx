function FolderIcon({ className }: { className: string }) {
    return (
        <svg
            className={className}
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.919 14.732C19.919 18.31 17.81 20.419 14.232 20.419H6.45C2.863 20.419 0.75 18.31 0.75 14.732V6.932C0.75 3.359 2.064 1.25 5.643 1.25H7.643C8.361 1.251 9.037 1.588 9.467 2.163L10.38 3.377C10.812 3.951 11.488 4.289 12.206 4.29H15.036C18.623 4.29 19.947 6.116 19.947 9.767L19.919 14.732Z"
                stroke="#706F76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.9812 13.4629H14.7162"
                stroke="#706F76"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default FolderIcon;
