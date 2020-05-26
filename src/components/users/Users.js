<<<<<<< HEAD
import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
=======
import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
>>>>>>> 6dcd7935ead5146a87510330242376f8cd6ba2a6
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  if (loading) {
<<<<<<< HEAD
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Users
=======
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.proptype = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
>>>>>>> 6dcd7935ead5146a87510330242376f8cd6ba2a6
