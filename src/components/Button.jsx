const Button = (props) => {
  const clickFunctions = (popupText, popupHeading) => {
    props.clickOpen();
    props.clickText(popupText, popupHeading);
  };
  const clickable = props.clickable;
  return (
    <a
      className={`btn ${props.className}`}
      href={props.href}
      onClick={
        clickable
          ? () => clickFunctions(props.popupText, props.popupHeading)
          : null
      }
    >
      {props.content}
    </a>
  );
};

export default Button;
