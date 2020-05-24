import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  margin-right: 6px;
  padding: 6px;
  line-height: 40px;

  border: 1px solid blue;
  border-radius: 5px;

  color: black;
  text-decoration: none;
`;

export default () => {
  const [showDevNavigation, setShowDevNavigation] = useState(false);

  useEffect(
    function addShowDevelopmentNavigationKeyboardShortcut() {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.code === 'KeyD') {
          setShowDevNavigation(!showDevNavigation);
        }
      });
    },
    [showDevNavigation],
  );

  return showDevNavigation ? (
    <div>
      <NavLink to="/">Home</NavLink>
    </div>
  ) : null;
};
