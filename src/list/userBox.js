import React from 'react';
import { Media } from 'react-bootstrap';
const UserBox = ({ user }) => (
  <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={user.picture.thumbnail}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>{user.name.first} {user.name.last} </h5>
    <p>
      E-Mail: {user.email} <br />
      Teléfono: {user.phone}
    </p>
  </Media.Body>
  </Media>
);

export default UserBox