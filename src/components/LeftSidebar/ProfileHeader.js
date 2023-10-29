import React ,{useEffect, useState}from "react";

function ProfileHeader({ user }) {
  const [imgss,setImgss]=useState(null);
  const [namess,setNames]=useState(null);

      useEffect(()=>{
        if(user.id===1){
          setImgss("https://media.licdn.com/dms/image/D4D03AQHDf8b8q2xZUQ/profile-displayphoto-shrink_400_400/0/1694112529324?e=1703721600&v=beta&t=qA9sYNNVdldOlFVK7Q5q-w4qG0J0Cgf8uXzHZcElnK4")
          setNames("NEHA MADHESHIYA")

        }else{
          setImgss(user.image);
          setNames(user.name);
        }

      })

  return (
    <>
      <div className="header">
        <img className="avatar" src={imgss} alt="profile-pic" />
        <p><i>{namess}</i></p>
      </div>
    </>
  );
}

export default ProfileHeader;