import React,{useEffect,useState} from 'react'
import Navbar from '../../componets/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import Sidebar from '../../componets/Sidebar'
import axios from 'axios'

const Product = () => {
    const [product, setProduct]=useState([])


    useEffect(() => {

       

        axios.get('http://54.178.10.190:5000/product/allProducts').then((res) => {  
            console.log(res.data)  
          const sale = res.data.products
          setProduct(sale)   
        }
    
        )
      }, [])
  


  return (
   <>
    <Sidebar/>

<main className="content">
<div>
    <Navbar/>
    <div className="row my-4">
        <div className="col-md-4">
            <div className='d-flex align-items-center justify-content-center'>
            <div>
            <label>Start Date</label>
            </div>
            <div className='ps-3'>
            <input type="date" class="form-control"
            
            id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className='d-flex align-items-center justify-content-center'>
            <div>
            <label>End Date</label>
            </div>
            <div className='ps-3'>
            <input type="date"
            class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
            </div>
        </div>
        <div className="col-md-4">
            <div>
            <input type="text"
            class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
        </div>
    </div>
    <div className="row">
    <div class="col-12 col-xl-12">
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="card border-0 shadow">
                        <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="fs-5 fw-bold mb-0">Product</h2>
                            </div>
                            <div class="col text-end"><Link to="/addproduct" class="btn btn-sm btn-primary">Add</Link></div>
                        </div>
                        </div>
                        <div class="table-responsive">
                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                                <tr>
                                <th class="border-bottom" scope="col">Sr.no</th>
                                    <th class="border-bottom" scope="col">Name</th>
                                    <th class="border-bottom" scope="col">Sale Price</th>
                                    <th class="border-bottom" scope="col">Purchase Price</th>
                                    <th class="border-bottom" scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                              
                              product.map((p,index)=>(
                                <tr>
                                    <th class="text-gray-900" scope="row">{index}</th>
                                    <td class="fw-bolder text-gray-500">{p.name}</td>
                                    <td class="fw-bolder text-gray-500">{p.salePrice}</td>
                                    <td class="fw-bolder text-gray-500">
                                      {p.purchasePrice}
                                    </td>
                                    <td class="fw-bolder text-gray-500">
                                        {p.category}
                                    </td>
                                </tr>
                              ))}

                                
                                
                               
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
               
            </div>
            </div>
    </div>
</div>
<Footer/>
</main>

   </>
  )
}

export default Product