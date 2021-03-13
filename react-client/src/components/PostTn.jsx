import React from 'react';
import axios from 'axios';

class PostTn extends React.Component{
    constructor(props){
        super(props)
        this.state={
              title:'',
              author:'',
              url:'',
              description:'',
        }
        this.handleChange=this.handleChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(){
        axios.post("/tunisia/postComment",{title:this.state.title,author:this.state.author,url:this.state.url,description:this.state.description})
        
        .then((result)=>console.log('added',result))
        .catch(err=>console.log(err))
    }
    handleChange(e){
      
        this.setState({
           [e.target.placeholder] :e.target.value
        })
    }
    render(){
        return(
            <div id='postdiv'>
                <h1 id="signph1">Post Your Blog About Tunisia Here</h1>      
                <div className='post'>              
                <form>
                    <label className='lab'>Title : </label><br></br>
                    <input type="text" placeholder="title" onChange={this.handleChange} className="inp"></input><br></br><br></br>
                    <label className='lab'>Author : </label><br></br>
                    <input type="text" placeholder="author" onChange={this.handleChange} className="inp"></input><br></br><br></br>
                    <label className='lab'>Url : </label><br></br>
                    <input type="url" placeholder="import some media" onChange={this.handleChange}className="inp"></input><br></br><br></br>
                    <label className='lab'>Description : </label><br></br>
                    <input type="text" placeholder="description" onChange={this.handleChange}className="inp"></input><br></br><br></br>
                    <button onClick={this.onSubmit}  id="butt">Post</button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </form>
                
                </div> 
                
            </div>
        )
    }
}
export default PostTn ; 