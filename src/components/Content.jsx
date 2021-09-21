import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Topbar from './Topbar';
import AddProduct from '../pages/AddProduct';
import ListSearchProducts from '../pages/ListSearchProducts';
import Archivedproducts from '../pages/Archivedproducts';
import ArchiveCapacitaciones from '../pages/Archivedcapacitaciones';
import AddCapacitaciones from '../pages/AddCapacitaciones';
import ListSearchCapacitaciones from '../pages/ListSearchCapacitaciones';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames('content-admin', { 'is-open': sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route
        exact
        path={['/productlist', '/productlist/:page']}
        component={ListSearchProducts}
      />
      <Route
        exact
        path={['/capacitacioneslist', '/capacitacioneslist/:page']}
        component={ListSearchCapacitaciones}
      />
      <Route exact path="/addcapacitacion" component={AddCapacitaciones} />
      <Route exact path="/addproduct" component={AddProduct} />
      <Route
        exact
        path={['/productarchived', '/productarchived/:page']}
        component={Archivedproducts}
      />
      <Route
        exact
        path={['/capacitacionarchived', '/capacitacionarchived/:page']}
        component={ArchiveCapacitaciones}
      />
      <Route exact path="/Page-1" component={() => 'Page-1'} />
      <Route exact path="/Page-2" component={() => 'Page-2'} />
      <Route exact path="/page-1" component={() => 'page-1'} />
      <Route exact path="/page-2" component={() => 'page-2'} />
      <Route exact path="/page-3" component={() => 'page-3'} />
      <Route exact path="/page-4" component={() => 'page-4'} />
    </Switch>
  </Container>
);

export default Content;
