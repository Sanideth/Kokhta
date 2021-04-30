const Button = (props) => {
  return <button className={`btn ${props.className}`}>{props.content}</button>;
};

export default Button;
