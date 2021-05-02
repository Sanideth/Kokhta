import Heading from "../components/Heading";
import Service from "../components/Service";
import yardImgSrc from "../img/yard-1.jpg";
import designImgSrc from "../img/design-1.jpg";
import irrigationImgSrc from "../img/irrigation-1.jpg";
import abandonedImgSrc from "../img/abandoned-1.jpg";
import fenceImgSrc from "../img/fence-1.jpg";
import graveImgSrc from "../img/grave-1.jpg";

const SectionServices = () => {
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
            renderButton={false}
            className="section-services__"
            text="ეზოს მოვლა"
            src={yardImgSrc}
            alt="Yard Image"
            imageClassName="section-services__service"
          />
          <Service
            renderButton={false}
            className="section-services__"
            text="გამწვანება/ლანდშაფტის დიზაინი"
            src={designImgSrc}
            alt="Design Image"
            imageClassName="section-services__service"
          />
          <Service
            renderButton={false}
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="სარწყავი სისტემების დაპროექტება/მონტაჟი"
            src={irrigationImgSrc}
            alt="Irrigation Image"
            imageClassName="section-services__service"
          />
          <Service
            renderButton={false}
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="მიტოვებული ეზოების მოწესრიგება"
            src={abandonedImgSrc}
            alt="Abandoned Yard Image"
            imageClassName="section-services__service"
          />
          <Service
            renderButton={false}
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="ტერიტორიის შემოღობვა/ძველის აღდგენა"
            src={fenceImgSrc}
            alt="Fence Image"
            imageClassName="section-services__service"
          />
          <Service
            renderButton={false}
            className="section-services__"
            paragraphClassName="paragraph-service"
            text="წინაპრებზე ზრუნვა/საფლავის მოვლა"
            src={graveImgSrc}
            alt="Grave Image"
            imageClassName="section-services__service"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
