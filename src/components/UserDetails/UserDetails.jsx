import { useParams } from "react-router-dom";
import { ConsumeContext } from "../../utils/Context";
import "./UserDetails.css"

const UserDetails = () => {
  const {
    state: { users },
  } = ConsumeContext();
  const params = useParams();
  const user = users.find((user) => user.id == params.id);

  if (!user) return;
  return (
    <div className="user__details">
      <img src={user?.image} alt="User Img" />
      <div className="info">
        <p>
          Name: {user.firstName} {user.lastName} 
        </p>
        <p>Email: {user.email}</p>
        {typeof user.company === "string" ? (
          <>
            <p>Company: {user?.company}</p>
            <address>{user?.address}</address>
          </>
        ) : (
          <>
            <p>Company: {user?.company?.address.address}</p>

            <address>
              {`${user?.address.address}, ${user?.address.city}, ${user?.address.state}, ${user?.address.postalCode}`}
            </address>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
