import { GoogleLogout } from "react-google-login";

const clientId =
  "145971082055-kp20trftu3a7c2bja1dtjtfa22di36pc.apps.googleusercontent.com";

const LogOut = ({ onSuccess }) => {
  //   const onSuccess = () => {
  //     alert("Logout made succesfully");
  //   };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      >
        Logout
      </GoogleLogout>
    </div>
  );
};

export default LogOut;
