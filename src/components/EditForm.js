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
                {editFlag ? <div>
                    <div className='buttonSave'>
                        <input type="submit" value="Save"/>
                    </div>
                        <div>
                            <b>Name:  </b><input name='name' type='text' value={this.state.name}
                                                onChange={this.handleNewFormValue}
                        />
                        </div>
                        <div >
                            <b>Email:  </b><input name='email' type='text' value={this.state.email}
                                                 onChange={this.handleNewFormValue}
                        />
                        </div>
                        <div>
                            <b>Owner:  </b><input name='owner' type='text' value={this.state.owner}
                                                 onChange={this.handleNewFormValue}
                        />
                        </div>
                    </div>
                    :
                    <div>
                        <div className='buttonEdit'>
                        <button onClick={() => {
                            this.props.activateEditMod()
                        }}>Edit
                        </button>
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
                }
            </form>
        )
    }
}