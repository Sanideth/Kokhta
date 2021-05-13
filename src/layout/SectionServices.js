import Heading from "../components/Heading";
import Service from "../components/Service";
import Popup from "../layout/Popup";
import { data } from "../data/data";
import { useState } from "react";

const SectionServices = () => {
  const [open, setOpen] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupHeading, setPopupHeading] = useState("");

  const handleOnClick = () => {
    setOpen(!open);
  };

  const handlePopupTextClick = (popupText, popupHeading) => {
    setPopupText(popupText);
    setPopupHeading(popupHeading);
  };

  const handlePopupBoxClick = (e) => {
    if (e.target.classList.contains("open")) {
      setOpen(!open);
    }
  };

  return (
    <section className="section-services" id="services">
      <div className="container">
        <div className="section-services__heading-container">
          <Heading
            className="heading-secondary"
            text="რას გთავაზობთ?"
            element="h2"
          />
        </div>
        <div className="section-services__services">
          {/* imported data array from data.js */}
          {data.map((item) => (
            <Service
              key={item.id}
              className="section-services__"
              text={item.text}
              src={item.src}
              alt={item.alt}
              imageClassName="section-services__service"
              open={open}
              clickOpen={handleOnClick}
              clickText={handlePopupTextClick}
              popupText={item.popupText}
            />
          ))}
          {/* <Service
            className="section-services__"
            text="ეზოს მოვლა"
            src={yardImgSrc}
            alt="Yard Image"
            imageClassName="section-services__service"
            open={open}
            clickOpen={handleOnClick}
            clickText={handlePopupTextClick}
            popupText="ეზოს მოვლის მომსახურებით სარგებლობა მომხმარებელს შეუძლია როგორც ერთჯერადად ისე მრავალჯერადად წინასწარ შეთანხმებული გეგმა გრაფიკის მიხედვით წლის განმავლობაში. 
            ეზოს მოვლის მომსახურება მოიცავს ისეთ პრაქტიკულ სამუშაოებს როგორიც არის გაზონის/ბალახის საფარის გაკრეჭა გათიბვას, ეზოს დალაგებას, სარეველა მცენარეებისგან გაწმენდას, დეკორატიული ხე-მცენარეების და ბუჩქების სხვლა-ფორმირებას და ა.შ."
          />
          */}
        </div>
        <div
          className={`popup ${open ? "open" : ""}`}
          onClick={handlePopupBoxClick}
        >
          <Popup
            popupText={popupText}
            click={handleOnClick}
            popupHeading={popupHeading}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
