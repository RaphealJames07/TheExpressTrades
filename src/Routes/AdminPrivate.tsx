import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

interface AdminPrivateProps {
    // path: string;
    element: React.ReactNode;
    children?: React.ReactNode;
}

const AdminPrivate: React.FC<AdminPrivateProps> = ({element, children}) => {
    const userToken = useSelector(
        (state: any) => state.expressTrade.expressTrade.userToken
    );
    const user = useSelector(
        (state: any) => state.expressTrade.expressTrade.tradeUser
    );

    return userToken === "" || !user.isAdmin ? (
        <Navigate to="/login" replace />
    ) : children ? (
        <>{children}</>
    ) : (
        <>{element}</>
    );
};

export default AdminPrivate;
