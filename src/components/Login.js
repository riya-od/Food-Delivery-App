import React from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
};

export default Login;
