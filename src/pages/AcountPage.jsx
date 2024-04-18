import { useEffect } from "react";
import PropTypes from "prop-types";
import "./AccountPage.modules.scss";

AcountPage.propTypes = {
  onLogout: PropTypes.func,
};

function AcountPage({ onLogout }) {
  const user = localStorage.getItem("userEmail");
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("userEmail");
      onLogout();
    }, 60000);
  }, [onLogout]);
  return (
    <main>
      <section className="profile-section">
        <img
          src="/connexion_react/profile.png"
          alt="Profile picture"
          className="profile-picture"
        />
        <p className="lineup">
          Hello <span className="profile-email">{user}</span> 👋 ,happy to see
          you again !
        </p>
      </section>
    </main>
  );
}
export default AcountPage;
