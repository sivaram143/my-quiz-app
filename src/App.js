import React from "react";
import Score from './components/Score';
import QuestionList from './components/QuestionsList';
import Results from './components/Results';
//import data from './api/questions.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "questions": [
            {
                "id": 1,
                "text": "React JS developed by?",
                "choices": [
                  {
                    "id": "a",
                    "text": "Facebook",
                  },
                  {
                    "id": "b",
                    "text": "Google",
                  },
                  {
                    "id": "c",
                    "text": "Microsoft",
                  }
                ],
                "correct": "a"
            },
            {
              "id": 2,
              "text": "What does JSON stand for",
              "choices": [
                {
                  "id": "a",
                  "text": "JavaScript Oriented Notation",
                },
                {
                  "id": "b",
                  "text": "JavaScript Object Notation",
                },
                {
                  "id": "c",
                  "text": "JavaScript Organic Notation",
                }
              ],
              "correct": "b"
            },
            {
                  "id": 3,
                  "text": "What does API stand for",
                  "choices": [
                    {
                      "id": "a",
                      "text": "Android product Info",
                    },
                    {
                      "id": "b",
                      "text": "Application Program Idle",
                    },
                    {
                      "id": "c",
                      "text": "Application Program Interface",
                    }
                  ],
                  "correct": "c"
                },
                {
                    "id": 4,
                    "text": "the result of 6+7",
                    "choices": [
                      {
                        "id": "a",
                        "text": "14",
                      },
                      {
                        "id": "b",
                        "text": "15",
                      },
                      {
                        "id": "c",
                        "text":"13",
                      }
                    ],
                    "correct": "c"
                  }
        ],

      score: 0,
      current: 1
    }
  }
  setCurrent(current) {
    this.setState({current});
  }
  setScore(score) {
    this.setState({score});
  }

  //Todo read JSON from api instead local json
  /*
  componentDidMount() {
    console.log("Called....")
    fetch("./api/questions.json")
    .then(result => {
      return result.json();
    }).then(data => {
      console.log("data", data)
      this.setState({data: data});
      console.log(data);
    })
  }
  */


  render() {
    if (this.state.current > this.state.questions.length) {
      var score = '';
      var results = <Results {...this.state}/>
    } else {
      score = <Score {...this.state} />
      results = '';
    }
    return (
        <div>
          <div className="jumbotron">
              <div className="container">
                  <h1 className="display-3">Simple Quiz Application</h1>
              </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  {score}
              </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-md-12">
                  <QuestionList setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
                </div>
              </div>
              {results}
            </div>
      </div>
    );
  }
}



export default App;
