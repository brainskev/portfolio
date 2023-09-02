/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';
import ClientSlider from './ClientSlider';

const clients = [
  {
    name: 'Amaka Laura Konwea',
    position: 'Full-stack Developer',
    img_url: 'https://avatars.githubusercontent.com/u/105006208?v=4',
    stars: 4,
    disc: `Kelvin is a talented software engineer who is passionate about delivering high-quality software solutions. 
        He is a talented software developer with a deep understanding of front-end technologies, including JavaScript and ReactJS. 
        Throughout his career, he has consistently demonstrated technical proficiency, creativity, and the ability to solve problems.
        His ability to turn complex design concepts into reality,
        utilizing the latest techniques and technologies with excellent attention to detail to deliver high-quality results are among his keen qualities.
        I would gladly recommend him for any job.`,
  },
  {
    name: 'Mutai Gilbert',
    position: 'Software Engineer',
    img_url: 'https://avatars.githubusercontent.com/u/43999618?v=4',
    stars: 5,
    disc: `I highly recommend Kelvin for any software development position or project.
        During our time working together in a software development class, Kelvin consistently impressed me with his intelligence,
        critical thinking skills, and hardworking attitude. 
        He went above and beyond to solve complex problems and take on challenging projects,
        resulting in successful outcomes time and time again. Kelvin's ability to analyse situations, identify key issues,
        and formulate effective solutions is a true testament to his expertise in the field of software development. 
        His dedication to his work and his team was truly remarkable, and he would be a valuable asset to any team.
        I have no doubt that Kelvin will continue to excel in his future endeavors.`,
  },
  {
    name: 'Kennedy Owusu ',
    position: 'Full-stack Developer',
    img_url: 'https://avatars.githubusercontent.com/u/32777408?v=4',
    stars: 4,
    disc: `I highly endorse Kelvin Kaviku as a qualified and competent developer. 
      He has a strong commitment to delivering outstanding work and consistently demonstrates attention to detail and an understanding of industry best practices. 
      Kelvin is a collaborative team player,
      prioritizing the success of the project and the team, making him an ideal candidate for a team-oriented work environment.`,
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = '';
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green">Testimonials & Recommendations</span>
        <h1>what clients and peers say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #db7093;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #db7093;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
