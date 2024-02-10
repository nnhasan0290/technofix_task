import { useNavigate } from "react-router-dom";
import Link from "../Link/Link";
import "./Card.css";

const Card = ({ user }) => {
  const navigate = useNavigate()
  return (
    <div className="card">
      <div className="card__img">
        <div
          className="card__bgImg"
          style={{
            backgroundImage: `url(${user.image})`,
          }}
        ></div>
        <img src={user.image} alt="" />
      </div>

      <div className="card__info">
        <Link onClick={() => navigate(`/${user.id}`)} value={`${user.firstName} ${user.lastName}`} />
        <p style={{ fontWeight: "bold" }}>Email: {user.email}</p>

        {typeof user.company === "string" ? (
          <>
            <p style={{ fontWeight: "bold" }}>Company: {user?.company}</p>
            <address>{user?.address}</address>
          </>
        ) : (
          <>
            <p style={{ fontWeight: "bold" }}>
              Company: {user?.company?.address.address}
            </p>

            <address>
              {`${user?.address.address}, ${user?.address.city}, ${user?.address.state}, ${user?.address.postalCode}`}
            </address>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
