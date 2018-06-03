import React from 'react';

class Results extends React.Component {
  render() {
    var message;
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
        message = 'You did awesome!';
    } else if (percent < 80 && percent > 60) {
        message = 'You did just fine';
    } else {
        message = 'You did horrible, sorry';
    }
    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length}</h4>
        <h2>{percent}% - {message}</h2>
        <a className="btn btn-primary" href="/">Take test again</a>
      </div>
    );
  }
}

export default Results;
