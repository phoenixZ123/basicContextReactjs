import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const Info = () => {
  const cc = useContext(UserContext);
  const [editName, setEditNamed] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const named = event.target.value;

    setEditNamed(named);
  };

  const Update = () => {
    cc.user.setName(editName);
  };

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          backgroundColor: cc.theme.primary.main,
        }}
      >
        Info also context data {cc.user.name}
        <br />
        edit name is {editName}
        <input
          type="text"
          style={{ margin: "10px" }}
          onChange={handleChange}
        ></input>
      </p>
      <button onClick={Update}>Update</button>
    </div>
  );
};

export default Info;
