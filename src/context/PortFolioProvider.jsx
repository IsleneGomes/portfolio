import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortFolioContext from './PortfolioContext';

export default function PortFolioProvider({ children }) {
  const [user, setUser] = useState({ nome: '' });

  return (
    <PortFolioContext.Provider value={ { user, setUser } }>
      { children }
    </PortFolioContext.Provider>
  )
}

PortFolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
