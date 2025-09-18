import React, { createContext, ReactNode, useState } from 'react';

export const UsuariosContext = createContext({});

type userProps = {
    children: ReactNode
}

const UsuariosContextProvider = (props: userProps) => {
  const [visibleModalSaved, setVisibleModalSaved] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [visibleModalPermission, setVisibleModalPermission] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [users, setUsers] = useState([
    {
      name: 'Alice Silva',
      email: 'alice@email.com',
      password: 'alice123456',
      id: 1,
    },
    {
      name: 'Bruno Oliveira',
      email: 'bruno@email.com',
      password: 'bruno123',
      id: 2,
    },
    {
      name: 'Carla Souza',
      email: 'carla@email.com',
      password: 'carla123',
      id: 3,
    },
    {
      name: 'Daniel Costa',
      email: 'daniel@email.com',
      password: 'daniel_1233',
      id: 4,
    },
    {
      name: 'Eduarda Lima',
      email: 'eduardo@email.com',
      password: 'eduardo123',
      id: 5,
    },
  ]);
  const [recentActions, setRecentActions] = useState(['']);

  const contextValue = {
    users,
    setUsers,
    visibleModalSaved,
    setVisibleModalSaved,
    isAdmin,
    setIsAdmin,
    visibleModalPermission,
    setVisibleModalPermission,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    recentActions,
    setRecentActions
  };

  return (
    <UsuariosContext.Provider value={contextValue}>
      {props.children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosContextProvider;
