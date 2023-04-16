import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
     name: 'Max Schwarz',
     image:'https://image.freepik.com/free-vector/cartoon-monster-face-avatar-halloween-monster_6996-1120.jpg',
     places:3
    }  
  ];
  
  return <UsersList items={USERS} />;
};

export default Users;
