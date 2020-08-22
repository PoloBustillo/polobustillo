import React from 'react';
import { Row, Col } from 'react-grid-system';
import Letter from './letter'
import anime from "animejs";


class Title extends React.Component {

  animeFunc = (myRef)=>{
    let down = Math.floor(Math.random() * (+85 - +80)) + +80;
    let downString = down+'vh';
    let duration = Math.floor(Math.random() * (+2500 - +1000)) + +1000;
    this.animeRef = anime({
        targets: myRef.current,
        translateY: () => {
                return ['0%', downString];
        },
        elasticity: () => {
                return 1000;
        },
        delay:1000,
        color: '#505050',
        duration: duration
    });
  }

  animeFunc2 = (myRef)=>{
    let down = Math.floor(Math.random() * (+85 - +80)) + +80;
    let downString = down+'vh';
    let duration = Math.floor(Math.random() * (+2500 - +1000)) + +1000;
    this.animeRef = anime({
        targets: myRef.current,
        keyframes: [
          {translateX: [-1000,250]},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0},
          {translateY: () => {
                  return ['0%', downString];
          },
          color: '#505050'
          },
        ],
        delay:1000,
        duration:duration,
        elasticity: () => {
                return 1000;
        }
    });
  }


  render() {

    return(



      <Row  className="coquinisTitle">
        <Letter animeJSMount={this.animeFunc2} value="P"/>
        <Letter animeJSMount={this.animeFunc2} value="s"/>
        <Letter animeJSMount={this.animeFunc2} value="i"/>
        <Letter animeJSMount={this.animeFunc2} value="c"/>
        <Letter animeJSMount={this.animeFunc2} value=".&nbsp;"/>
        <Letter animeJSMount={this.animeFunc} value="D"/>
        <Letter animeJSMount={this.animeFunc} value="a"/>
        <Letter animeJSMount={this.animeFunc} value="n"/>
        <Letter animeJSMount={this.animeFunc} value="i"/>
        <Letter animeJSMount={this.animeFunc} value="e"/>
        <Letter animeJSMount={this.animeFunc} value="L"/>
        <Letter animeJSMount={this.animeFunc} value="a&nbsp;"/>
        <Letter animeJSMount={this.animeFunc} value="D"/>
        <Letter animeJSMount={this.animeFunc} value="i"/>
        <Letter animeJSMount={this.animeFunc} value="a"/>
        <Letter animeJSMount={this.animeFunc} value="z"/>
      </Row>

    );
  }
}

export default Title;
