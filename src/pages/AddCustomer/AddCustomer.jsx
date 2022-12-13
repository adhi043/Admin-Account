import React, { useState } from 'react'
import Navbar from '../../componets/Navbar'
import Footer from '../../Footer';
import Sidebar from '../../componets/Sidebar';
import axios from 'axios'


const AddCustomer = () => {

    const [addCustomer, setAddCustomer] = useState({
        name: '',
        city: '',
        phone: '',
        region: '',
        invoiceCode: '',
    })



    const handle = (e) => {
        const newCustomer = { ...addCustomer }
        newCustomer[e.target.id] = e.target.value;
        setAddCustomer(newCustomer)
        console.log(newCustomer);
      }


    const submit = (e) => {
        e.preventDefault();

        const param = new FormData();
        param.append('name', addCustomer.name)
        param.append('city', addCustomer.city)
        param.append('phone', addCustomer.phone)
        param.append('region', addCustomer.region)
        param.append('invoiceCode', addCustomer.invoiceCode)



        const configu = {

            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post('http://54.178.10.190:5000/seller/register', param, configu).then((res) => {
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
                                <h2 class="h5 mb-4">Add Customer</h2>
                                <form onSubmit={submit}  >
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="name">Customer Name</label>
                                                <input class="form-control" name='name'
                                                    id="name" type="text" placeholder="Name" onChange={handle}/>
                                            </div>

                                        </div>

                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="first_name">City</label>
                                                <input class="form-control" name='name'
                                                    id="city" type="text" placeholder="City" onChange={handle}/>
                                            </div>

                                        </div>


                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="first_name">Phone</label>
                                                <input class="form-control" name='name'
                                                    id="phone" type="text" placeholder="Phone" onChange={handle}/>
                                            </div>

                                        </div>


                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="first_name">Region</label>
                                                <input class="form-control" name='name'
                                                    id="region" type="text" placeholder="Region" onChange={handle}/>
                                            </div>

                                        </div>


                                        <div class="col-md-6 mb-3">
                                            <div>
                                                <label for="first_name">Invoice Code</label>
                                                <input class="form-control" name='name'
                                                    id="invoiceCode" type="text" placeholder="Invoice Code" onChange={handle}/>
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

export default AddCustomer;