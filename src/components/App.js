import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      store: {
        var: [],
        val: [],
      },
    }

    this.onTextChange = this.onTextChange.bind(this);
  }

  logicStuff(input) {

    let para = document.getElementById("para");
    let full_string = "";
    if (!input) {
      para.innerHTML = "Cannot find output";
    }
    else {
      for (var i = 0; i < input.length; i++) {
        console.log("here", i);
        console.log("Will change", i, i + 1, i + 2);
        if (input[i] === "MVI") {
          if (input[(i + 1)] !== '') {
            if (input[(i + 2)] !== '') {
              if (input[(i + 1)] !== undefined && input[(i + 2)] !== undefined) {
                let partial = "Move immediately into " + input[(i + 1)] + " value = " + input[(i + 2)] + "<br/>";
                full_string += partial;
                this.setState({
                  store: {
                    var: this.state.store.var + input[(i + 1)] + ",",
                    val: this.state.store.val + input[(i + 2)] + ",",
                  },
                });
              }
            }
          }
        }
        para.innerHTML = full_string;
      }
    }
  }

  onTextChange(event) {
    let text = event.target.value;
    let separators = [' ', '\n'];
    let input = text.split(new RegExp(separators.join('|'), 'g'));
    this.setState({
      input
    });
    this.logicStuff(input);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <textarea className="input" onChange={this.onTextChange} />
          <span className="output-text">OUTPUT</span>
          <div className="para" id="para"></div>
        </div>
      </div>
    );
  }
};