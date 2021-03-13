import React from 'react';
import axios from 'axios';
class Sign extends React.Component{
  constructor(props){
    super(props)
    this.state={
         author:'',
         password:''
    }
    this.onClick=this.onClick.bind(this)
    this.handChange=this.handChange.bind(this)
  }
  
  handChange(event){
    this.setState({
      [e.target.placeholder] :e.target.value
   })
  }
  

  onClick(){
    axios.post("/tunisia/login",{author:this.state.author,password:this.state.password})    
    .then((result)=>console.log('added',result))
    .catch(err=>console.log(err))
}

  render(){
    return(
      <div id="sign">
        <h1 id="signh1">Tunisia Like You've Never See Before</h1>
        <div id="signp"><p>In this website you'll see Tunisia like you are not used to see .<br></br>here you'll discover the beautiful side of this country</p></div>
        <div className="loginbox">
        <form>
           <p>Username</p>
           <input id="username" type="text" name="username" placeholder="Username" onChange={this.handChange}></input>
           <p>Password</p>
           <input id="password" type="password" name="password" placeholder="Password" onChange={this.handChange}></input>
           <button id="btnsin" onClick={()=>this.props.handleview('Home')} type='button'>Sign In</button>
           <p>If you do not have an account yet click on this button below</p>
           <button id="btnsup" onClick={this.onClick} onClick={()=>this.props.handleview('Home')} type="button">Sign Up</button>
        </form>
        </div>
      </div>
    )
  }
}
export default Sign;