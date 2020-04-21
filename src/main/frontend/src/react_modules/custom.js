import React, {Component} from 'react';
import {getProducts, getProductsError, getProductsPending} from "../reducers/tea";
import {getSorts} from "../reducers/sort";
import {bindActionCreators} from "redux";
import fetchProductsAction from "../actions/getTeaData";
import fetchSortsAction from "../actions/getSortData";
import {connect} from "react-redux";
import createTea from '../actions/createTea';
import updateTea from '../actions/updateTea';
import {
    withRouter
} from 'react-router-dom'
import './css/form.css'

class Custom extends React.Component {


    constructor(props) {
        super(props);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.formHandler = this.formHandler.bind(this);
        this.changeSortId = this.changeSortId.bind(this);
        this.state = {
            formFields: {
                name: '',
                origin: '',
                teaSort: '1',
            }
        }
    }

    getData =  async function () {
        const url = 'http://localhost:8080/api/tea/'+this.props.match.params.id;
        let api_url = await fetch(url, );
        let data = await api_url.json();
        console.log(data);
        this.setState({
            formFields: {
                id: data.id,
                name: data.name,
                origin: data.origin,
                teaSort: '1',
            }
        });
    };

    inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        console.log(this.state.formFields)
        this.setState({
            formFields
        });
    }

    changeSortId(e) {
        let formFields = {...this.state.formFields};
        let select = document.getElementById("sortSelect");
        let strUser = select.options[select.selectedIndex].value;
        formFields.teaSort = strUser;
        this.setState({
            formFields
        });
        console.log(this.state.formFields)
    }

    componentDidMount() {
        const {fetchProducts, fetchSorts} = this.props;
        fetchSorts();
        if(this.props.mode === 'update' ) {
            this.getData();
        }

        }

     formHandler() {

        if(this.props.mode === 'update'){
            console.log("update");
             updateTea(this.state.formFields.id, this.state.formFields.name, this.state.formFields.origin, this.state.formFields.teaSort);
        }
        else if( this.props.mode === 'create' ) {
            console.log("create");
             createTea(this.state.formFields.name, this.state.formFields.origin, this.state.formFields.teaSort);
        }
    };

    render() {
        const sorts = this.props.sorts;
        console.log(this.state.formFields);
        return(
        <div className="mainForm">
            <h1>{this.props.mode}</h1>


                <h2>Name:</h2>
                <input type='text' name = "name" value={this.state.formFields.name} onChange={(e) => this.inputChangeHandler.call(this, e)} />
                <h2>Origin:</h2>
                <input type='text' name = "origin" value={this.state.formFields.origin} onChange={(e) => this.inputChangeHandler.call(this, e)} />
                <h2>Sort Id:</h2>
                <select  onChange={(e) => this.changeSortId.call(this, e)} id = 'sortSelect' name = 'teaSort'>
                    {sorts.map(function(item){
                        return(
                            <option key = {item.sortId} value={item.sortId}>{item.sortName}</option>
                        )
                    })}
                </select>
            <div>
                <button onClick={()=> this.formHandler()} > Apply </button>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        error: getProductsError(state.tea),
        products: getProducts(state.tea),
        pending: getProductsPending(state.tea),
        sorts: getSorts(state.sort),
    });

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction,
    fetchSorts: fetchSortsAction,
}, dispatch);


export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Custom));