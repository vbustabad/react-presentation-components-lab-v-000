import React from 'react';

class SimpleComponent extends React.Component {
<<<<<<< HEAD
  constructor() {
    super();
=======
  constructor(props) {
    super(props);
>>>>>>> 5874cc140185fc80754f504efe120362ab5e5731

    this.state = {
      mood: "happy"
    };
  }

  handleClick = event => {
<<<<<<< HEAD
    if (this.state.mood === "happy") {
     this.setState({
       mood: "sad"
     })
    } else {
      this.setState({
        mood: "happy"
      })
    }
  }
=======
   this.setState({
     mood: "sad"
   })
 }
>>>>>>> 5874cc140185fc80754f504efe120362ab5e5731

  render() {
    return (
      <div className="current-mood" onClick={this.handleClick}>
<<<<<<< HEAD
=======
        <h3> Current Mood: </h3>
>>>>>>> 5874cc140185fc80754f504efe120362ab5e5731
        {this.state.mood}
      </div>
    );
  }
}

export default SimpleComponent;
