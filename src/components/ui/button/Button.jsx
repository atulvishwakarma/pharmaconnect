import "./Button.css";
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`py-2 px-6 font-semibold rounded shadow-md text-green-600 bg-green-200 hover:bg-green-600 hover:text-green-100 transition duration-500 ease-in-out ${
        props.className ? props.className : ""
      }`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
