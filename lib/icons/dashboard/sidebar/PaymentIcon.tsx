// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function PaymentIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 2.75C0 2.02065 0.289731 1.32118 0.805456 0.805456C1.32118 0.289731 2.02065 0 2.75 0H21.25C21.9793 0 22.6788 0.289731 23.1945 0.805456C23.7103 1.32118 24 2.02065 24 2.75V5H0V2.75ZM0 6.5H24V14.25C24 14.9793 23.7103 15.6788 23.1945 16.1945C22.6788 16.7103 21.9793 17 21.25 17H2.75C2.02065 17 1.32118 16.7103 0.805456 16.1945C0.289731 15.6788 0 14.9793 0 14.25V6.5ZM16.5 11.4C16.2613 11.4 16.0324 11.4948 15.8636 11.6636C15.6948 11.8324 15.6 12.0613 15.6 12.3C15.6 12.5387 15.6948 12.7676 15.8636 12.9364C16.0324 13.1052 16.2613 13.2 16.5 13.2H19.5C19.7387 13.2 19.9676 13.1052 20.1364 12.9364C20.3052 12.7676 20.4 12.5387 20.4 12.3C20.4 12.0613 20.3052 11.8324 20.1364 11.6636C19.9676 11.4948 19.7387 11.4 19.5 11.4H16.5Z" />
        </svg>
    );
}

PaymentIcon.defaultProps = {
    className: '',
};

export default PaymentIcon;
