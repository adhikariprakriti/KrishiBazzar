import React from 'react'
import Layout from '../Layout/Layout' 
import Top from "../Top/Top"


const Topsellers=()=>{
    return(
            <>
              <Layout title="Top Rated Sellers">
                <Top/>
                <Top/>
                <Top/>
                <Top/>
              </Layout>
            </>
    )
}
export default Topsellers;