import Heading from "../components/Heading";
import Service from "../components/Service";
import yardImgSrc from "../img/yard-1.jpg";

const SectionServices = () => {
  return (
    <section className="section-services">
      <div className="overlay">
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
            />
            <Service
              renderButton={false}
              className="section-services__"
              paragraphClassName="paragraph-service"
              text="გამწვანება/ლანდშაფტის დიზაინი"
            />
            <Service
              renderButton={false}
              className="section-services__"
              paragraphClassName="paragraph-service"
              text="სარწყავი სისტემების დაპროექტება/მონტაჟი"
            />
            <Service
              renderButton={false}
              className="section-services__"
              paragraphClassName="paragraph-service"
              text="მიტოვებული ეზოების მოწესრიგება"
            />
            <Service
              renderButton={false}
              className="section-services__"
              paragraphClassName="paragraph-service"
              text="ტერიტორიის შემოღობვა/ძველის აღდგენა"
            />
            <Service
              renderButton={false}
              className="section-services__"
              paragraphClassName="paragraph-service"
              text="წინაპრებზე ზრუნვა/საფლავის მოვლა"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
