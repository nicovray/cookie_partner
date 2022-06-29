import "./Intro.css";
import React, { useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export default function Intro() {
  const letterDuration = 2.5;
  const svg = useRef(null);
  const paths = svg.current;
  const balls = svg.current;

  gsap.set(paths, {
    drawSVG: "0% 0%",
  });

  gsap.set(balls, {
    scale: 0,
    transformOrigin: "center",
  });

  const ballAnim = gsap.to(balls, {
    scale: 1,
    ease: "back.out(3)",
    stagger: {
      each: 0.3,
      // ease: "sine.inout",
      from: "end",
    },
    duration: letterDuration,
  });

  // Letter

  const letter = gsap
    .timeline({})
    .to("#L2", {
      drawSVG: "100%",
      duration: letterDuration,
      ease: "sine.in",
    })
    .to(
      "#L1",
      {
        drawSVG: "100%",
        duration: letterDuration,
        ease: "sine.out",
      },
      "-=0.02"
    );

  // Flowers and Plants

  function scaleZero(name, origin) {
    gsap.set(name, { scale: 0, transformOrigin: origin });
  }

  // f1

  scaleZero("#f1_f1", "left center");
  scaleZero("#f1_f2", "30% 100%");
  scaleZero("#leaf1", "20% 100%");
  scaleZero("#leaf2", "20% 0%");
  scaleZero("#leaf3", "10% 100%");
  scaleZero("#leaf4", "10% 0%");

  const f1 = gsap
    .timeline({})
    .to(
      "#f1-l",
      {
        drawSVG: "100%",
      },
      "f1"
    )
    .to(
      "#f1-s",
      {
        drawSVG: "100%",
      },
      "-=0.3"
    )
    .to(
      ".leaf1",
      {
        scale: 1,
        stagger: {
          each: 0.2,
        },
      },
      "f1"
    )
    .to(
      "#f1_f1",
      {
        scale: 1,
      },
      "f1+=0.4"
    )
    .to(
      "#f1_f2",
      {
        scale: 1,
      },
      "f1+=0.5"
    );

  // f2

  scaleZero("#f2-f1", "20% 70%");
  scaleZero("#f2-f2", "30% 10%");

  const f2 = gsap
    .timeline({})
    .to(
      "#f2-l",
      {
        drawSVG: "100%",
      },
      "f2"
    )
    .to(
      "#f2-s",
      {
        drawSVG: "100%",
      },
      "-=0.5"
    )
    .to(
      "#f2-f1",
      {
        scale: 1,
      },
      "f2+=0.42"
    )
    .to(
      "#f2-f2",
      {
        scale: 1,
      },
      "f2+=0.35"
    );

  // f3

  scaleZero("#f3-l1", "10% 100%");
  scaleZero("#f3-l2", "100% 35%");

  const f3 = gsap
    .timeline({})
    .to(
      "#f3-l",
      {
        drawSVG: "100%",
      },
      "f3"
    )
    .to(
      "#f3-s",
      {
        drawSVG: "100%",
      },
      "-=0.5"
    )
    .to(
      "#f3-l1",
      {
        scale: 1,
      },
      "f3+=0.4"
    )
    .to(
      "#f3-l2",
      {
        scale: 1,
      },
      "f3+=0.38"
    );

  // f4

  scaleZero("#f4-f1", "100% 50%");

  const f4 = gsap
    .timeline({})
    .to("#f4-l", {
      drawSVG: "100%",
    })
    .to(
      "#f4-f1",
      {
        scale: 1,
      },
      "-=0.1"
    );

  // f5

  scaleZero("#f5-f1", "90% 20%");

  const f5 = gsap
    .timeline({})
    .to("#f5-l", {
      drawSVG: "100%",
    })
    .to(
      "#f5-f1",
      {
        scale: 1,
      },
      "-=0.1"
    );

  // f6

  scaleZero("#f6-l1", "25% 20%");
  scaleZero("#f6-l2", "10% 70%");

  const f6 = gsap
    .timeline({})
    .to(
      "#f6-l",
      {
        drawSVG: "100%",
      },
      "f6"
    )
    .to(
      "#f6-s",
      {
        drawSVG: "100%",
      },
      "-=0.4"
    )
    .to(
      "#f6-l1",
      {
        scale: 1,
      },
      "f6+=0.45"
    )
    .to(
      "#f6-l2",
      {
        scale: 1,
      },
      "f6+=0.4"
    );

  // f7

  scaleZero("#f7-l1", "1% 20%");
  scaleZero("#f7-l2", "30% 90%");
  scaleZero("#f7-l3", "50% 10%");

  const f7 = gsap
    .timeline({})
    .to(
      "#f7-l",
      {
        drawSVG: "100%",
      },
      "f7"
    )
    .to(
      "#f7-m",
      {
        drawSVG: "100%",
      },
      "<-=0.2"
    )
    .to(
      "#f7-s",
      {
        drawSVG: "100%",
      },
      "<-=0.2"
    )
    .to(
      "#f7-l1",
      {
        scale: 1,
      },
      "f7+=0.4"
    )
    .to(
      "#f7-l2",
      {
        scale: 1,
      },
      "f7+=0.43"
    )
    .to(
      "#f7-l3",
      {
        scale: 1,
      },
      "f7+=0.42"
    );

  // f8

  scaleZero("#f8-l1", "50% 10%");
  scaleZero("#f8-l2", "10% 50%");

  const f8 = gsap
    .timeline({})
    .to(
      "#f8-l",
      {
        drawSVG: "100%",
      },
      "f8"
    )
    .to(
      "#f8-s",
      {
        drawSVG: "100%",
      },
      "<-=0.3"
    )
    .to(
      "#f8-l1",
      {
        scale: 1,
      },
      "f8+=0.4"
    )
    .to(
      "#f8-l2",
      {
        scale: 1,
      },
      "f8+=0.43"
    );

  // f9

  scaleZero("#f9-f", "40% 100%");

  const f9 = gsap
    .timeline({})
    .to("#f9-l", {
      drawSVG: "100%",
    })
    .to(
      "#f9-f",
      {
        scale: 1,
      },
      "-=0.1"
    );

  // f10

  scaleZero("#f10-f1", "10% 40%");
  scaleZero("#f10-f2", "20% 20%");

  const f10 = gsap
    .timeline({})
    .to(
      "#f10-l",
      {
        drawSVG: "100%",
      },
      "f10"
    )
    .to(
      "#f10-s",
      {
        drawSVG: "100%",
      },
      "+=0.1"
    )
    .to(
      "#f10-f1",
      {
        scale: 1,
      },
      "f10+=0.4"
    )
    .to(
      "#f10-f2",
      {
        scale: 1,
      },
      "f10+=1"
    );

  // f11

  scaleZero("#f11-l1", "10% 20%");

  const f11 = gsap
    .timeline({})
    .to("#f11-l", {
      drawSVG: "100%",
    })
    .to(
      "#f11-l1",
      {
        scale: 1,
      },
      "-=0.1"
    );

  // f12

  scaleZero("#f12-f1", "80% 0%");
  scaleZero("#f12-f2", "10% 30%");

  scaleZero("#f12-l1", "90% 90%");
  scaleZero("#f12-l2", "30% 10%");

  scaleZero("#f12-l3", "70% 10%");
  scaleZero("#f12-l4", "10% 30%");
  scaleZero("#f12-l5", "90% 10%");

  const f12 = gsap
    .timeline({})
    .to(
      "#f12-l",
      {
        drawSVG: "100%",
      },
      "f12"
    )
    .to(
      "#f12-s",
      {
        drawSVG: "100%",
      },
      "-=0.5"
    )
    .to(
      ".leaf3",
      {
        scale: 1,
        stagger: {
          each: 0.2,
        },
      },
      "f12"
    )
    .to(
      ".leaf2",
      {
        scale: 1,
        stagger: {
          each: 0.2,
        },
      },
      "f12+=0.2"
    )
    .to(
      "#f12-f1",
      {
        scale: 1,
      },
      "f12+=0.4"
    )
    .to(
      "#f12-f2",
      {
        scale: 1,
      },
      "f12+=0.4"
    );

  // f13

  scaleZero("#f13-f1", "20% 80%");

  scaleZero("#f13-l1", "00% 30%");
  scaleZero("#f13-l2", "40% 100%");
  scaleZero("#f13-l3", "00% 60%");
  scaleZero("#f13-l4", "20% 100%");

  const f13 = gsap
    .timeline({})
    .to(
      "#f13-l",
      {
        drawSVG: "100%",
      },
      "f13"
    )
    .to(
      ".leaf4",
      {
        scale: 1,
        stagger: {
          each: 0.2,
        },
      },
      "f13+=0.1"
    )
    .to(
      "#f13-f1",
      {
        scale: 1,
      },
      "f13+=0.4"
    );

  // f14

  scaleZero("#f14-f1", "60% 90%");
  scaleZero("#f14-f2", "20% 100%");
  scaleZero("#f14-f3", "10% 60%");

  const f14 = gsap
    .timeline({})
    .to(
      "#f14-l",
      {
        drawSVG: "100%",
      },
      "f14"
    )
    .to(
      "#f14-m",
      {
        drawSVG: "100%",
      },
      "f14"
    )
    .to(
      "#f14-s",
      {
        drawSVG: "100%",
      },
      "f14"
    )
    .to(
      "#f14-f1",
      {
        scale: 1,
      },
      "f14+=0.45"
    )
    .to(
      "#f14-f2",
      {
        scale: 1,
      },
      "f14+=0.4"
    )
    .to(
      "#f14-f3",
      {
        scale: 1,
      },
      "f14+=0.42"
    );

  // f15

  scaleZero("#f15-f1", "80% 10%");
  scaleZero("#f15-f2", "0% 50%");

  const f15 = gsap
    .timeline({})
    .to(
      "#f15-l",
      {
        drawSVG: "100%",
      },
      "f15"
    )
    .to(
      "#f15-s",
      {
        drawSVG: "100%",
      },
      "-=0.3"
    )
    .to(
      "#f15-f1",
      {
        scale: 1,
      },
      "f15+=0.4"
    )
    .to(
      "#f15-f2",
      {
        scale: 1,
      },
      "f15+=0.6"
    );

  // f16

  scaleZero("#f16-l1", "0% 70%");
  scaleZero("#f16-l2", "0% 40%");

  const f16 = gsap
    .timeline({})
    .to(
      "#f16-l",
      {
        drawSVG: "100%",
      },
      "f16"
    )
    .to(
      "#f16-s",
      {
        drawSVG: "100%",
      },
      "-=0.3"
    )
    .to(
      "#f16-l1",
      {
        scale: 1,
      },
      "f16+=0.4"
    )
    .to(
      "#f16-l2",
      {
        scale: 1,
      },
      "f16+=0.55"
    );

  // f17

  scaleZero("#f17-l1", "90% 20%");

  const f17 = gsap
    .timeline({})
    .to("#f17-l", {
      drawSVG: "100%",
    })
    .to(
      "#f17-l1",
      {
        scale: 1,
      },
      "-=0.1"
    );

  // f18

  scaleZero("#f18-l1", "0% 50%");
  scaleZero("#f18-l2", "90% 70%");

  const f18 = gsap
    .timeline({})
    .to(
      "#f18-l",
      {
        drawSVG: "100%",
      },
      "f18"
    )
    .to(
      "#f18-s",
      {
        drawSVG: "100%",
      },
      "-=0.4"
    )
    .to(
      "#f18-l1",
      {
        scale: 1,
      },
      "f18+=0.48"
    )
    .to(
      "#f18-l2",
      {
        scale: 1,
      },
      "f18+=0.4"
    );

  // f19

  scaleZero("#f19-f1", "20% 30%");
  scaleZero("#f19-f2", "50% 100%");

  const f19 = gsap
    .timeline({})
    .to(
      "#f19-l",
      {
        drawSVG: "100%",
      },
      "f19"
    )
    .to(
      "#f19-s",
      {
        drawSVG: "100%",
      },
      "-=0.2"
    )
    .to(
      "#f19-f1",
      {
        scale: 1,
      },
      "f19+=0.4"
    )
    .to(
      "#f19-f2",
      {
        scale: 1,
      },
      "f19+=0.7"
    );

  // f20

  scaleZero("#f20-f1", "20% 20%");
  scaleZero("#f20-f2", "80% 0%");

  const f20 = gsap
    .timeline({})
    .to(
      "#f20-l",
      {
        drawSVG: "100%",
      },
      "f20"
    )
    .to(
      "#f20-s",
      {
        drawSVG: "100%",
      },
      "-=0.3"
    )
    .to(
      "#f20-f1",
      {
        scale: 1,
      },
      "f20+=0.6"
    )
    .to(
      "#f20-f2",
      {
        scale: 1,
      },
      "f20+=0.4"
    );

  // f21

  scaleZero("#f21-f1", "20% 80%");
  scaleZero("#f21-f2", "20% 10%");

  scaleZero("#f21-l1", "0% 30%");
  scaleZero("#f21-l2", "40% 100%");
  scaleZero("#f21-l3", "00% 60%");
  scaleZero("#f21-l4", "20% 100%");

  const f21 = gsap
    .timeline({})
    .to(
      "#f21-l",
      {
        drawSVG: "100%",
      },
      "f21"
    )
    .to(
      "#f21-s",
      {
        drawSVG: "100%",
      },
      "-=0.3"
    )
    .to(
      ".leaf5",
      {
        scale: 1,
        stagger: {
          each: 0.2,
        },
      },
      "f21"
    )
    .to(
      "#f21-f1",
      {
        scale: 1,
      },
      "f21+=0.4"
    )
    .to(
      "#f21-f2",
      {
        scale: 1,
      },
      "f21+=0.6"
    );

  // f22

  scaleZero("#f22-l1", "10% 80%");
  scaleZero("#f22-l2", "100% 70%");

  const f22 = gsap
    .timeline({})
    .to(
      "#f22-l",
      {
        drawSVG: "100%",
      },
      "f22"
    )
    .to(
      "#f22-s",
      {
        drawSVG: "100%",
      },
      "-=0.3"
    )
    .to(
      "#f22-l1",
      {
        scale: 1,
      },
      "f22+=0.4"
    )
    .to(
      "#f22-l2",
      {
        scale: 1,
      },
      "f22+=0.4"
    );

  // MASTER
  const master1 = gsap
    .timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    })
    .add(letter, "m")
    .add(ballAnim, "m")
    .add(f1, "m+=0.4")
    .add(f2, "m+=0.6")
    .add(f3, "m+=0.75")
    .add(f4, "m+=0.97") // issho
    .add(f5, "m+=1") // issho
    .add(f6, "m+=1.14")
    .add(f7, "m+=1.36")
    .add(f8, "m+=1.6")
    .add(f9, "m+=1.72")
    .add(f10, "m+=1.87")
    .add(f11, "m+=1.94")
    .add(f12, "m+=2.15")
    .add(f13, "m+=2.268")
    .add(f14, "m+=2.36")
    .add(f15, "m+=2.63")
    .add(f16, "m+=2.93")
    .add(f17, "m+=3.25")
    .add(f18, "m+=3.42")
    .add(f19, "m+=3.98")
    .add(f20, "m+=4")
    .add(f21, "m+=4.43")
    .add(f22, "m+=4.57");

  return (
    <div ref={svg} className="box">
      <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
        <g id="bg">
          <path fill="#fff4e9" d="M0 0h800v600H0z" />
        </g>
        <g
          id="letter"
          fill="none"
          stroke="#5b8f86"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path
            id="L2"
            d="M200 295c35-12 67-62 51-94-5-12-26 27-30 36-22 45-34 95-28 145 1-27 15-101 50-85 8 4 8 12 8 19 1 22-23 81-36 62-18-25 122-91 115-175-6-25-26 37-30 48-8 36-36 112 5 122 22 5 98-111 77-120-29-8-43 37-36 76 4 22 21 23 31 15a103 103 0 0037-75c0-17-18-20-23-1-15 59 29 27 48 1"
          />
          <path
            id="L1"
            d="M454 258c-11 5-19 13-25 28-5 17-12 60 12 64 27-2 42-56 32-78-2-4-8-4-12-2-11 8-10 38 5 41 16 3 24-16 34-26 8 8-6 41-8 52a414 414 0 0120-41c12-21 31-33 34-30 5 3-6 30-10 44 12-18 22-33 41-38 5-2 8 1 6 6-5 19-33 93-14 98 17 4 44-48 54-64"
          />
        </g>
        <g id="bloom">
          <g id="balls" fill="#f89726">
            <circle id="e13" cx="597.9" cy="342.9" r="2.4" />
            <circle id="e12" cx="553.6" cy="352.6" r="2.4" />
            <circle id="e11" cx="566.3" cy="303.4" r="2.4" />
            <circle id="e10" cx="527.8" cy="284.2" r="2.4" />
            <circle id="e9" cx="488.7" cy="313.7" r="2.4" />
            <circle id="e8" cx="435.4" cy="290.3" r="2.4" />
            <circle id="e7" cx="395.8" cy="241.9" r="2.4" />
            <circle id="e6" cx="382.9" cy="321.3" r="2.4" />
            <circle id="e5" cx="332.3" cy="368.6" r="2.4" />
            <circle id="e4" cx="293.4" cy="317.4" r="2.4" />
            <circle id="e3" cx="229.4" cy="367.5" r="2.4" />
            <circle id="e2" cx="196.2" cy="276.3" r="2.4" />
            <circle id="e1" cx="256.6" cy="250.7" r="2.4" />
          </g>

          <g id="f22">
            <path
              id="f22-l"
              d="M610 333a10 10 0 002-7 7 7 0 00-4-6 4 4 0 00-2 0 4 4 0 00-2 1c-2 2-2 5-3 8a17 17 0 01-17 10"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f22-s"
              d="M600 330a9 9 0 01-8 3 9 9 0 01-4-2 9 9 0 01-3-4 5 5 0 011-4 3 3 0 014-1 3 3 0 011 4 1 1 0 01-2 0 2 2 0 010 0 8 8 0 013-14"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f22-l2"
              d="M579 343s5 1 6-3 0-5-2-6c-4-1-9 2-9 2s1 5 5 7z"
              fill="#5b8f86"
            />
            <path
              id="f22-l1"
              d="M598 303a8 8 0 00-7 5 5 5 0 002 6c7 6 13-8 13-8a10 10 0 00-8-3z"
              fill="#5b8f86"
            />
          </g>

          <g id="f21">
            <path
              id="f21-l"
              d="M597 353c6-7 14-10 22-13s16-5 23-9"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f21-s"
              d="M598 352a25 25 0 016-2 9 9 0 013-1c5 1 8 7 12 8"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              className="leaf5"
              id="f21-l4"
              d="M619 340a7 7 0 01-4 2 6 6 0 015-7 7 7 0 01-1 5z"
              fill="#5b8f86"
            />

            <path
              className="leaf5"
              id="f21-l3"
              d="M619 344a7 7 0 01-4-2 6 6 0 018 2 7 7 0 01-4 0z"
              fill="#5b8f86"
            />
            <path
              className="leaf5"
              id="f21-l2"
              d="M634 334a7 7 0 01-4 2 6 6 0 015-7 7 7 0 01-1 5z"
              fill="#5b8f86"
            />
            <path
              className="leaf5"
              id="f21-l1"
              d="M634 339a7 7 0 01-4-2 6 6 0 018 2 7 7 0 01-4 0z"
              fill="#5b8f86"
            />
            <g id="f21-f2">
              <path d="M619 364l5 1s1-4-1-6-5-1-5-1-1 4 1 6z" fill="#ff9975" />
              <path d="M620 362c2 2 6 1 6 1s1-4-1-5l-5-1v5z" fill="#ff6d3a" />
              <path
                d="M622 355a7 7 0 014 3 6 6 0 01-8-2 7 7 0 014-1z"
                fill="#5b8f86"
              />
              <path
                d="M617 360a7 7 0 002 4 6 6 0 00-1-8 7 7 0 00-1 4z"
                fill="#5b8f86"
              />
            </g>

            <g id="f21-f1">
              <path d="M649 331l1-6s-4-1-6 1-1 5-1 5 4 1 6 0z" fill="#ff9975" />
              <path d="M648 329v-5h-5c-2 1-1 6-1 6s4 1 6-1z" fill="#ff6d3a" />
              <path
                d="M640 327a7 7 0 013-3 6 6 0 01-2 8 7 7 0 01-1-5z"
                fill="#5b8f86"
              />
              <path
                d="M645 333a7 7 0 004-3 6 6 0 00-8 2 7 7 0 004 1z"
                fill="#5b8f86"
              />
            </g>
          </g>

          <g id="f20">
            <path
              id="f20-l"
              d="M573 311c-1-1-3 0-4 1-6 5-10 12-14 18s-9 14-17 17"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f20-s"
              d="M551 336l-3 12c-1 4-3 8 0 12"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <g id="f20-f2">
              <path
                d="M535 350a7 7 0 01-5 0 6 6 0 018-3 7 7 0 01-3 3z"
                fill="#96cbbf"
              />
              <path
                d="M537 352a7 7 0 01-3 2 6 6 0 014-7 7 7 0 01-1 5z"
                fill="#96cbbf"
              />
              <path
                d="M540 351a7 7 0 01-2 4 6 6 0 010-8 7 7 0 012 4z"
                fill="#96cbbf"
              />
            </g>

            <g id="f20-f1">
              <path
                d="M550 363a7 7 0 01-1 5 6 6 0 01-1-9 7 7 0 012 4z"
                fill="#96cbbf"
              />
              <path
                d="M552 361a7 7 0 012 4 6 6 0 01-6-6 7 7 0 014 2z"
                fill="#96cbbf"
              />
              <path
                d="M552 358a7 7 0 014 3 7 7 0 01-5 1 7 7 0 01-3-3 7 7 0 014-1z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f19">
            <path
              id="f19-s"
              d="M583 273c3-3 5-8 4-12"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f19-l"
              d="M583 273a22 22 0 0120 5"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <g id="f19-f2">
              <path
                d="M587 257a7 7 0 013-3 6 6 0 01-3 8 7 7 0 010-5z"
                fill="#96cbbf"
              />
              <path
                d="M584 258a7 7 0 011-4 6 6 0 012 8 7 7 0 01-3-4z"
                fill="#96cbbf"
              />
              <path
                d="M582 260a7 7 0 01-1-4 6 6 0 016 6 7 7 0 01-5-2z"
                fill="#96cbbf"
              />
            </g>

            <g id="f19-f1">
              <path
                d="M605 280a7 7 0 01-2 4 6 6 0 01-1-8 7 7 0 013 4z"
                fill="#96cbbf"
              />
              <path
                d="M606 277a7 7 0 012 5 6 6 0 01-6-6 7 7 0 014 1z"
                fill="#96cbbf"
              />
              <path
                d="M607 275a7 7 0 013 2 7 7 0 01-4 1 7 7 0 01-4-2 7 7 0 015-1z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f18">
            <path
              id="f18-l"
              d="M524 280c8-8 9-23 3-33"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f18-s"
              d="M531 264c1-8 7-16 14-18"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f18-l2"
              d="M525 240s4 2 3 6-4 4-5 3c-4-2-6-8-6-8s4-3 8-1z"
              fill="#5b8f86"
            />
            <path
              id="f18-l1"
              d="M556 241a8 8 0 00-8 1 5 5 0 00-2 7c4 9 16-1 16-1a11 11 0 00-6-7z"
              fill="#5b8f86"
            />
          </g>

          <g id="f17">
            <path
              id="f17-l"
              d="M496 321a10 10 0 00-7 3 29 29 0 00-5 7 17 17 0 00-3 15l2 2a4 4 0 002 0 5 5 0 002-3 2 2 0 00-1-2 3 3 0 00-1 0c-6 1-10 6-13 11"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f17-l1"
              d="M471 361s4-3 2-7-4-3-6-2c-3 3-3 9-3 9s4 2 7 0z"
              fill="#5b8f86"
            />
          </g>

          <g id="f16">
            <path
              id="f16-l"
              d="M469 269a5 5 0 00-9 1l2 6a15 15 0 007 5 18 18 0 0011-1 53 53 0 0011-5"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f16-s"
              d="M469 269c0-6 7-8 12-8"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f16-l2"
              d="M489 260s-4-3-7-1-2 5-1 6c4 3 9 2 9 2s2-4-1-7z"
              fill="#5b8f86"
            />
            <path
              id="f16-l1"
              d="M496 267a8 8 0 00-7 5c-1 2-1 5 2 7 8 6 14-8 14-8a10 10 0 00-9-4z"
              fill="#5b8f86"
            />
          </g>

          <g id="f15">
            <path
              id="f15-l"
              d="M424 312a2 2 0 012 0 4 4 0 012 1c1 3 2 5 1 8s-4 4-6 5a36 36 0 00-15 17"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f15-s"
              d="M425 311c3-1 6 0 9 1s7 2 10 1"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <g id="f15-f2">
              <path
                d="M447 314a7 7 0 014 3 6 6 0 01-8-3 7 7 0 014 0z"
                fill="#96cbbf"
              />
              <path
                d="M446 311a7 7 0 015 1 6 6 0 01-8 2 7 7 0 013-3z"
                fill="#96cbbf"
              />
              <path
                d="M444 309a7 7 0 014-2 6 6 0 01-5 7 7 7 0 011-5z"
                fill="#96cbbf"
              />
            </g>

            <g id="f15-f1">
              <path
                d="M405 344a7 7 0 01-4 0 6 6 0 017-3 7 7 0 01-3 3z"
                fill="#96cbbf"
              />
              <path
                d="M408 346a7 7 0 01-4 2 6 6 0 014-7 7 7 0 010 5z"
                fill="#96cbbf"
              />
              <path
                d="M410 345a7 7 0 01-1 4 6 6 0 01-1-8 7 7 0 012 4z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f14">
            <path
              id="f14-m"
              d="M411 259a9 9 0 005-2 25 25 0 007-27"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f14-s"
              d="M411 259h7l8 2a13 13 0 008-4 22 22 0 005-7"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f14-l"
              d="M411 259c-3-1-5 2-7 5v5c1 2 4 2 6 1 9-2 12-12 20-17"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />

            <g id="f14-f3">
              <path
                d="M443 250a7 7 0 014 2 6 6 0 01-9 0 7 7 0 015-2z"
                fill="#96cbbf"
              />
              <path
                d="M441 248a7 7 0 014-1 6 6 0 01-7 5 7 7 0 013-4z"
                fill="#96cbbf"
              />
              <path
                d="M438 247a7 7 0 013-3 6 6 0 01-3 8 7 7 0 010-5z"
                fill="#96cbbf"
              />
            </g>
            <g id="f14-f2">
              <path
                d="M431 252a5 5 0 013 1 4 4 0 01-6 2 5 5 0 013-3z"
                fill="#96cbbf"
              />
              <path
                d="M429 251a5 5 0 013-1 4 4 0 01-4 5 5 5 0 011-4z"
                fill="#96cbbf"
              />
              <path
                d="M427 252a5 5 0 011-3 4 4 0 010 6 5 5 0 01-1-3z"
                fill="#96cbbf"
              />
            </g>
            <g id="f14-f1">
              <path
                d="M423 228a5 5 0 011-3 4 4 0 010 6 5 5 0 01-1-3z"
                fill="#96cbbf"
              />
              <path
                d="M421 229a5 5 0 01-1-4 4 4 0 014 6 5 5 0 01-3-2z"
                fill="#96cbbf"
              />
              <path
                d="M420 231a5 5 0 01-2-3 4 4 0 016 3 5 5 0 01-4 0z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f13">
            <path
              id="f13-l"
              d="M390 331c2-4 6-7 10-9s9-3 11-7"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              className="leaf4"
              id="f13-l4"
              d="M398 323a7 7 0 01-4 3 6 6 0 015-7 7 7 0 01-1 4z"
              fill="#5b8f86"
            />
            <path
              className="leaf4"
              id="f13-l3"
              d="M398 329a7 7 0 01-4-3 6 6 0 018 2 7 7 0 01-4 1z"
              fill="#5b8f86"
            />
            <path
              className="leaf4"
              id="f13-l2"
              d="M407 316a7 7 0 01-2 4 6 6 0 010-8 7 7 0 012 4z"
              fill="#5b8f86"
            />
            <path
              className="leaf4"
              id="f13-l1"
              d="M408 323a7 7 0 01-3-3 6 6 0 018 2 7 7 0 01-5 1z"
              fill="#5b8f86"
            />

            <g id="f13-f1">
              <path d="M418 316c2-2 1-5 1-5s-4-1-5 0l-1 5h5z" fill="#ff9975" />
              <path
                d="M417 314c2-1 1-5 1-5s-4-1-6 0 0 6 0 6 3 1 5-1z"
                fill="#ff6d3a"
              />
              <path
                d="M410 312a7 7 0 013-3 6 6 0 01-3 8 7 7 0 010-5z"
                fill="#5b8f86"
              />
              <path
                d="M415 318a7 7 0 003-3 6 6 0 00-8 2 7 7 0 005 1z"
                fill="#5b8f86"
              />
            </g>
          </g>

          <g id="f12">
            <path
              id="f12-l"
              d="M358 259a9 9 0 00-10 1 13 13 0 00-4 9 17 17 0 007 14"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f12-s"
              d="M358 259a6 6 0 011-5 10 10 0 015-4 8 8 0 015 0 4 4 0 013 4"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              className="leaf3"
              id="f12-l5"
              d="M343 266a7 7 0 01-4 1 6 6 0 017-4 7 7 0 01-3 3z"
              fill="#5b8f86"
            />
            <path
              className="leaf3"
              id="f12-l4"
              d="M346 267a7 7 0 010-4 6 6 0 014 7 7 7 0 01-4-3z"
              fill="#5b8f86"
            />
            <path
              className="leaf3"
              id="f12-l3"
              d="M345 280a7 7 0 01-4 3 6 6 0 015-7 7 7 0 01-1 4z"
              fill="#5b8f86"
            />
            <path
              className="leaf2"
              id="f12-l2"
              d="M363 256a7 7 0 01-5-2 6 6 0 019 0 7 7 0 01-4 2z"
              fill="#5b8f86"
            />
            <path
              className="leaf2"
              id="f12-l1"
              d="M355 251a7 7 0 01-1-4 6 6 0 015 7 7 7 0 01-4-3z"
              fill="#5b8f86"
            />

            <g id="f12-f2">
              <path
                d="M351 289c2 2 5 1 5 1s1-3 0-5-6-1-6-1-1 4 1 5z"
                fill="#ff9975"
              />
              <path d="M352 288c2 2 6 1 6 1s1-4 0-5l-6-1v5z" fill="#ff6d3a" />
              <path
                d="M354 281a7 7 0 014 3 6 6 0 01-8-2 7 7 0 014-1z"
                fill="#5b8f86"
              />
              <path
                d="M349 286a7 7 0 003 4 6 6 0 00-2-8 7 7 0 00-1 4z"
                fill="#5b8f86"
              />
            </g>
            <g id="f12-f1">
              <path d="M368 257v3s2 0 3-2 0-3 0-3l-3 2z" fill="#ff9975" />
              <path d="M369 257v4s3 0 4-2-1-3-1-3l-3 1z" fill="#ff6d3a" />
              <path
                d="M373 257a5 5 0 01-1 3 4 4 0 010-6 5 5 0 011 3z"
                fill="#5b8f86"
              />
              <path
                d="M369 255a5 5 0 00-2 2 4 4 0 005-3 5 5 0 00-3 1z"
                fill="#5b8f86"
              />
            </g>
          </g>

          <g id="f11">
            <path
              id="f11-l"
              d="M318 369c4-5 10-9 16-11s13-2 18 1"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f11-l1"
              d="M358 358s-4-3-7-1-2 5-1 7c3 2 9 2 9 2s2-5-1-8z"
              fill="#5b8f86"
            />
          </g>

          <g id="f10">
            <path
              id="f10-s"
              d="M283 328a25 25 0 0011 21"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f10-l"
              d="M284 328a21 21 0 0016 9"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />

            <g id="f10-f2">
              <path
                d="M296 352a6 6 0 01-2 4 5 5 0 010-7 6 6 0 012 3z"
                fill="#96cbbf"
              />
              <path
                d="M298 351a6 6 0 010 3 5 5 0 01-4-5 6 6 0 014 2z"
                fill="#96cbbf"
              />
              <path
                d="M298 348a6 6 0 013 3 6 6 0 01-4 0 6 6 0 01-3-2 6 6 0 014-1z"
                fill="#96cbbf"
              />
            </g>
            <g id="f10-f1">
              <path
                d="M304 339a7 7 0 012 4 6 6 0 01-6-6 7 7 0 014 2z"
                fill="#96cbbf"
              />
              <path
                d="M305 336a7 7 0 013 3 7 7 0 01-4 0 7 7 0 01-4-3 7 7 0 015 0z"
                fill="#96cbbf"
              />
              <path
                d="M303 333a7 7 0 015 1 6 6 0 01-8 3 7 7 0 013-4z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f9">
            <path
              id="f9-l"
              d="M315 212c-3 0-4 3-7 4-2 1-5-2-6-5a12 12 0 010-9c1-2 2-7 6-7l1 1c0 3 0 9-4 9a3 3 0 01-3-1 14 14 0 01-3-10 38 38 0 012-11"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <g id="f9-f">
              <path
                d="M305 180c1-3-2-5-2-5s-4 2-4 4 3 5 3 5 3-2 3-4z"
                fill="#ff9975"
              />
              <path
                d="M304 179c0-2-3-4-3-4s-4 1-4 4 3 4 3 4 3-1 4-4z"
                fill="#ff6d3a"
              />
              <path
                d="M297 183a7 7 0 010-5 6 6 0 013 8 7 7 0 01-3-3z"
                fill="#5b8f86"
              />
              <path
                d="M304 183a7 7 0 001-4 6 6 0 00-5 7 7 7 0 004-3z"
                fill="#5b8f86"
              />
            </g>
          </g>

          <g id="f8">
            <path
              id="f8-s"
              d="M310 266c6-3 12-7 19-7"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f8-l"
              d="M310 266h3a5 5 0 012 3c3 6 1 13-1 19"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f8-l2"
              d="M338 254c-1 0-7-3-14 5a8 8 0 0010 6c7-2 10-6 10-6s-2-4-6-5z"
              fill="#5b8f86"
            />
            <path
              id="f8-l1"
              d="M317 294s1-5-2-6-5-1-6 1c-1 4 2 10 2 10s5-1 6-5z"
              fill="#5b8f86"
            />
          </g>

          <g id="f7">
            <path
              id="f7-l"
              d="M238 363c6-4 12-12 15-19"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f7-m"
              d="M238 363c9-4 15-7 24-3"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f7-s"
              d="M238 363a6 6 0 014 1c3 2 4 3 5 7"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f7-l3"
              d="M252 379s1-6-3-8-7-1-7 2c-2 5 2 12 2 12s6-1 8-6z"
              fill="#5b8f86"
            />
            <path
              id="f7-l2"
              d="M258 345s-3 4-6 3-4-3-3-5c2-4 7-5 7-5s4 3 2 7z"
              fill="#5b8f86"
            />
            <path
              id="f7-l1"
              d="M272 357a8 8 0 00-8 1 5 5 0 00-2 7c4 9 16 0 16 0a11 11 0 00-6-8z"
              fill="#5b8f86"
            />
          </g>

          <g id="f6">
            <path
              id="f6-l"
              d="M200 337a35 35 0 0122-18"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f6-s"
              d="M200 337a6 6 0 013-2c4-1 6-2 9 0"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f6-l2"
              d="M224 311s-6 2-4 7 6 6 9 5c6-2 8-10 8-10s-6-5-13-2z"
              fill="#5b8f86"
            />
            <path
              id="f6-l1"
              d="M221 337s-3-5-8-3-5 4-4 6c3 5 10 7 10 7s4-5 2-10z"
              fill="#5b8f86"
            />
          </g>

          <g id="f5">
            <path
              id="f5-l"
              d="M193 330c2 0 3 2 4 4a9 9 0 01-2 5c-6 8-15 12-24 16"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <g id="f5-f1">
              <path
                d="M169 357a7 7 0 01-4-3 6 6 0 018 1 7 7 0 01-4 2z"
                fill="#96cbbf"
              />
              <path
                d="M170 359a7 7 0 01-4 1 6 6 0 017-5 7 7 0 01-3 4z"
                fill="#96cbbf"
              />
              <path
                d="M173 360a7 7 0 01-4 3 6 6 0 014-8 7 7 0 010 5z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f4">
            <path
              id="f4-l"
              d="M195 322a16 16 0 004-9 5 5 0 000-2 2 2 0 00-2-2 3 3 0 00-1 0c-4 3-6 6-7 10l-5 11c-2 3-6 6-10 6"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <g id="f4-f1">
              <path
                d="M170 335a7 7 0 01-3-4 6 6 0 017 4 7 7 0 01-4 0z"
                fill="#96cbbf"
              />
              <path
                d="M170 338a7 7 0 01-4-2 6 6 0 018-1 7 7 0 01-4 3z"
                fill="#96cbbf"
              />
              <path
                d="M172 339a7 7 0 01-4 2 6 6 0 016-6 7 7 0 01-2 4z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f3">
            <path
              id="f3-l"
              d="M223 233c1-7-3-13-9-17a16 16 0 00-12-1"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f3-s"
              d="M222 227c-3-10 0-19 4-27"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f3-l2"
              d="M196 211c-1 0-7 0-12 9a8 8 0 0011 3c6-4 8-8 8-8s-3-4-7-4z"
              fill="#5b8f86"
            />
            <path
              id="f3-l1"
              d="M225 190s-5 14 7 10 7-17 7-17-11 0-14 7z"
              fill="#5b8f86"
            />
          </g>

          <g id="f2">
            <path
              id="f2-l"
              d="M255 227a53 53 0 0018-15"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f2-s"
              d="M255 227c4-2 10-1 12 2"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <g id="f2-f2">
              <path
                d="M269 233a7 7 0 01-2 4 6 6 0 010-8 7 7 0 012 4z"
                fill="#96cbbf"
              />
              <path
                d="M271 231a7 7 0 011 5 6 6 0 01-5-7 7 7 0 014 2z"
                fill="#96cbbf"
              />
              <path
                d="M272 228a7 7 0 013 4 6 6 0 01-8-3 7 7 0 015-1z"
                fill="#96cbbf"
              />
            </g>
            <g id="f2-f1">
              <path
                d="M276 211a7 7 0 015 2 6 6 0 01-9 0 7 7 0 014-2z"
                fill="#96cbbf"
              />
              <path
                d="M274 209a7 7 0 015-1 6 6 0 01-7 5 7 7 0 012-4z"
                fill="#96cbbf"
              />
              <path
                d="M272 208a7 7 0 013-3 6 6 0 01-3 8 7 7 0 010-5z"
                fill="#96cbbf"
              />
            </g>
          </g>

          <g id="f1">
            <path
              id="f1-l"
              d="M237 267a35 35 0 0113-7 19 19 0 0113 1l9 6c3 2 6 3 9 2"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              id="f1-s"
              d="M267 263c4 1 7-1 10-3a17 17 0 005-6"
              fill="none"
              stroke="#5b8f86"
              strokeMiterlimit="10"
              strokeWidth=".8"
            />
            <path
              className="leaf1"
              id="leaf4"
              data-name="&lt;Path&gt;"
              d="M250 265a7 7 0 01-2-5 6 6 0 016 6 7 7 0 01-4-1z"
              fill="#5b8f86"
            />
            <path
              className="leaf1"
              id="leaf3"
              data-name="&lt;Path&gt;"
              d="M252 258a7 7 0 01-4 2 6 6 0 016-6 7 7 0 01-2 4z"
              fill="#5b8f86"
            />
            <path
              className="leaf1"
              id="leaf2"
              d="M261 264a7 7 0 01-1-4 6 6 0 015 7 7 7 0 01-4-3z"
              fill="#5b8f86"
            />
            <path
              className="leaf1"
              id="leaf1"
              data-name="&lt;Path&gt;"
              d="M265 259a7 7 0 01-5 1 6 6 0 018-4 7 7 0 01-3 3z"
              fill="#5b8f86"
            />
            <g id="f1_f2">
              <path
                d="M288 251c1-2-1-5-1-5s-3 0-4 2 0 5 0 5 4 0 5-2z"
                fill="#ff9975"
              />
              <path
                d="M287 250c1-2-1-5-1-5s-4 0-5 2 0 5 0 5 4 0 6-2z"
                fill="#ff6d3a"
              />
              <path
                d="M279 251a7 7 0 012-5 6 6 0 010 9 7 7 0 01-2-4z"
                fill="#5b8f86"
              />
              <path
                d="M285 254a7 7 0 003-3 6 6 0 00-7 4 7 7 0 004-1z"
                fill="#5b8f86"
              />
            </g>
            <g id="f1_f1">
              <path
                d="M286 274c2 0 4-3 4-3s-2-3-4-3-4 3-4 3 2 3 4 3z"
                fill="#ff9975"
              />
              <path
                d="M286 272c3 0 5-3 5-3s-2-4-5-4-4 4-4 4 2 3 4 3z"
                fill="#ff6d3a"
              />
              <path
                d="M282 266a7 7 0 015-1 6 6 0 01-8 4 7 7 0 013-3z"
                fill="#5b8f86"
              />
              <path
                d="M282 273a7 7 0 005 1 6 6 0 00-8-5 7 7 0 003 4z"
                fill="#5b8f86"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
