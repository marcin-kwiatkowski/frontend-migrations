import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserList.scss';
import { getUsers } from './usersSelectors';
import { User } from '../store/users';
import { selectUser } from './usersActions';

export const UserList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleSelect = (user: User) => {
    dispatch(selectUser(user));
  };

  return (
    <div className={styles.list}>
      <ul>
        {users.map((user: User, key: number) => (
          <li className={styles.user} key={key} onClick={() => handleSelect(user)}>
            {user.name + ' ' + user.surname}
          </li>
        ))}
      </ul>
    </div>
  );
};
