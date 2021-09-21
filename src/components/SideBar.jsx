import { Nav } from 'reactstrap';
import classNames from 'classnames';
import User from '../img/icons/usuario.svg';
import SubMenu from './SubMenu';
import { Chat, Dashboard } from '@material-ui/icons';

const menus = [
  {
    title: 'Productos',
    icon: (
      <Chat
        style={{
          verticalAlign: 'middle',
          marginLeft: '10px',
          marginRight: '30px',
        }}
      />
    ),
    items: [
      {
        title: 'Listar',
        target: '/productlist',
      },
      {
        title: 'Agregar',
        target: '/addproduct',
      },
      {
        title: 'Archivados',
        target: '/productarchived',
      },
    ],
  },
  {
    title: 'Capacitaciones',
    icon: (
      <Dashboard
        style={{
          verticalAlign: 'middle',
          marginLeft: '10px',
          marginRight: '30px',
        }}
      />
    ),
    items: [
      {
        title: 'Listar',
        target: '/capacitacioneslist',
      },
      {
        title: 'Agregar',
        target: '/addcapacitacion',
      },
      {
        title: 'Archivados',
        target: '/capacitacionarchived',
      },
    ],
  },
];

const SideBar = ({ isOpen, toggle }) => {
  const listMenu = menus.map((menu, key) => {
    return <SubMenu menu={menu} key={key} />;
  });

  return (
    <div className={classNames('sidebar', { 'is-open': isOpen })}>
      <div className="flex flex-col items-center sidebar-header text-center p-5">
        <span
          color="info"
          onClick={toggle}
          style={{ color: '#fff', margin: '0px' }}
        >
          &times;
        </span>
        <img
          src={User}
          alt="usuario"
          height="120px"
          width="120px"
          className="mb-3"
        />
        <p style={{ marginBottom: '5px' }}>Lorem ipsum</p>
        <p style={{ fontStyle: 'italic', fontSize: '15px' }}>Lorem@Ipsum.com</p>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-4 pt-4">
          {listMenu}
        </Nav>
      </div>
    </div>
  );
};

export default SideBar;
