import Heading from "../components/Heading";
import Service from "../components/Service";

const SectionServices = () => {
  return (
    <section className="section-services">
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
          paragraphClassName="paragraph-service"
          text="ეზოს მოვლა"
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
    </section>
  );
};

export default SectionServices;
