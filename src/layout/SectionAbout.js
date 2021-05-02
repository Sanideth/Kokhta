import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Icon from "../components/Icon";
import { ReactComponent as CogIcon } from "../img/cogs.svg";
import { ReactComponent as HomeIcon } from "../img/home.svg";

const SectionAbout = () => {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="section-about__heading-container">
          <Heading
            element="h2"
            text="რა არის კოხტად.ჯი?"
            className="heading-secondary"
          />
        </div>
        <div className="section-about__info">
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<CogIcon />} />
            </div>
            <Paragraph
              className="paragraph-primary"
              text="კოხტად.ჯი არის სხვადასხვა სახის სერვისების ერთობლიობა, რომელსაც ვთავაზობთ რეგიონში მცხოვრებ ადამიანებს. 
ჩვენი მისიაა ვუზრუნველყოთ სოფლად მცხოვრები ადამიანები სხვადასხვა სახის სერვისებით და ამით უფრო მეტად კომფორტული გავხადოთ მათი ცხოვრება."
            />
          </div>
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<HomeIcon />} />
            </div>
            <Paragraph
              className="paragraph-primary"
              text="ჩვენი სერვისები განსაკუთრებით მისაღებია და მოხერხებულია ემიგრანტებისთვის და იმ ადამიანებისთვის ვისაც სოფლად აქვს ეზო-კარი თუმცა გარკვეული მიზეზების გამო ვერ ახერხებს მის მოვლას. 
          ჩვენი სერვისები ხელმისაწვდომია ლეჩხუმის, ქვ.სვანეთის, რაჭის და იმერეთის ნაწილის ტერიტორიაზე მცხოვრები ადამიანებისთვის."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
