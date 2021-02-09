import React ,{useEffect,useState} from 'react'
import Layout from '../Layout/Layout' 
import Top from "../Top/Top"
import axios from 'axios'


const TopBuyers=()=>{
  const [topBuyers,setTopBuyers]=useState([])


useEffect(()=>{
   axios.get('http://localhost:4000/topbuyers')
   .then(res=>{
      console.log(res['data']);
      setTopBuyers(res['data'])
      
   })
},[])
    return(
            <>
              <Layout title="Top Rated Buyers">
              {
                    topBuyers.map((buyer,index)=>{
                      return( <Top positiveReview={buyer.positiveReview} name={buyer.name} address={buyer.address} />)
                    })
                }
              </Layout>
            </>
    )
}
export default TopBuyers;