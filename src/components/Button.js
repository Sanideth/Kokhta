const Button = (props) => {
  return (
    <a className={`btn ${props.className}`} href={props.href}>
      {props.content}
    </a>
  );
};

export default Button;
