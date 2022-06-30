import react, {Component} from 'react'

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {counter : 3} // hampir sama dengan let counter = 3, dan dimasukkan ke state
        this.increment = this.increment.bind(this) // let increment
        this.decrement = this.decrement.bind(this)// let decrement
    }
    increment() { // fungsi increment
        this.setState({counter : this.state.counter +1}) // implementasi increment
    }
    decrement(){ // fungsi decrement
        this.setState({counter : this.state.counter -1}) // implementasi decrement
    }
    render(){
        return(
            <div>
                <h1>
                    counter : {this.state.counter} 
                </h1>
                <button onClick = {this.increment}>+</button> 
                <button onClick = {this.decrement}>-</button> 
            </div>
        )
    }
}
