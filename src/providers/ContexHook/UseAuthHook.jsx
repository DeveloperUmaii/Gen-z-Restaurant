import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider';

const UseAuthHook = () => {
    return useContext(AuthContext);
};

export default UseAuthHook;