import Heading from "../components/Heading";
import Service from "../components/Service";
import Popup from "../layout/Popup";
import yardImgSrc from "../img/yard-1-scaled.jpg";
import designImgSrc from "../img/design-1.jpg";
import irrigationImgSrc from "../img/irrigation-1-scaled.jpg";
import abandonedImgSrc from "../img/abandoned-1-scaled.jpg";
import fenceImgSrc from "../img/fence-1.jpg";
import graveImgSrc from "../img/grave-1.jpg";
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
          <Service
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
          <Service
            className="section-services__"
            text="გამწვანება/ლანდშაფტის დიზაინი"
            src={designImgSrc}
            alt="Design Image"
            imageClassName="section-services__service"
            open={open}
            clickOpen={handleOnClick}
            clickText={handlePopupTextClick}
            popupText="აღნიშნული სერვისი მოიცავს დამკვეთის მიერ მოთხოვნილი ტერიტორიის გამწვანება, კეთილმოწყობას, ლანდშაფტის დიზაინს. მომსახურებაში შედის როგორც მხოლოდ გამწვანების პროექტის მომზადება და ლანდშაფტის დაგეგმარება ასევე უშუალოდ პროექტის პრაქტიკულად განხორციელებაც"
          />
          <Service
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="სარწყავი სისტემების დაპროექტება/მონტაჟი"
            src={irrigationImgSrc}
            alt="Irrigation Image"
            imageClassName="section-services__service"
            open={open}
            clickOpen={handleOnClick}
            clickText={handlePopupTextClick}
            popupText="მომსახურების ეს სახე რომელსაც ჩვენ ვთავაზობთ მომხმარებელს მოიცავს სარწყავი სისტემების დაპროექტებისა და მონტაჟის სრულ სპექტრს თეორიულ და პრაქტიკულ ნაწილში. აღნიშნული სერვისით სარგებლობა დაინტერესებულ ადამიანებს შეუძლიათ როგორც სოფლის მეურნეობის დარგში ისე გამწვანებული ტერიტორიების მოვლის კუთხით"
          />
          <Service
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="მიტოვებული ეზოების მოწესრიგება"
            src={abandonedImgSrc}
            alt="Abandoned Yard Image"
            imageClassName="section-services__service"
            open={open}
            clickOpen={handleOnClick}
            clickText={handlePopupTextClick}
            popupText="აღნიშნულ სერვისს ვთავაზობთ ემიგრანტებს და ასევე იმ ადამიანებს ვინც სოფლიდან ქალაქში არიან საცხოვრებლად გადასული. 
            ქალაქის მძიმე და გადატვირთული ცხოვრების რეჟიმიდან გამომდინარე ვერ ახერხებენ თავიანთი მამა პაპისეული ეზო კარის მოვლას და ამ მიზეზით მათი წინაპრების დატოვებული კარმიდამო ზიანდება და ეკალ ბარდში ეხვევა მოუვლელობით.
            ამ სერვისით სარგებლობა დაინტერესებულ ადამიანს შეუძლია როგორც ერთჯერადად ისე მრავალჯერადად წინასწარ შეთანხმებული გეგმა გრაფიკის მიხედვით"
          />
          <Service
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="ტერიტორიის შემოღობვა/ძველის აღდგენა"
            src={fenceImgSrc}
            alt="Fence Image"
            imageClassName="section-services__service"
            open={open}
            clickOpen={handleOnClick}
            clickText={handlePopupTextClick}
            popupText="დაინტერესებულ ადამიანებს ვთავაზობთ ეზოს ან რაიმე სხვა ტერიტორიის შემოღობვას სხვადასხვა მასალებით, ასევე მწვანე მცენარეულობით ე.წ ცოცხალ ღობეებს. 
            ჩვენი სერვისი მოიცავს ასევე ძველი დაზიანებული ღობის შეკეთება/აღდგენას"
          />
          <Service
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="წინაპრებზე ზრუნვა/საფლავის მოვლა"
            src={graveImgSrc}
            alt="Grave Image"
            imageClassName="section-services__service"
            open={open}
            clickOpen={handleOnClick}
            clickText={handlePopupTextClick}
            popupText=" წინაპართა საფლავების მოვლა ყველა ადამიანისთვის სათუთი და საკრალური მნიშვნელობის საკითხია. თანამედროვე სამყაროში ცხოვრების დაძაბული რეჟიმის ფონზე ადამიანებს ნაკლებად რჩებათ დრო იზრუნონ მათთვის საყვარელი ადამიანების სამუდამოდ განსასვენებელ ადგილზე. 
            მითუმეტეს იმ შემთხვევაში თუ ისინი საერთოდ სხვა ქალაქში ან სულაც სხვა ქვეყანაში ცხოვრობენ.
            ჩვენი სერვისიც სწორედ ასეთი ადამიანებისთვისაა ხელმისაწვდომი, დაინტერესებულ პირებს ვთავაზობთ სასაფლაოს მოვლის მომსახურებას. სერვისით სარგებლობა შესაძლებელია როგორც ერთჯერადად ისე ასევე მრავალჯერადად წინასწარ შეთანხმებული გეგმა გრაფიკის მიხედვით"
          />
        </div>
        <div className={`popup ${open ? "open" : ""}`}>
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
