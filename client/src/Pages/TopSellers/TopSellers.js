import React,{useEffect,useState} from 'react'
import Layout from '../Layout/Layout' 
import Top from "../Top/Top"
import axios from 'axios'

const Topsellers=()=>{
//   const [topSellers,setTopSellers]=useState([])
//   useEffect(()=>{
//     axios.get('http://localhost:4000/topsellers')
//     .then(res=>{
//        console.log(res.data.data);
//        setTopSellers(res.data.data)
//     })
// },[])

const [topSellers,setTopSellers]=useState([])


useEffect(()=>{
   axios.get('http://localhost:4000/topsellers')
   .then(res=>{
      console.log(res['data']);
      setTopSellers(res['data'])
      
   })
},[])
    return(
            <>
              <Layout title="Top Rated Sellers">
                {
                    topSellers.map((seller,index)=>{
                      return( <Top positiveReview={seller.positiveReview} name={seller.name} address={seller.address} />)
                    })
                }
               
                
              </Layout>
            </>
    )
}
export default Topsellers;