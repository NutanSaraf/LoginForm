import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//forms maintain state
/*{ <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
    <input type="submit" value="Submit" />
</form>} */

//we achive this in react using controlled component
//controlled vs uncontrolled component
//cc - react handles data
//ucc - DOM handles data
//mutable vs immutable state

class MyFOrm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'',password: ''};
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event){
    this.setState({value: event.target.value});
  }
  
  handlePassChange(event){
    this.setState({password: event.target.password});
  }
  handleSubmit(event){
    alert('Are you sure you want to submit form?'+this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <div class="login">
        <form class="login-container" onSubmit={this.handleSubmit}>
        <h2 class="login-header">Sign in</h2>
         <p><input type="text" value={this.state.value} onChange={this.handleUserChange} placeholder="Enter username" required /></p>
        
        
          <p><input type="password" value={this.state.password} onChange={this.handlePassChange} placeholder="Enter password" required /></p>
        
          <input type="submit" value="Submit" />
        </form>
        </div>
    );
  }

}

ReactDOM.render(
  <MyFOrm />, document.getElementById('root')
 );