import Image from './Image';
import Button from './Button';
import Paragraph from './Paragraph';

const Service = (props) => {
  return (
    <figure className={`${props.className}service`}>
      <Image className={props.imageClassName} src={props.src} alt={props.alt} />
      <figcaption className={`${props.className}figcaption`}>
        <Paragraph className="figaption-paragraph" text={props.text} />

        <div className={`${props.className}button-container`}>
          <Button
            className="btn-secondary"
            content="გაიგე მეტი"
            clickOpen={props.clickOpen}
            clickText={props.clickText}
            popupText={props.popupText}
            popupHeading={props.text}
            clickable={true}
            isNonAnchor={props.isNonAnchor}
          />
        </div>
      </figcaption>
    </figure>
  );
};

export default Service;
