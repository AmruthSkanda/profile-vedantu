import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

import { NAV_ITEMS } from "../utils/constants";
import styles from "../styles/index.css";

const Nav = () => {
  const [selectedTab, setSelectedTab] = React.useState("1");

  return (
    <nav>
      <ul onClick={({ target }) => setSelectedTab(target.id)}>
        {NAV_ITEMS.map((navItem) => {
          const itemId = `${navItem.id}`;
          const listItemStyles = classnames({
            "item": true,
            "selectedItem": selectedTab === itemId
          });

          return (
            <li 
              id={itemId}
              key={navItem.id}
              className={listItemStyles}>
                {navItem.label}
            </li>
          );
        }
        )}
      </ul>
    </nav>
  )
}

Nav.propTypes = {

};

export default Nav;
