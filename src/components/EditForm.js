import React, {Component} from 'react'
import './EditForm.css'
export default class EditForm extends Component {

    state = {
        name: this.props.localState ? this.props.localState.Name : '',
        email: this.props.localState ? this.props.localState.Email : '',
        owner: this.props.localState ? this.props.localState.Owner : '',
    }


    handleNewFormValue = (e) => {
        e.preventDefault();
        let name = e.target.name;
        this.setState({[name]: e.target.value})
        console.log(this.state)
    }

    render() {

        let {newDataForm, deActivateEditMod, editFlag} = this.props

        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                newDataForm(this.state);
                deActivateEditMod()
            }}
            >
                    <div>
                        <div className='buttonEdit'>
                        </div>
                        <div>
                            <b>Name: </b><span>{this.state.name}</span>
                        </div>
                        <div>
                            <b>Email: </b><span>{this.state.email}</span>
                        </div>
                        <div>
                            <b>Owner: </b><span>{this.state.owner}</span>
                        </div>
                    </div>
            </form>
        )
    }
}