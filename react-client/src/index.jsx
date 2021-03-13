import React from 'react';
import ReactDOM from 'react-dom';
import  Sign from './components/Sign.jsx';
import Home from './components/Home.jsx'
import PostTn from './components/PostTn.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      changeView:'Sign',
    }
    this.onclick=this.onclick.bind(this)
  }
 onclick(view){
   this.setState({
     changeView:view
   })
 }

  render () {
    if(this.state.changeView==='Sign'){
      var render = <Sign handleview={this.onclick}/>
    }
    else if(this.state.changeView==='Home'){
      var render =<Home handleview={this.onclick}/>
    }
    else if(this.state.changeView==='PostTn'){
      var render =<PostTn handleview={this.onclick}/>
    }
    return (<div id='app'>
      {
        <div>
          <nav>
            <img src="https://www.discovertunisia.com/en/sites/all/themes/ontt/logo.png" alt="logo" id='logo'></img>
            <ul>
              <li className='but'><a href="https://www.facebook.com/bechir.ghouma.104/">Contact</a></li>
              <li className='but'><a href="https://www.facebook.com/bechir.ghouma.104//">Feedback</a></li>
              <li className='but'><a href="">About Us</a></li>
              <li className='but'><a href="https://www.rbktunisia.com/">Sponsor</a></li>
            </ul>
          </nav>
        {render}
        </div>
      }
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
