import Heading from '../components/Heading';
import Icon from '../components/Icon';
import CloseIcon from '../img/close.svg?react';
const Popup = (props) => {
  return (
    <div className="popup__content">
      <div className="popup__button-container">
        <button className="btn btn-tertiary" onClick={props.click}>
          <Icon icon={<CloseIcon />} />
        </button>
      </div>
      <div className="popup__text-container">
        <div className="popup__heading-container">
          <Heading
            element="h3"
            className="heading-tertiary"
            text={props.popupHeading}
          />
        </div>
        {props.popupText}
      </div>
    </div>
  );
};

export default Popup;
