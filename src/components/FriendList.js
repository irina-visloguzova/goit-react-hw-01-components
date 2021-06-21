import React from "react";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li class="item" key={id}>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired      
    })
  )
};

export default FriendList;
