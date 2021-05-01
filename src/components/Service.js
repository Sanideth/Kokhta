import Image from "./Image";
import Button from "./Button";
const Service = (props) => {
  const renderButton = props.renderButton;
  return (
    <figure className={`${props.className}service`}>
      {renderButton ? (
        <div className={`${props.className}__button-container`}>
          <Button content={props.content} className={props.buttonClassName} />
        </div>
      ) : null}
      <Image className={props.className} src={props.src} alt={props.alt} />
      <figcaption className={`${props.className}figcaption`}>
        {props.text}
      </figcaption>
    </figure>
  );
};

export default Service;
