import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectbook} from '../actions/index';

class BookList extends Component {
  renderList(){
      if(!this.props.books){
        return(<div>No data</div>);
      }
      return this.props.books.map((book) => {
        return(<li onClick={() => this.props.selectbook(book)} key={book.title} className="list-group-item">{book.title}</li>);
      });
  }

  render(){
      return(
          <ul className="list-group col-sm-2">{this.renderList()}</ul>
      );
  }
}

  function mapStateToProps(state){
    return {
      books: state.books
    };
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({selectbook: selectbook}, dispatch);
  }


export default connect(mapStateToProps,mapDispatchToProps)(BookList);
