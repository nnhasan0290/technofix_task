import { useState } from "react";
import Card from "../../ui/Card/Card";
import { ConsumeContext } from "../../utils/Context";
import "./Container.css";

const Container = () => {
  const {
    state: { users, show, search },
    dispatch,
  } = ConsumeContext();

  return (
    <div className="container">
      <div className="user__container">
        {users
          .slice(0, show)
          .filter(
            (u) =>
              u.firstName.toLowerCase().includes(search.toLowerCase()) ||
              u.lastName.toLowerCase().includes(search.toLowerCase())
          )
          .map((user, i) => (
            <Card key={i} user={user} />
          ))}
      </div>
      {show !== 30 && (
        <button
          className="load_btn"
          onClick={() => dispatch({ type: "SHOW_USER" })}
        >
          Load More User
        </button>
      )}
    </div>
  );
};

export default Container;
