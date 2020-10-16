import React from 'react'
import Aux from '../../hoc/Auxilliary'
import Toolbar from '../Navbar/Toolbar/Toolbar'

function DashboardLayout(props) {   
    return (
        <Aux>
            <Toolbar />

                 {props.children} 
        </Aux>
    )
}

export default DashboardLayout
