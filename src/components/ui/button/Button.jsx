import "./Button.css";
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`py-2 px-4 font-semibold rounded shadow-md text-white bg-green-500 hover:bg-green-700 ${
        props.className ? props.className : ""
      }`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
