import React from 'react'
import { connect } from 'react-redux'

 const Home = (props) => {
  return (
    <div>
       <h1> my name is {props.name}</h1> 
       <h1> my email id {props.email}</h1>
       <h1> my address is {props.address}</h1> 

    </div>
  )
}

function mapStateToProps(state){
    return{
        count:state.count,
        name:state.name,
        email:state.email,
        address:state.address
    }
}

export default connect(mapStateToProps) (Home)