import * as React from 'react';
import { UserList } from '../users/UserList';
import { inStoreProvider } from '../store/connectStore';

const UserListRoot = () => {
  return <UserList />;
};

export default inStoreProvider(UserListRoot);
