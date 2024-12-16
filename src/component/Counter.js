import React from "react"

class Counter extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0,
            textP : ""

        }
        // console.log(this)
    }

    increment=()=> this.setState({count : this.state.count + 1})
    decrement=()=> this.state.count > 0 &&  this.setState({count : this.state.count -1}) 

    componentDidMount(){
        // console.log('Mount')
        document.title = 'Hello'
    }

    componentDidUpdate(){
        // console.log("Update")
        document.title = this.state.count
    }

    componentWillUnmount(){
        // console.log('Unmount')
        document.title = "Allah Yarhmo"
    }
    render(){
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <h3>{this.state.textP}</h3>
                <input type="text" onChange={(e)=> this.setState({textP : e.target.value}) }/>
            </div>
        )
    }
}

export default Counter