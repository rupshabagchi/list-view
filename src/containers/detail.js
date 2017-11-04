import React, {Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component {
  render(){
    console.log(this.props.book)
    if(!this.props.book){
      return(<div> Select an item from the list.</div>);
      }

    return(
      <div>

        <h3>You selected:</h3>
        <div>{this.props.book.title}</div>
      </div>
      );
    }
}

function mapStateToProps(state){
  console.log(state)
  return {
    book: state.selectedbook
  };
}

export default connect(mapStateToProps)(BookDetail);
