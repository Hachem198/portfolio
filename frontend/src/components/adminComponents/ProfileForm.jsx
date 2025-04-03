import React, { useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    aboutMe: "",
    profession: "",
    aboutProfession: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl  rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-purple-800 text-center mb-6">
          Profile Information
        </h2>

        <div className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="fullName"
              className="text-purple-700 font-medium text-center mb-2"
            >
              FULL NAME
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              required
            />
          </div>

          {/* About Me */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="aboutMe"
              className="text-purple-700 font-medium text-center mb-2"
            >
              ABOUT ME
            </label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              required
            ></textarea>
          </div>

          {/* Profession */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="profession"
              className="text-purple-700 font-medium text-center mb-2"
            >
              PROFESSION
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              required
            />
          </div>

          {/* About Profession */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="aboutProfession"
              className="text-purple-700 font-medium text-center mb-2"
            >
              ABOUT PROFESSION
            </label>
            <textarea
              id="aboutProfession"
              name="aboutProfession"
              value={formData.aboutProfession}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              required
            ></textarea>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="email"
              className="text-purple-700 font-medium text-center mb-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="address"
              className="text-purple-700 font-medium text-center mb-2"
            >
              ADDRESS
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="phoneNumber"
              className="text-purple-700 font-medium text-center mb-2"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Save Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
