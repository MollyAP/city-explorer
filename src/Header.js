import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="daHead" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999, textAlign: 'center' }}>
        <h2>CITY EXPLORER</h2>
      </header>
    );
  }
}

export default Header;
