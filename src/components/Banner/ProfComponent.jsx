/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
import React from 'react';
import styled from 'styled-components';
import {
  FaGithub, FaAngellist, FaTwitter, FaLinkedinIn,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { Slide } from 'react-awesome-reveal';
import profile from '../../assets/kelvin_dp.png';

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello
            <span className="green"> I&apos;m</span>
          </h4>
          <h1 className="green">Kelvin Kaviku</h1>
          <h3>Full-stack Developer</h3>
          <p>
          I am an experienced Full-stack Developer based in Nairobi Kenya,
          with over 2 years of practical expertise in crafting and deploying applications
           and solutions across a diverse set of technologies and programming languages. I
            have a deep appreciation for clean code, test-driven development,
            and mentorship. I can help you build a product, feature, or a
            website. Look through some of my work and experience! If you have a
            project that needs coding, don&apos;t hesitate to contact me.
          </p>
          <Cta>
            <button type="button" className="first-button">
              <a href="#footer">Let&apos;s talk</a>
            </button>
            <button type="button" className="sec-button">
              <a
                href="https://docs.google.com/document/d/1_XW5wT6ho-XzHCb1fo366HHzvggbovlsMeTn7sbY73c/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Get Resume
              </a>
            </button>
          </Cta>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a
                  href="https://www.linkedin.com/in/kelvinkaviku/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/brainskev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://wellfound.com/u/kelvin-kaviku"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaAngellist />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/kevin_ngotho?s=09/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a
                  href="https://medium.com/@ngotho.kelvin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsMedium />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={profile} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 9rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    border: none;
    a {
      text-decoration: none;
      font-weight: 500;
      position: relative;
    }
  }

  .first-button {
    background-color: #db7093;
    filter: drop-shadow(0px 10px 10px #db709251);
    :hover {
      filter: drop-shadow(0px 10px 10px #db709270);
    }
    a {
      color: #fff;
    }
  }

  .sec-button {
   color: #ffff;
   filter: drop-shadow(0px 10px 10px #444444);
   :hover {
     filter: drop-shadow(0px 10px 10px #666666);
   }
   a {
    color: #db7093;
  }
  }
`;

const Cta = styled.div`
  display: flex;
  gap: 3rem;
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #db7093;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: rem;
    height: 25rem;
    filter: drop-shadow(0px 10px 10px #db709270);
    transition: transform 400ms ease-in-out;
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
