const InputField = ({ name, label, ...rest }) => {
    return (
        <div className="relative w-[75%]">
            <label htmlFor={name}>{label}</label>
            <input
                className="block w-full py-2 px-3 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent rounded-md"
                name={name}
                {...rest}
            />
        </div>
    );
};

export default InputField;