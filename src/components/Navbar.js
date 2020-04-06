import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = () => (
  <nav>
    <section>
      <Link to='/'>Login</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/login'>Current User</Link>
    </section>
  </nav>
);
export default connect(mapStateToProps)(Navbar);
