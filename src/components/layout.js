import * as React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1>this is a layout</h1>
      {children}
    </div>
  )
}

export default Layout;