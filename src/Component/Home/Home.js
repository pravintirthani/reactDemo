import React, { Component } from 'react';
import { connect } from 'react-redux'
import { homeAction } from './HomeAction'
import {bindActionCreators} from 'redux'
export class Home extends Component {

  render() {
    return (
      <div>
          THiis Is Home Page
        </div>
    );
  }
}

function mapStateToProps(state){
    return {
      todoList:state.todoList
    }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({homeAction: homeAction}, dispatch);
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)