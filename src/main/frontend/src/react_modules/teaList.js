import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchProductsAction from '../actions/getTeaData';
import fetchSortsAction from '../actions/getSortData';
import {getProductsError, getProducts, getProductsPending} from '../reducers/tea';
import {getSorts} from "../reducers/sort";
import deleteTea from '../actions/deleteTea';
import './css/dataList.css';

class TeaList extends React.Component {

    componentDidMount() {
        const {fetchProducts, fetchSorts} = this.props;
        fetchProducts();
        fetchSorts();
    }

    render() {
        const products = this.props.products;
        const sorts = this.props.sorts;
        console.log('props:');
        console.log( this.props);
        console.log("state");
        console.log( products);
        console.log( sorts);
        return(
           <div className={'dataList'}>
               <div className={'header'}>
                   <h2>Tea</h2>
               </div>

              <table className={'teaListTable'}>
              <thead>
              <tr>
              <th>Name</th>
              <th>Origin</th>
              <th>Sort</th>
              <th></th>
              </tr>
              </thead>
              <tbody>
              {products.map(function(item){
                  return(
                      <tr key = {item.id}>
                          <td>{item.name}</td>
                          <td>{item.origin}</td>
                          <td>{item.teaSort.sortName}</td>
                          <td><Link to={'/tea/'+item.id} >View</Link></td>
                          <td><Link to='/' onClick={() => deleteTea(item.id)}>Delete</Link></td>
                      </tr>
                  )
              })}
              </tbody>

          </table>
                   <div className = {'createButton'}>
                   <Link to={'/create'}   >Create New</Link>

                   </div>

                <div className={'header'}>
                <h2>Sorts</h2>
                </div>
                <table className={'sortListTable'}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Preferred Temperature</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sorts.map(function(item){
                        return(
                            <tr key = {item.sortId}>
                                <td>{item.sortName}</td>
                                <td>{item.preferredTemperature+"°C"}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>


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
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction,
    fetchSorts: fetchSortsAction,
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeaList);


