const Input = ({
    title, alert, box,
    name, type, placeholder, style
}) => {
    return (
        <div className={box}>
            <p className="text-xs px-2">{title}</p>
            <input
                type={type}
                name={name}
                className={style}
                placeholder={placeholder}
            />
            <span>{alert}</span>
        </div>
    );
}

export default Input;