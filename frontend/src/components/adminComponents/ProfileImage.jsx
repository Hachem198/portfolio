import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
export const ProfileImage = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="flex flex-col items-center justify-center p-8">
      {" "}
      <div className="group">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No image</span>
            </div>
          )}
        </div>

        <button
          onClick={triggerFileInput}
          className="ml-28 top-55 sm:top-40 absolute bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full shadow-md transition-all duration-300 "
        >
          <FaCamera className="text-lg" />
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      <h2 className="mt-4  text-xl font-semibold text-gray-800">
        Profile Photo
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Click the camera icon to upload a new profile picture
      </p>
    </div>
  );
};
