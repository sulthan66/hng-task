import React, { Fragment, useState } from "react";

function Profile() {
  const [username, setUsername] = useState(false);

  const handleEnter = () => {
    setUsername(true);
  };

  const handleLeave = () => {
    setUsername(false);
  };

  return (
    <Fragment>
      <header className="profile-header">
        <img src="/assets/pic.jpeg" alt="Sultan's Profile" id="profile__img" />
        <h1 id="twitter" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          Sultan
        </h1>
        <span id="slack">{username ? "LordSultan" : null}</span>

        <div className="icon-div" id="mobile-share">
          <img
            src="/assets/mobile-share.png"
            alt="share icon"
            className="share"
          />
        </div>

        <div className="icon-div" id="desktop-share">
          <img
            src="/assets/desktop-share.png"
            alt="desktop-share icon"
            className="share"
          />
        </div>
      </header>
    </Fragment>
  );
}

export default Profile;
