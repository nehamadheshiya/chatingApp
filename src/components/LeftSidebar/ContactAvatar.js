import React from "react";

// import {data}
function ContactAvatar({ image }) {
  return (
    <div>
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

export default ContactAvatar;