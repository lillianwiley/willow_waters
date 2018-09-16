import React, {Component} from 'react';
import axios from 'axios';

class Portfolio extends Component {
  constructor(){
    super();

    this.state = {
      portfolio: []
    }
  }

  componentDidMount(){
    axios.get('/api/products')
  }

  render(){
    return (
      <div>
        
      </div>
    )
  }
}

export default Portfolio;
