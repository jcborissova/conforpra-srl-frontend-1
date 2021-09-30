import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Administrator from '../pages/Administrator';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

const AdministratorRouter = () => (
  <Router>
    <Switch>
      <UnauthenticatedRoute exact path="/login" component={Login} />
      <AuthenticatedRoute path="/administrador" component={Administrator} />
    </Switch>
  </Router>
);

export default AdministratorRouter;
