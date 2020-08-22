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
const NUMBER_OF_NODES =70;
const TRIGGER_THRESHOLD = 60;
const triggered = [];
let analyserNode = null
const data = new Uint8Array(NUMBER_OF_NODES * 4);
let audioCtx = null;

class Intro extends React.Component {

  constructor(props){
    super(props)
    this.canvas = React.createRef();
  }

  updateData = ()=>{
    if(this.canvas){
      try {
        requestAnimationFrame(this.updateData);
        analyserNode.getByteFrequencyData(data);
        const canvas = this.canvas.current;
        let ctx = canvas.getContext("2d");

        let width = (canvas.width = document.body.clientWidth);
        let height = (canvas.height = document.body.clientHeight);


        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width/8, canvas.height);
        ctx.globalAlpha = .9;

        //ctx.globalCompositeOperation = 'screen';

        if (data) {
          let w = height / NUMBER_OF_NODES;
          let halfHeight = height / 2;

          ctx.beginPath();
          ctx.moveTo(0, 0);

          for (var i = 0; i < NUMBER_OF_NODES; i += 1) {
            let x1 = i * w;
            let y1 = width/8 * (data[i] / 255);
            let x2 = (i + 1) * w;
            let y2 = width/8 * (data[i + 1] / 255);

            ctx.quadraticCurveTo(y1, x1, y2, x2);
          }
          ctx.lineTo(0, height);
          ctx.closePath();

          ctx.fillStyle = "#FD12EA";
          ctx.strokeStyle = "#FD12EA";
          ctx.lineWidth = 10;

          ctx.globalAlpha = 0.5;
          ctx.fill();
          ctx.globalAlpha = 0.2;
          ctx.stroke();

          /* ---------------------------------- */

          ctx.beginPath();
          ctx.moveTo(width, height);

          for (var i = 0; i < NUMBER_OF_NODES; i += 1) {
            let x1 = height - i * w;
            let y1 = width - width/8 * (data[i] / 255);
            let x2 = height - (i + 1) * w
            let y2 = width - width/8 * (data[i + 1] / 255);

            ctx.quadraticCurveTo(y1, x1, y2, x2);
          }
          ctx.lineTo(width, 0);
          ctx.closePath();

          ctx.fillStyle = "#FD9413";
          ctx.strokeStyle = "#FD9413";
          ctx.lineWidth = 10;

          ctx.globalAlpha = 0.5;
          ctx.fill();
          ctx.globalAlpha = 0.2;
          ctx.stroke();
        }
      } catch (e) {
        cancelAnimationFrame(this.canvas.current);
      }
    }else{
      cancelAnimationFrame(this.canvas.current);
    }

  }
  startStream=()=> {
    return navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => audioCtx.createMediaStreamSource(stream))
      .then((source) => {
        source.connect(analyserNode);
      })
      .then(this.updateData());
  }

  componentDidMount(){

    audioCtx = new AudioContext();
    analyserNode= new AnalyserNode(audioCtx, {
      fftSize: 256, //2 ** 8,
      maxDecibels: -20,
      minDecibels: -80,
      smoothingTimeConstant: 0.8
    });
    this.startStream();


  }
  componentWillUnmount(){
    cancelAnimationFrame(this.canvas.current);
  }

  render() {

    return(
    <Container className="introContainer" fluid={true} >
        <a id="centered" className="clickMe" style={{color:"white"}} onClick={()=>{
          audioCtx.resume()
          this.startStream()
          document.getElementById('audio').play()
          document.getElementById('stop').style.display="block"
          document.getElementById('centered').style.display = "none"
        }}>Presioname...</a>
        <a id="stop" className="clickMe" style={{display:"none"}} onClick={()=>{
          audioCtx.suspend()
          document.getElementById('audio').pause()
          document.getElementById('stop').style.display="none"
          document.getElementById('centered').style.display = "block"
        }}>Apagar...</a>
        <audio id="audio"  className="player" autoPlay>
          <source src="./camilo.mp3" />
        </audio>
        <canvas id="audioCanvas" ref={this.canvas}/>
    </Container>
    );
  }
}

export default Intro;
