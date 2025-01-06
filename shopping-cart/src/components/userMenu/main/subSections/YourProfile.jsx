import { useContext } from "react"
import { SessionContext } from "../../../../contexts/session"
import { useSessionActions } from "../../../../hooks/useSessionActions";
import { useNavigate } from "react-router-dom";

export const YourProfile = () => {
  const { userSession } = useContext(SessionContext)
  const navigate = useNavigate();
  const { LogOut } = useSessionActions();

  const hdlSessionBtn = () => {
      if (userSession) {
        LogOut();
        navigate("/home");
      }
  };

  return (
      userSession 
      ? 
      <section className="your-profile-section">
        <div className="user-info">
          <img src="https://i.pinimg.com/736x/fd/d7/80/fdd7804a1759fa82aecfd9823339ef05.jpg" alt="your profile icon"/>
          <div>
            <h2>{userSession.name}</h2>
            <p>{userSession.email}</p>
          </div>
        </div>
        <div className="user-stats">
          <h3>Account name:</h3>
          <p> {userSession.name}</p>
        </div>
        <div className="user-stats">
          <h3>Account email:</h3>
          <p> {userSession.email}</p>
        </div>
        <div className="user-stats">
          <h3>Phone number:</h3>
          <p>{userSession.phone}</p>
        </div>
        <div className="user-stats">
          <h3>Address:</h3>
          <p>{userSession.address}</p>
        </div>
        <section className="user-profile-actions">
          <button onClick={hdlSessionBtn}> Log Out</button>
        </section>
      </section>
      : <section> You are not logged in</section>
  )
}
