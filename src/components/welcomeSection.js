import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import anime from "animejs";
import Particles from 'react-particles-js';
import Loop from '../icons/loop.svg'
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { TextPlugin } from "gsap/TextPlugin.js";
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollToPlugin, TextPlugin);
class WelcomeSection extends React.Component {

  componentDidMount(){
    let t1 = gsap.timeline();
    t1.to("#centered", {rotation: 27, x: 100, duration: 1})
    .to("#centered", {rotation: -27, x: -100, duration: 1},0.4)
    .to("#centered", {rotation: 0, x: 0, duration: 1},0.9);
  }

  render() {

    return(
    <>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 90,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "rgb(182, 25, 36)"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "rgb(182, 25, 36)"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 4,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.4,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#f16e6ede",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 100,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />

      <div id="centered">
        <span id="mainText">Esperanza - Hope</span>
      </div>
    </>

    );
  }
}

export default WelcomeSection;
