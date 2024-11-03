import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Icon from '../components/Icon';
import CogIcon from '../img/cogs.svg?react';
import HomeIcon from '../img/home.svg?react';
import TreeIcon from '../img/tree.svg?react';
import DollarIcon from '../img/dollar.svg?react';
import BriefcaseIcon from '../img/briefcase.svg?react'
import CityIcon from '../img/city.svg?react'

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
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<HomeIcon />} />
            </div>
            <p
              className="paragraph-primary"
              
            ><strong className='section-about__info-strong'>კერძო სახლის მფლობელებისთვის</strong>  ვისაც სურს ახალი ბაღის მოწყობა თავიანთ ეზოში, რათა შექმნან მშვენიერი და მშვიდი გარემო.</p>
          </div>
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<TreeIcon />} />
            </div>
            <p
              className="paragraph-primary"
              
            ><strong className='section-about__info-strong'>მომხმარებლებისთვის, ვისაც უკვე აქვთ ბაღი</strong>  ვინც საჭიროებს რეგულარულ მებაღეობის სერვისს, რათა მათი ბაღი ყოველთვის მოვლილი და ლამაზი იყოს.</p>
          </div>
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<DollarIcon />} />
            </div>
            <p
              className="paragraph-primary"
              
            ><strong className='section-about__info-strong'>სახლების მყიდველებისთვის</strong>  ვინც ახალ სახლში გადადის და სურს, რომ მის ეზომ უნიკალური ხიბლი შეიძინოს.</p>
          </div>
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<BriefcaseIcon />} />
            </div>
            <p
              className="paragraph-primary"
              
            ><strong className='section-about__info-strong'>ბიზნესებისთვის</strong>  როგორც კომერციული, ისე სამრეწველო ობიექტებისთვის, რომლებსაც სჭირდებათ პეიზაჟური სერვისები და გარემოს beautification.</p>
          </div>
          <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<CityIcon />} />
            </div>
            <p
              className="paragraph-primary"
              
            ><strong className='section-about__info-strong'>ადგილობრივი ხელისუფლებისა და არასამთავრობო ორგანიზაციებისთვის</strong>  რომლებიც ეძებენ პროფესიონალურ დახმარებას საჯარო პარკებისა და რეკრეაციული სივრცეების გამწვანებაში.</p>
          </div>
          {/* <div className="section-about__info-box">
            <div className="section-about__icon-container">
              <Icon icon={<HomeIcon />} />
            </div>
          <ul className='section-about__info-list'>
            <li>- <strong>კერძო სახლის მფლობელებისთვის</strong> – ვისაც სურს ახალი ბაღის მოწყობა თავიანთ ეზოში, რათა შექმნან მშვენიერი და მშვიდი გარემო.</li>
            <li>- <strong>მომხმარებლებისთვის, ვისაც უკვე აქვთ ბაღი</strong> – ვინც საჭიროებს რეგულარულ მებაღეობის სერვისს, რათა მათი ბაღი ყოველთვის მოვლილი და ლამაზი იყოს.</li>
            <li>- <strong>სახლების მყიდველებისთვის</strong> – ვინც ახალ სახლში გადადის და სურს, რომ მის ეზომ უნიკალური ხიბლი შეიძინოს.</li>
            <li>- <strong>ბიზნესებისთვის</strong> – როგორც კომერციული, ისე სამრეწველო ობიექტებისთვის, რომლებსაც სჭირდებათ პეიზაჟური სერვისები და გარემოს beautification.</li>
            <li>- <strong>ადგილობრივი ხელისუფლებისა და არასამთავრობო ორგანიზაციებისთვის</strong> - რომლებიც ეძებენ პროფესიონალურ დახმარებას საჯარო პარკებისა და რეკრეაციული სივრცეების გამწვანებაში.</li>
          </ul>
          <p className='paragrah-primary'>ჩვენი სერვისები ერგება ყველას, ვისაც სურს განახლებულ და სასიამოვნო გარემოში ცხოვრება.</p>

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
