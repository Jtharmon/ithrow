import React, { useState } from "react";

const EditProfileScreen = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Edit Profile Screen</h1>
      <InputField
        type="text"
        name="name"
        value={name}
        handleInput={handleNameChange}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default EditProfileScreen;
