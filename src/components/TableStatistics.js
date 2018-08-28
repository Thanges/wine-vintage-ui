import React, { Component } from 'react';
import { connect } from "react-redux";



class ChartStatistics extends Component {
  render() {
        const { posts } = this.props;

    return (
      <div>
       <table>
         {posts.map( item =>    
          <tr>
           return (
              {item.map( row => 
                  <td>{row.amt}</td>
              )}
            )      
         </tr>   
        )}
        </table>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(ChartStatistics);

