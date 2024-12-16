import React from 'react';
import './App.css';
import Counter from './component/Counter';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      show : false
    }
  }

  render(){
    return(
      <div>
        <h1>Workshop React State</h1>
        <button className={this.state.show ? 'ahmer' : 'akhther'} onClick={()=> this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : "Show"}</button>
        {
          this.state.show && <Counter/>
        }
        
      </div>
    )
  }
}


export default App;
