import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import anime from "animejs";

class Letter extends React.Component {

  constructor(props){
    super(props)
    this.state={letter:props.value}
    this.myRefLetter = React.createRef();
  }

  componentDidMount(){
   this.props.animeJSMount(this.myRefLetter)
  }

  render() {
    return(
      <span  style={this.props.style} ref={this.myRefLetter}>{this.state.letter}</span>
    );
  }
}

export default Letter;
