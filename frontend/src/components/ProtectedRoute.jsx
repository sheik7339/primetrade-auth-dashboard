
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ token, children }) => {
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  token: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;
