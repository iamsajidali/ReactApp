import React from "react";
import logo from './../logo.svg';

class Section extends React.Component{
    render(){
        return(
            <>
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </>
        )
    }
}
export default Section;