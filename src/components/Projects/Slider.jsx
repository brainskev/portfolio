/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import Project from './Project';

const data = [
  {
    img: 'https://res.cloudinary.com/dj1p87c0e/image/upload/v1682581004/traveller_aadenz.png',
    title: 'Travellers Hub',
    disc: 'This is a web application developed using the React.js library, designed to provide a hub for travel-related content. The app has several features, including a search bar that allows users to search for flights, hotels, and car rentals using the Skyscanner API, as well as a map feature that displays points of interest a ',
    source: 'https://github.com/MICHAELKITH/react-travel-hub',
  },
  {
    img: 'https://res.cloudinary.com/dj1p87c0e/image/upload/v1682582420/SpaceX_lej5ex.png',
    title: 'Space X Travellers Hub',
    disc: 'This is a web application for a company that provides commercial and scientific space travel services, using real live data from the SpaceX API. The application allows users to book rockets and join selected space missions.',
    source: 'https://github.com/Thinus01/React_Group_Project',
  },
  {
    img: 'https://res.cloudinary.com/dj1p87c0e/image/upload/v1682583553/bookStore_ufmiij.png',
    title: 'BookStore',
    disc: 'This is a web-based application with the functionality of adding a new book, displaying books added based on the data fetched from the API, and deleting a selected book. It is built with React, and Redux and API',
    source: 'https://github.com/brainskev/book_store',
  },
  {
    img: 'https://res.cloudinary.com/dj1p87c0e/image/upload/v1682587265/pyladies_bie9te.png',
    title: 'COP 27 - UN Climate Change Conference',
    disc: 'This is a workshop website built for United Nations Climate Change. It is built using both the mobile-first version and the Desktop version. It shows the home page and the about page. It is built using HTML, CSS, and JavaScript for dynamic web pages.',
    source: 'https://github.com/brainskev/Capstone-project-01',
  },
  {
    img: 'https://res.cloudinary.com/dj1p87c0e/image/upload/v1682588004/Covid-19_q0hcaf.png',
    title: 'Covid-19 Tracking',
    disc: ' This is a mobile web application that collects information from an API to provide comprehensive data for the novel coronavirus in the world. Built with React and Redux.',
    source: 'https://github.com/brainskev/Covid19_Tracking_App',
  },
];

const settings = {
  className: 'center',
  centerMode: true,
  dots: false,
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
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = '';
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #db7093;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }

  a {
    margin-left: 0.4rem;
    color: red;
  }
`;
