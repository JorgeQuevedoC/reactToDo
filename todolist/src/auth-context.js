import React from 'react';

const authContext = React.createContext({ status: false, login: () => {}, logout: () => {} });

export default authContext;
