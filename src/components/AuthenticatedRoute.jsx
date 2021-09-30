import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../providers/auth';

const AuthenticatedRoute = (props) => {
  const auth = useAuth();
  return auth.accessToken ? <Route {...props} /> : <Redirect to="/login" />;
};

export default AuthenticatedRoute;
