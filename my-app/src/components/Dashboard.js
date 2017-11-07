import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row row-margin"/>
                <div className="row row-margin"/>
                <div className="row row-margin">
                    <div className="col-md-5"/>
                    <div className="col-md-2">
                        <AddButton/>
                    </div>
                    <div className="col-md-5"/>
                </div>
            </div>

        );
    }
}

export default Dashboard;

const AddButton = () => (
    <div className="dropdown">
        <button id="add" type="button" className="btn btn-success btn-circle btn-lg dropdown-toggle" data-toggle="dropdown" >
            <i className="fa fa-plus"/>
        </button>
        <div className="dropdown-menu" aria-labelledby="add">
            <i className="fa fa-coffee fa-2x">&nbsp;Coffee</i>
        </div>
    </div>
);