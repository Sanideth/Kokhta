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
            text="ვისთვის არის საჭირო ეზოგრაფის სერვისები?"
            className="heading-secondary"
          />
        </div>
        <div className="section-about__info">
          {/* <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<CogIcon />} />
            </div>
            <Paragraph
              className="paragraph-primary"
              text="ეზოგრაფი არის ეზოს/ბაღის მოვლა მოწყობასთან დაკავშირებული სერვისების ერთობლიობა. ჩვენ ერთი ფანჯრის პრინციპით ვაგვარებთ თქვენს ეზოსთან დაკავშირებულ პრობლემებს და საჭიროებებს."
            />
          </div> */}
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<HomeIcon />} />
            </div>
            <Paragraph
              className="paragraph-primary"
              text="კერძო სახლის მფლობელებისთვის – ვისაც სურს ახალი ბაღის მოწყობა თავიანთ ეზოში, რათა შექმნან მშვენიერი და მშვიდი გარემო. მომხმარებლებისთვის, ვისაც უკვე აქვთ ბაღი – ვინც საჭიროებს რეგულარულ მებაღეობის სერვისს, რათა მათი ბაღი ყოველთვის მოვლილი და ლამაზი იყოს. სახლების მყიდველებისთვის – ვინც ახალ სახლში გადადის და სურს, რომ მის ეზომ უნიკალური ხიბლი შეიძინოს. ბიზნესებისთვის – როგორც კომერციული, ისე სამრეწველო ობიექტებისთვის, რომლებსაც სჭირდებათ პეიზაჟური სერვისები და გარემოს beautification. ადგილობრივი ხელისუფლებისა და არასამთავრობო ორგანიზაციებისთვის- რომლებიც ეძებენ პროფესიონალურ დახმარებას საჯარო პარკებისა და რეკრეაციული სივრცეების გამწვანებაში. ჩვენი სერვისები ერგება ყველას, ვისაც სურს განახლებულ და სასიამოვნო გარემოში ცხოვრება."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
