import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from './withRouter';

class ListProductsComponent extends Component {
    

    constructor(props) {
        super(props) 

            this.state = {
                products: []
            }
            
    }

    componentDidMount(){

    }

    getProducts(searchItem) {
        EmployeeService.getProducts(searchItem).then((res) => {
            this.setState({ products: res.data})
        }); 
    }


    render() {
        
        
        return (
            <div>
                
                <button onClick = { () => this.getProducts('mou')} className="btn btn-info" style={{marginLeft: "10px"}}>Mouse Search</button>
                <button onClick = { () => this.getProducts('key')} className="btn btn-info" style={{marginLeft: "10px"}}>Keyboard Search</button>
                <button onClick = { () => this.getProducts('lap')} className="btn btn-info" style={{marginLeft: "10px"}}>Laptop Search</button>
                <h2 className="text-center">Product List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Product First Name</th>
                                <th> Product Last Name</th>
                                <th> Product Email Id</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                    <tr key = {product.id}>
                                        <td> { product.sku} </td>
                                        <td> { product.name} </td>
                                        <td> { product.description} </td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
                
            </div>
        )
    }
}

export default withRouter(ListProductsComponent);