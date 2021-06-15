import "./Input.css";

const Input = ({ size, ...rest }) => {
  return (
    <input
      type="text"
      className={`form__input form__input-${size}`}
      {...rest}
    />
  );
};

export default Input;
