import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { increment, decrement, incrementValue, decrementValue } from '../reducers/counter';
import Notifications, { notify } from '../components/Notifications'
import Modal from './Modal';
import './Modal.css';

const ButtonStyle = {
    margin: "0px 10px"
}


class Home extends Component {

    state = {
        isShowModal: false,
        valueAdd: 10,
        textMessage: 'Hello anonim!',
        colorId: '#444'
    }

    handleChange = (e) => {
        this.setState({ valueAdd: Number(e.target.value) });
    }
    handleChangeText = (e) => {
        this.setState({ textMessage: e.target.value });
    }
    handleChangeColor = (e) => {
        this.setState({ colorId: e.target.value });
    }


    
    btnToggleShowModalClick = () => {
        const { isShowModal } = this.state;
        this.setState({ isShowModal: !isShowModal });
    }



    btnCloseDialog = () => {
        this.btnToggleShowModalClick();
        notify("Close Dialog", "#099");
    }



    render() {
        const { isShowModal } = this.state;
        console.log('------- Home props------', this.props);
        const { count } = this.props;
        const { valueAdd, textMessage, colorId } = this.state;
        return (
            <div className="container">
                <Notifications />
                <div className={classnames('custommodal', { 'open': isShowModal })}>
                    <Modal callBackClose={this.btnCloseDialog}/>
                </div>
                <h1>Home page Count: {count}</h1>

                <button className="btn btn-success"
                    onClick={() => notify(textMessage, colorId)}
                    style={{ 'marginBottom': '10px', 'borderRadius': '25px' }}>
                    Click me
                </button>

                <button className="btn btn-success"
                    onClick={() => notify(textMessage, colorId)}
                    style={{ 'marginBottom': '10px', 'borderRadius': '25px' }}>
                    Error
                </button>
                <button
                    className="btn btn-success"
                    style={ButtonStyle}
                    onClick={this.btnToggleShowModalClick}>
                    <i className="fa fa-plus-circle" /> Show Modal
                    </button>

                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend" >
                        <span className="input-group-text" >Message:</span>
                    </div>
                    <input type="text"
                        id="message"
                        name="message"
                        value={textMessage}
                        onChange={this.handleChangeText}
                    />
                </div>

                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend" >
                        <span className="input-group-text">Color Id:</span>
                    </div>
                    <input type="text"
                        id="colorid"
                        name="colorid"
                        value={this.state.colorId}
                        onChange={this.handleChangeColor}
                    />
                </div>




                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Value: </span>
                    </div>
                    <input type="text"

                        id="values"
                        name="values"
                        value={this.state.valueAdd}
                        onChange={this.handleChange}
                    />
                </div>



                <button
                    className="btn btn-success"
                    style={ButtonStyle}
                    onClick={() => this.props.increment()}>
                    <i className="fa fa-plus-circle" /> Add
                    </button>
                <button
                    className="btn btn-info"
                    onClick={() => this.props.decrement()}>
                    <i className="fa fa-minus-circle" /> Sub
                    </button>
                <button
                    className="btn btn-success"
                    style={ButtonStyle}
                    onClick={() => this.props.incrementValue(valueAdd)}>
                    <i className="fa fa-plus-circle" /> Add value
                    </button>
                <button
                    className="btn btn-info"
                    onClick={() => this.props.decrementValue(valueAdd)}>
                    <i className="fa fa-minus-circle" /> Sub value
                    </button>
            </div>

        );
    }
}


const mapStateProps = (state) => {
    console.log('----redux store connect----', state);
    return {
        count: state.counter.counterStore
    };
}


export default connect(mapStateProps, { increment, decrement, incrementValue, decrementValue })(Home);