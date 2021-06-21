import React from 'react';
import PropTypes from "prop-types";

const Profile = (user) => {
return <div>
  <div class="profile">
   <div class="description">
     <img
      src={user.avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{user.name}</p>
    <p class="tag">@{user.tag}</p>
    <p class="location">{user.location}l</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
</div>
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;