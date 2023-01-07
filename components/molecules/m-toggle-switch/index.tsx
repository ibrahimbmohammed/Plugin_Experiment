interface ToggleSwitchProps {
    label?: string;
    htmlFor?: string;
    checked: boolean;
    onChangeHandler: any;
}

function ToggleSwitch({ label, htmlFor, checked, onChangeHandler }: ToggleSwitchProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="relative inline-flex cursor-pointer flex-col items-center justify-center xl:flex-row"
        >
            <input
                type="checkbox"
                value=""
                id={htmlFor}
                className="peer sr-only"
                checked={checked}
                onChange={onChangeHandler}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </span>
        </label>
    );
}

export default ToggleSwitch;
