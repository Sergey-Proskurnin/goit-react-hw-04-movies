import React from 'react';

import Navigation from 'components/Navigation';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
  <header className={s.AppBar}>
      <Navigation />
    </header>
  );
};

export default AppBar;
