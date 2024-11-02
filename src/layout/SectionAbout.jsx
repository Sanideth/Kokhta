import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Icon from '../components/Icon';
import CogIcon from '../img/cogs.svg?react';
import HomeIcon from '../img/home.svg?react';

const SectionAbout = () => {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="section-about__heading-container">
          <Heading
            element="h2"
            text="რა არის ეზოგრაფი?"
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
              text="ეზოგრაფი არის ეზოს/ბაღის მოვლა მოწყობასთან დაკავშირებული სერვისების ერთობლიობა. ჩვენ ერთი ფანჯრის პრინციპით ვაგვარებთ თქვენს ეზოსთან დაკავშირებულ პრობლემებს და საჭიროებებს."
            />
          </div>
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<HomeIcon />} />
            </div>
            <Paragraph
              className="paragraph-primary"
              text="ჩვენი სერვისების მისაღებია მათთვის ვისაც აქვთ კერძო სახლები და სურთ მოაწყონ ბაღები თავიანთ ეზოებში, ასევე მათთვიე ვისაც უკვე აქვთ მოწყობილი ბაღები და სურთ მოვლა პატრონობის სერვისი. 
დაინტერესებულ პირებს ვემსახურებით თბილისსა და მის შემოგარენში, რიგ შემთხვევებში მთელი საქართველოს მასშტაბით."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
