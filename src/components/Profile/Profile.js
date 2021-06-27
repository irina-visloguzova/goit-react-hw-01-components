import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = user => {
  return (
    <div>
      <div class={styles.profile}>
        <div class={styles.description}>
          <img
            src={user.avatar}
            alt="Аватар пользователя"
            class={styles.avatar}
          />
          <p class={styles.name}>{user.name}</p>
          <p class={styles.tag}>@{user.tag}</p>
          <p class={styles.location}>{user.location}l</p>
        </div>

        <ul class={styles.stats}>
          <li>
            <span class={styles.label}>Followers</span>
            <span class={styles.quantity}>{user.stats.followers}</span>
          </li>
          <li>
            <span class={styles.label}>Views</span>
            <span class={styles.quantity}>{user.stats.views}</span>
          </li>
          <li>
            <span class={styles.label}>Likes</span>
            <span class={styles.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
