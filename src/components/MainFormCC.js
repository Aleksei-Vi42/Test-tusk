import React from 'react'
import './MainForm.css'
import EditForm from "./EditForm";

class MainFormCC extends React.Component {

    state = {
        data: null,
        editMode: false
    }

    activateEditMod = () => {
        this.setState({
            editMode: true
        })

    }
    deActivateEditMod = () => {
        this.setState({
            editMode: false
        })
    }

    componentDidMount(props) {
        fetch('http://109.236.74.74:9900/getdata')
            .then(response => response.json())
            .then((data) => this.setState({data: data, dataGarage: data.Garage}))
    }

    handleChangeFormData = (data) => {
        console.log(data)
        this.setState({dataGarage: data, editMode: false})
    }


    render() {
        return (
            <div className='formBlock'>
                <h1 className='title'>GARAGE</h1>
                {this.state.data ?
                    <div>
                        <div calssName='description'>
                            <div>
                                <b>Title: </b><span>{this.state.data.Item.Title}</span>
                            </div>
                            <div>
                                <b>Description: </b><span>{this.state.data.Item.Description}</span> :
                            </div>
                        </div>
                        <div className='options'>
                            <div><b>Fuel type: </b>
                                <span>{this.state.data.Item.KeyValues.FuelType}</span></div>
                            <div><b>Trim Level: </b>
                                <span>{this.state.data.Item.KeyValues.TrimLevel}</span></div>
                            <div><b>Gear box: </b> <span>{this.state.data.Item.KeyValues.GearBox}</span>
                            </div>
                        </div>
                    </div> : null}
                {this.state.data ?
                <div className="original">
                    <div>
                        <b>Make: </b> <span>{this.state.data.Item.Original.Make}</span>
                    </div>
                    <div>
                        <b>Model: </b> <span>{this.state.data.Item.Original.Model}</span>
                    </div>
                    <div>
                        <b>Car options: </b>
                        <span>{this.state.data.Item.Original.CarOptions.Title}</span>
                    </div>
                </div> : null}
                <div className="garage">
                    {this.state.data ?
                        <EditForm localState={this.state.dataGarage}
                                  editFlag={this.state.editMode}
                                  activateEditMod={this.activateEditMod}
                                  newDataForm={this.handleChangeFormData}
                                  deActivateEditMod={this.deActivateEditMod}/>
                        : null}
                </div>
                <div className='image'>
                    <img src='https://avto-russia.ru/autos/kia/photo/kia_sportage_1.jpg'/>
                </div>
            </div>
        )
    }
}

export default MainFormCC