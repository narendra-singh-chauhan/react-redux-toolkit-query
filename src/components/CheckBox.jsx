const CheckBox = ({ title, ...rest }) => {
    return (
        <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500 cursor-pointer" {...rest} />
            <span className="ml-2 text-gray-700">{title}</span>
        </label>
    );
};

export default CheckBox;