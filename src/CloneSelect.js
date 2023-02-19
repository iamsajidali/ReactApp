import logo from './logo.svg';
import './App.css';
import React from 'react';

class CloneSelect extends React.Component {
  state = {
    rows: 0
  };
  addRow = () => {
    this.setState(({ rows }) => ({ rows: rows + 1 }));
  };
  removeRow = () => {
    this.setState(({ rows }) => ({ rows: rows - 1 }));
  };

  render() {
    return (
      <>
        <div className='container'>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
            <button onClick={this.addRow}>+</button>
            {Array.from({ length: this.state.rows }, (_, index) => (
            <div key={index}>
              <input />
              <button onClick={this.removeRow}>-</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CloneSelect;
