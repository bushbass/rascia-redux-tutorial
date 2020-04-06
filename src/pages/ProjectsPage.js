import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

function Projects() {
  return (
    <div>
      <Navbar />
      <h1>this is the projects page/component</h1>
    </div>
  );
}
const mapStateToProps = state => {
  currentUser: () => {
    dispatch(chooseUser());
  };
};
export default connect(mapStateToProps)(Projects);
