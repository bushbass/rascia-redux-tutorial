import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

function Blog() {
  return (
    <div>
      <Navbar />
      <h1>this is the Blog page/component</h1>
    </div>
  );
}
const mapStateToProps = state => {
  currentUser: () => {
    dispatch(chooseUser(currentUser));
  };
};

export default connect(mapStateToProps)(Blog);
