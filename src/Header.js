import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h2 className="daHead" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999, textAlign: 'center' }}>
        CITY EXPLORER
      </h2>
    );
  }
}

export default Header;
