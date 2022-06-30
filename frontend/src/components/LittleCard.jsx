/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./LittleCard.css";
import projet1 from "@assets/visuelProjet1.jpg";
import projet2 from "@assets/visuelProjet2.jpg";
import projet3 from "@assets/visuelProjet3.jpg";
import projet4 from "@assets/visuelProjet4.jpg";
import persona1 from "@assets/persona1.jpg";
import persona2 from "@assets/persona2.jpg";
import persona3 from "@assets/persona3.jpg";
import persona4 from "@assets/persona4.jpg";
import persona5 from "@assets/persona5.jpg";
import star from "@assets/star-pleine.png";
import starvide from "@assets/star-vide.png";
import avancement1 from "@assets/avancement.png";
import avancement2 from "@assets/avancement2.png";
import avancement3 from "@assets/avancement3.png";
import avancement4 from "@assets/avancement4.png";

export default function Test() {
  const [starButton1, setStarButton1] = useState(false);
  const handleClick1 = (e) => {
    e.preventDefault();
    setStarButton1(!starButton1);
  };
  const [starButton2, setStarButton2] = useState(false);
  const handleClick2 = (e) => {
    e.preventDefault();
    setStarButton2(!starButton2);
  };
  const [starButton3, setStarButton3] = useState(false);
  const handleClick3 = (e) => {
    e.preventDefault();
    setStarButton3(!starButton3);
  };

  const [starButton4, setStarButton4] = useState(false);
  const handleClick4 = (e) => {
    e.preventDefault();
    setStarButton4(!starButton4);
  };
  const [starButton5, setStarButton5] = useState(false);
  const handleClick5 = (e) => {
    e.preventDefault();
    setStarButton5(!starButton5);
  };
  const [starButton6, setStarButton6] = useState(false);
  const handleClick6 = (e) => {
    e.preventDefault();
    setStarButton6(!starButton6);
  };
  const [starButton7, setStarButton7] = useState(false);
  const handleClick7 = (e) => {
    e.preventDefault();
    setStarButton7(!starButton7);
  };
  return (
    <ul className="cards">
      <li>
        <a href="t" className="card">
          <img src={projet1} className="card__image" alt="" />
          <input
            type="image"
            alt=""
            src={starButton1 ? star : starvide}
            onClick={handleClick1}
            className="star"
          />
          <div className="card__overlay1">
            <div className="card__header1">
              <img alt="" className="projectAvancement" src={avancement1} />
              <svg className="card__arc1" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={persona1} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">Name of the idea</h3>
                <span className="card__status">Jessica Parker</span>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis?
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="t" className="card">
          <img src={projet2} className="card__image" alt="" />
          <input
            type="image"
            alt=""
            src={starButton2 ? star : starvide}
            onClick={handleClick2}
            className="star"
          />
          <div className="card__overlay">
            <div className="card__header">
              <img alt="" className="projectAvancement" src={avancement3} />
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={persona5} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">Project name</h3>
                <span className="card__status">Anaïs Leroux</span>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditii sipselit ...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="t" className="card">
          <img src={projet3} className="card__image" alt="" />
          <input
            type="image"
            alt=""
            src={starButton3 ? star : starvide}
            onClick={handleClick3}
            className="star"
          />
          <div className="card__overlay">
            <div className="card__header">
              <img alt="" className="projectAvancement4" src={avancement4} />
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={persona2} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">Project name</h3>
                {/* <span className="card__tagline">
                  Lorem ipsum dolor sit amet
                  consectetureeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                </span> */}
                <span className="card__status">Johanna Prier</span>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis ...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="t" className="card">
          <img src={projet4} className="card__image" alt="" />
          <input
            type="image"
            alt=""
            src={starButton4 ? star : starvide}
            onClick={handleClick4}
            className="star"
          />
          <div className="card__overlay">
            <div className="card__header">
              <img alt="" className="projectAvancement" src={avancement3} />
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://i.imgur.com/7D7I6dI.png"
                alt=""
              />
              <div className="card__header-text">
                <h3 className="card__title">Name Project</h3>
                <span className="card__status">Kim Sayer</span>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis ...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="t" className="card">
          <img src={projet1} className="card__image" alt="" />
          <input
            type="image"
            alt=""
            src={starButton5 ? star : starvide}
            onClick={handleClick5}
            className="star"
          />
          <div className="card__overlay1">
            <div className="card__header1">
              <img alt="" className="projectAvancement" src={avancement1} />
              <svg className="card__arc1" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={persona3} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">Name of the idea</h3>
                <span className="card__status">Alain Renaud</span>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis?
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="t" className="card">
          <img src={projet4} className="card__image" alt="" />
          <input
            type="image"
            alt=""
            src={starButton6 ? star : starvide}
            onClick={handleClick6}
            className="star"
          />
          <div className="card__overlay">
            <div className="card__header">
              <img alt="" className="projectAvancement" src={avancement2} />
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={persona4} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">Project Name</h3>
                <span className="card__status">Joao Costa</span>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis ...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="t" className="card">
          <img src={projet3} className="card__image" alt="" />
          <input
            type="image"
            alt=""
            src={starButton7 ? star : starvide}
            onClick={handleClick7}
            className="star"
          />
          <div className="card__overlay">
            <div className="card__header">
              <img alt="" className="projectAvancement" src={avancement1} />
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={persona5} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">Project Name</h3>
                {/* <span className="card__tagline">
                  Lorem ipsum dolor sit amet
                </span> */}
                <span className="card__status">Elise Lebrun</span>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis ...
            </p>
          </div>
        </a>
      </li>
    </ul>
  );
}
