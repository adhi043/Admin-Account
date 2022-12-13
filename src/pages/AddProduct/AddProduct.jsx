import React, { useState } from 'react'
import Navbar from '../../componets/Navbar'
import Footer from '../../Footer';
import Sidebar from '../../componets/Sidebar';
import axios from 'axios'


const AddProduct = () => {

    const [addProduct, setAddProduct] = useState({
        name: '',
        salePrice: '',
        purchasePrice: '',
        category: ''
    })



    const handle = (e) => {
        const newProduct = { ...addProduct }
        newProduct[e.target.id] = e.target.value;
        setAddProduct(newProduct)
        console.log(newProduct);
      }


    const submit = (e) => {
        e.preventDefault();

        const param = new FormData();
        param.append('name', addProduct.name)
        param.append('salePrice', addProduct.salePrice)
        param.append('purchasePrice', addProduct.purchasePrice)
        param.append('category', addProduct.category)



        const configu = {

            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post('http://54.178.10.190:5000/product/new', param, configu).then((res) => {

            console.log(res.data);

        }

        )
    }

    return (
        <>

            <Sidebar />

            <main className="content">
                <div className="dashboard-container" >
                    <Navbar />
                    <div className="row my-4">
                        <div class="col-12 col-xl-12">
                            <div class="card card-body border-0 shadow mb-4">
                                <h2 class="h5 mb-4">Add Product</h2>
                                <form onSubmit={submit}  >
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="name">Product Name</label>
                                                <input class="form-control" name='name'
                                                    id="name" type="text" placeholder="Name" onChange={handle}/>
                                            </div>

                                        </div>

                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="first_name">Sale Price</label>
                                                <input class="form-control" name='name'
                                                    id="salePrice" type="text" placeholder="Price" onChange={handle}/>
                                            </div>

                                        </div>


                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="first_name">Purchase Price</label>
                                                <input class="form-control" name='name'
                                                    id="purchasePrice" type="text" placeholder="Price" onChange={handle}/>
                                            </div>

                                        </div>


                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="category">Category</label>
                                                <select class="form-control" name="category" id="category" onChange={handle}>
                                                    <option>Select Category</option>
                                                    <option value="bundle">Bundle</option>
                                                    <option value="carton">Carton</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="mt-3"><button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button></div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </main>
        </>

    )
}

export default AddProduct;