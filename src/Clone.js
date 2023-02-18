import logo from './logo.svg';
import './App.css';
import React from 'react';
import Section from './components/Section';

class Clone extends React.Component {
  state = {
    clonedElements: []
  };
  cloneElement = () => {
    const clonedElements = [...this.state.clonedElements];
    clonedElements.push(<Section />);
    this.setState({ clonedElements });
  };
  
  removeElement = (index) => {
    const clonedElements = [...this.state.clonedElements];
    clonedElements.splice(index, 1);
    this.setState({ clonedElements });
  };

  render() {
    return (
      <>
        <div className='container'>
          <Section />
          <button onClick={this.cloneElement}>Clone Element</button>
          {this.state.clonedElements.map((element, index) => (
            <div key={index} className="cloned-element">
              {element}
              <button onClick={() => this.removeElement(index)}>Remove Element</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Clone;
