import Paragraph from "./Paragraph";
import Button from "./Button";
const Service = (props) => {
  const renderButton = props.renderButton;
  return (
    <div className="service">
      {renderButton ? (
        <div className={`${props.className}__button-container`}>
          <Button content={props.content} className={props.buttonClassName} />
        </div>
      ) : null}

      <Paragraph className={props.paragraphClassName} text={props.text} />
    </div>
  );
};

export default Service;
