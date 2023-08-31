// pages/index.js
import React from 'react';
import Header from '../components/Header';
import DueDateCalculator from '../components/DueDateCalculator';
import ConceptionCalculator from '../components/ConceptionCalculator';
import Footer from '../components/Footer';
import styles from '../styles/global.css'; // Adjust the path based on your project structure


const Home = () => {

  useEffect(() => {
    // Google Analytics tracking code
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-83T28LQK4Q');
  }, []);
  return (
    <div>
      <Header />
      <DueDateCalculator />
      <ConceptionCalculator />
    
      <div className="calculator">
            <h1>Determining the Moment of Conception</h1>
            <p className="description">
            The precise instance of conception often sparks curiosity among women seeking to pinpoint the initiation of their pregnancy. The calculation of gestational age, the baby's developmental stage, typically commences from the first day of the mother's last menstrual period. However, biologically, conception transpires during ovulation and the fertilization of the egg, an event that generally unfolds around ten days after the onset of the mother's last menstrual period.            </p>
            <p className="description">
            Given the multitude of variables involved in conception, arriving at an exact conception date poses challenges. To address this, a calculator aids in approximating the window of actual conception and the potential range of days during which sexual activity might have led to conception. Several methods exist to estimate conception dates.</p>
           
            <h1>Reference Point: Last Menstrual Period</h1>
            <p className="description">
            Conception commonly transpires within 11-21 days following the initial day of the last menstrual period for women with regular cycles. Although this forms the basis for estimating conception, precision remains elusive due to the uncertainty surrounding ovulation timing. Accuracy diminishes further for women with irregular cycles or those unable to recall the first day of their last period. In such instances, ultrasound emerges as a more dependable means of estimating gestational age.</p>
            <p className="description">
            Given the multitude of variables involved in conception, arriving at an exact conception date poses challenges. To address this, a calculator aids in approximating the window of actual conception and the potential range of days during which sexual activity might have led to conception. Several methods exist to estimate conception dates.</p>
      
            <h1>Determining the Moment of Conception</h1>
            <p className="description">
            The precise instance of conception often sparks curiosity among women seeking to pinpoint the initiation of their pregnancy. The calculation of gestational age, the baby's developmental stage, typically commences from the first day of the mother's last menstrual period. However, biologically, conception transpires during ovulation and the fertilization of the egg, an event that generally unfolds around ten days after the onset of the mother's last menstrual period.            </p>

            <h1>Projected Due Date</h1>
            <p className="description">
            A projected due date, often derived from a sonogram, typically arises during prenatal checkups. This due date facilitates the calculation of potential conception dates.</p>
            


            <h1>Insight from Ultrasound</h1>
            <p className="description">
            Ultrasound, utilizing sound waves to generate internal images, plays a pivotal role in assessing fetal progress during pregnancy. Referred to as an "obstetric ultrasound" in pregnant women, this real-time procedure forms a standard component of prenatal care in many nations. It furnishes insights into maternal and embryonic/fetal well-being, as well as overall pregnancy progress.</p>
            <p className="description">
            Ultrasounds can gauge fetal dimensions as early as five or six weeks post the mother's last menstrual period, exhibiting greater accuracy in early pregnancy. Coupled with estimates based on the last menstrual period, ultrasound enhances the precision of gestational age assessment.</p>
      
            <h1>Fertilization, Conception, and Pregnancy</h1>
            <p className="description">
            Fertilization and conception, often used interchangeably, bear distinct medical and scientific definitions. Fertilization encompasses the union of sperm and egg within the fallopian tube, resulting in a fertilized egg and initiating embryonic development.</p>
            <p className="description">
            Conception denotes the process of achieving pregnancy, which encompasses both fertilization and subsequent implantation into the uterine wall. Discrepancies arise, especially in the U.S., due to variances in the definitions employed. Some instances deem a woman pregnant post-fertilization, contrary to well-established medical and scientific conventions. </p>
            <p className="description">
            The prevailing viewpoint among medical professionals and U.S. federal policy asserts a woman's pregnancy upon the implantation of a fertilized egg into her uterine wall. At this juncture, conception occurs. In essence, medical and scientific perspectives require both fertilization and implantation for conception, and pregnancy is only acknowledged once both events unfold.</p>
            
      </div>
      <Footer />
    </div>
    
  );
};

export default Home;


