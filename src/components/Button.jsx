const Button = (props) => {
  const clickFunctions = (popupText, popupHeading) => {
    props.clickOpen();
    props.clickText(popupText, popupHeading);
  };
  const clickable = props.clickable;
  const isNonAnchor = props.isNonAnchor
  return (
    !props.isNonAnchor ? <a
      className={`btn ${props.className}`}
      href={props.href}
      onClick={
        clickable
          ? () => clickFunctions(props.popupText, props.popupHeading)
          : null
      }
    >
      {props.content}
    </a> : <button
      className={`btn ${props.className}`}
      href={props.href}
      onClick={
        clickable
          ? () => clickFunctions(props.popupText, props.popupHeading)
          : null
      }
    >
      {props.content}
    </button>
  )
};

export default Button;
