import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Profile.css";

export default function Profile() {
  const { email, logout, getProfile } = useContext(UserContext);
  const [profileEmail, setProfileEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfileEmail(data.email);
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile">
      <h2>Mi Perfil</h2>
      <p className="profile-email">📧 {profileEmail || email}</p>
      <button className="profile-btn" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
