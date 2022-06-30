import React,{Component} from 'react'
import ChildName from './ChildName'

export default class ParentName extends Component {
    state = {
        firstname : 'Afif',
        lastname : 'Rizqon'
    }

    render(){
        return(
            <div>
                <ChildName
                    firstname = {this.state.firstname}
                    lastname = {this.state.lastname}
                    />
            </div>
        )
    }
}