import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { ProfileImage } from "../components/adminComponents/ProfileImage";
import ProfileForm from "../components/adminComponents/ProfileForm";

const AdminProfile = () => {
  return (
    <div>
      <ProfileImage></ProfileImage>
      <ProfileForm></ProfileForm>
    </div>
  );
};

export default AdminProfile;
