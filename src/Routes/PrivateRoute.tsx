import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface PrivateRouteProps {
  // path: string;
  element: React.ReactNode;
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({  element, children }) => {
  const userToken = useSelector((state: any) => state.expressTrade.expressTrade.userToken);

  return userToken === '' ? (
    <Navigate to="/login" replace />
  ) : (
    children ? <>{children}</> : <>{element}</>
  );
};

export default PrivateRoute;
