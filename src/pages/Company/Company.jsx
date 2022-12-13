import React, { useEffect, useState } from 'react'
import Navbar from '../../componets/Navbar'
import Footer from '../../Footer'
import Sidebar from '../../componets/Sidebar'
import axios from 'axios'


const Company = () => {



    const [report, setReport]=useState([])


    useEffect(() => {   

        axios.get('http://54.178.10.190:5000/admin/getCompany').then((res) => {  
            console.log(res.data)  
          const sale = res.data
          setReport(sale)   
        }
    
        )
      }, [])



    

    return (
        <>
            <Sidebar />

            <main className="content">
                <div>
                    <Navbar />
                    <div className="row my-4 d-flex m-5 mx-0 flex-wrap justify-content-center items-center p-5">
                    
                        <div className="bg-white border p-3 w-50 h-50 rounded text-center">
                            
                                <img
                                className="w-100 h-100"
                                src={`http://54.178.10.190:5000${report.image}`}
                                alt="img"
                            />
                            <hr className="" />
                            <span className="fs-4 font-bold">{report.name}</span>
                        </div>
                        
                    



                    </div>

                </div>
                <Footer />
            </main>

        </>
    )
}

export default Company