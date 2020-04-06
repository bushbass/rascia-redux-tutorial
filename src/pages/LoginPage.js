import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

function Login() {
  const handleSetCurrentUser = event => {
    setCurrentUser(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <h1>this is the Login page/component</h1>
      <label htmlFor='users'>Choose a user:</label>
      <select value={currentUser} onChange={handleSetCurrentUser} id='users'>
        <option value='alex'>alex</option>
        <option value='genny'>genny</option>
        <option value='james'>james</option>
        <option value='kate'>kate</option>
      </select>
      <p>{currentUser}</p>
    </div>
  );
}

const mapStateToProps = state => {
  currentUser: () => {
    dispatch(chooseUser(currentUser));
  };
};
const mapDispatchToProps = dispatch => {
  setCurrentUser;
};
export default connect(mapStateToProps)(Login);
