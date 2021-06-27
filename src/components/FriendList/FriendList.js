import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
};

const FriendList = ({ friends }) => (
  <div class={styles.friends}>
    <ul class={styles.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li class={styles.item} key={id}>
          <span class={styles.status} style={{ color: friendOnline(isOnline) }}>
            {' '}
            ●
          </span>
          <img class={styles.avatar} src={avatar} alt={name} width="48" />
          <p class={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
