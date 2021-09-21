import { useState } from 'react';
import classNames from 'classnames';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const SubMenu = ({ menu: { title, items, icon } }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  return (
    <div>
      <NavItem
        onClick={toggle}
        className={classNames({ 'menu-open': !collapsed })}
      >
        <div>
          <NavLink className="dropdown-toggle text-black py-0">
            {icon}
            {title}
            {collapsed ? (
              <span
                style={{
                  verticalAlign: 'middle',
                  marginLeft: '10px',
                  marginRight: '30px',
                }}
              >
                <KeyboardArrowDownIcon />
              </span>
            ) : (
              <span
                style={{
                  verticalAlign: 'middle',
                  marginLeft: '10px',
                  marginRight: '30px',
                }}
              >
                <KeyboardArrowUpIcon />
              </span>
            )}
            <hr style={{ marginBottom: '0px' }} className="bg-gray-400" />
          </NavLink>
        </div>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames('items-menu ', { 'mb-1': !collapsed })}
      >
        {items.map((item, index) => (
          <NavItem key={index} style={{ marginLeft: '65px' }}>
            <NavLink tag={Link} to={item.target} className=" py-0 text-black">
              {item.title}
              <hr style={{ marginBottom: '10px' }} className=" bg-gray-400" />
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
