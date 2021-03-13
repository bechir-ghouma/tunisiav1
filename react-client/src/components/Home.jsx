import React from 'react';
import axios from 'axios';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      comments:[],
      view:true
    }
    this.handleClick=this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get("/tunisia")
     .then((response) => 
       this.setState({comments:response.data})
     )
 } 
deleteEvent(e){
console.log()
    axios.delete(`/tunisia/${e.target.id}`)
    .then(response=>console.log(response.data))
}    
handleClick(){
    this.setState({view:!this.state.view})
}
render(){
return(
<div>
    {this.state.view ? this.state.comments.map((elm,i)=><div key={i}><p id="title">{elm.title}<br></br></p><img id="homeImg" src={elm.url} alt='images'></img><p>{elm.description}<br></br> {elm.author}</p><button id={elm.id} onClick={this.deleteEvent} className='bout'>Delete This Comment</button><br></br></div>) : ''}
    <div id='el'>
    <button onClick={this.handleClick} className='boutu'>hide/show</button>
    <button onClick={()=>this.props.handleview('PostTn')} type="button" id='boutu'>Post Now</button>
    </div>
</div>
)
}     
}

export default Home;