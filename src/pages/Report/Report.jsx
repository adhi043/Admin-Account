import React,{useEffect,useState} from 'react'
import Navbar from '../../componets/Navbar'
import Footer from '../../Footer'
import Sidebar from '../../componets/Sidebar'
import axios from 'axios'

const Report = () => {
    const [report, setReport]=useState([])


    useEffect(() => {

       

        axios.get('http://54.178.10.190:5000/sale/allSales').then((res) => {  
            console.log(res.data)  
          const sale = res.data.sales
          setReport(sale)   
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
                                <h2 class="fs-5 fw-bold mb-0">Report</h2>
                            </div>
                            
                        </div>
                        </div>
                        <div class="table-responsive">
                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                                <tr>
                                <th class="border-bottom" scope="col">Sr.no</th>
                                    <th class="border-bottom" scope="col">Type</th>
                                    <th class="border-bottom" scope="col">Profit</th>
                                    <th class="border-bottom" scope="col">Loss</th>
                                    <th class="border-bottom" scope="col">Amount</th>
                                    <th class="border-bottom" scope="col">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                              
                              report.map((r,index)=>(
                                <tr>
                                    <th class="text-gray-900" scope="row">{index}</th>
                                    <td class="fw-bolder text-gray-500">{r.type}</td>
                                    <td class="fw-bolder text-gray-500">{r.amount-r.discount}</td>
                                    <td class="fw-bolder text-gray-500">{r.discount}</td>
                                    <td class="fw-bolder text-gray-500">
                                      {r.amount}
                                    </td>
                                    <td class="fw-bolder text-gray-500">
                                        {r.createdAt}
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

export default Report