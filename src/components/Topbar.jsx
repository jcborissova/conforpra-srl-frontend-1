import { Navbar, Button } from 'reactstrap';
import { Menu } from '@material-ui/icons';

const Topbar = ({ toggleSidebar }) => {
  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button
        color="light"
        onClick={() => {
          toggleSidebar();
        }}
      >
        <Menu
          style={{
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
        />
      </Button>
    </Navbar>
  );
};

export default Topbar;
