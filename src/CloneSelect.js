import logo from './logo.svg';
import './App.css';
import React from 'react';

class CloneSelect extends React.Component {
  state = {
    clonedElements: []
  };
  handleCloneElement = () => {
    const elements = document.querySelectorAll('.logo');
    const element = elements[elements.length - 1];
    const clonedElement = element.cloneNode(true);
    this.setState(prevState => ({ clonedElements: [...prevState.clonedElements, clonedElement] }));
  };

  handleRemoveElement = index => {
    this.setState(prevState => ({ clonedElements: prevState.clonedElements.filter((_, i) => i !== index) }));
  };

  render() {
    return (
      <>
        <div className='container'>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="element-to-clone">Element to Clone</div>
          <button onClick={this.handleCloneElement}>Clone Element</button>
          {this.state.clonedElements.map((element, index) => (
            <div key={index} className="cloned-element">
              {element}
              <button onClick={() => this.handleRemoveElement(index)}>Remove Element</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CloneSelect;
