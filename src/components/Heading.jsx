const Heading = (props) => {
  const Element = `${props.element}`;
  return <Element className={props.className}>{props.text}</Element>;
};

export default Heading;
