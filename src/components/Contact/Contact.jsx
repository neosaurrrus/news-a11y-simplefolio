import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Work with me" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta ||
                'For 2021, the aim is to use the upcoming WCAG2.2 to perform a deeper analysis. It would be especially great to work with regular users of accessibility tools. Please reach out via the links in the footer.'}
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
