import React, {Component} from 'react';
import Header from '../components/Header/Header';

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <Header/>
      </div>
    );
  }
}

export default HomePageContainer;
