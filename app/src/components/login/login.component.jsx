import { GoogleLogin } from "react-google-login";

import "./login.styles.scss";

const clientId =
  "145971082055-kp20trftu3a7c2bja1dtjtfa22di36pc.apps.googleusercontent.com";

const Login = ({ onSuccess, onFailure }) => {
  return (
    <div>
      <div className="page__container">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          style={{ padding: 50 }}
        />
      </div>
    </div>
  );
};

export default Login;

// clientID: 145971082055 - kp20trftu3a7c2bja1dtjtfa22di36pc.apps.googleusercontent.com
// clientSecret: u5X1mFtZAMbUo19sl6ZsR6Et
