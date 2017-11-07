import React, { Component } from 'react';
import Popup from 'react-popup';

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
                    <div className="col-md-5">
                        <Popup />
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;

const AddButton = () => (
        <button id='add' type="button" className="btn btn-success btn-circle btn-lg">
            <i className="fa fa-plus"/>
        </button>
);


Popup.registerPlugin('popover', function (content, target) {
    this.create({
        content: content,
        className: 'popover',
        noOverlay: true,
        position: function (box) {
            let bodyRect      = document.body.getBoundingClientRect();
            let btnRect       = target.getBoundingClientRect();
            let btnOffsetTop  = btnRect.top - bodyRect.top;
            let btnOffsetLeft = btnRect.left - bodyRect.left;
            let scroll        = document.documentElement.scrollTop || document.body.scrollTop;

            box.style.top  = (btnOffsetTop - box.offsetHeight - 10) - scroll + 'px';
            box.style.left = (btnOffsetLeft + (target.offsetWidth / 2) - (box.offsetWidth / 2)) + 'px';
            box.style.margin = 0;
            box.style.opacity = 1;
        }
    });
});

Popup.plugins().popover('This popup will be displayed right above this button.', <AddButton/>);