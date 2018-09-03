import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

class App extends Component {
  toggleAuth() {
    this.props.changeAuth(this.props.auth);
  }

  renderButton() {
    if (this.props.auth) {
      return <button onClick={this.toggleAuth.bind(this)}>Sign Out</button>;      
    }
    return <button onClick={this.toggleAuth.bind(this)}>Sign In</button>;
  }

  renderHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post a Comment</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render () {
    return ( 
      <div>
        {this.renderHeader()}
        <Route path = "/post" component = {CommentBox}/> 
        <Route path = "/" exact component = {CommentList}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, actions)(App);