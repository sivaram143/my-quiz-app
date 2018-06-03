import React from 'react';

class Question extends React.Component {
  handleChange(e) {
    const {setCurrent, setScore, question} = this.props;
    e.preventDefault();
    const selected = e.target.value;
    setCurrent(this.props.current + 1);
    if (selected === question.correct) {
      setScore(this.props.score + 1);
    }
  }
  render() {
    const {question} = this.props;
    return (

      <div className="card">
          <div className="card-header bg-warning">
              <h3>{question.text}</h3>
          </div>
          <div className="card-body">
              <ul className="list-group">
                {
                  question.choices.map(choice => {
                    return (
                      <li className="list-group-item" key={choice.id}>{choice.id}.&nbsp;&nbsp;
                        <input onChange={this.handleChange.bind(this)} type="radio" className="form-check-input" id={question.id} value={choice.id} /> {choice.text}
                      </li>
                    );
                  })
                }
              </ul>
        </div>
      </div>
    );
  }
}

export default Question;
