import React, { useState, useEffect } from 'react';
import './App.css';
import LoginButton from "./components/login";
import Logout from "./components/logout";
import { gapi } from 'gapi-script';

const clientId = "826830747209-gqeu06rb29db7bu4ki1a5733nek60m9s.apps.googleusercontent.com";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email"
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsSignedIn);

        if (authInstance.isSignedIn.get()) {
          const profile = authInstance.currentUser.get().getBasicProfile();
          setUserData({
            name: profile.getName(),
            email: profile.getEmail(),
            // Add any other data you need here
            // For example: profile.getImageUrl(), profile.getId()
          });
        }
      });
    };
    gapi.load('client:auth2', start);
  }, []);

  const UserInfoScreen = () => (
    <div>
      <h1>Welcome, {userData.name}</h1>
      <p>Email: {userData.email}</p>
      {/* Display other user data here */}
      <Logout onLogout={() => setIsSignedIn(false)} />
    </div>
  );

  return (
    <div className="App">
      {isSignedIn ? <UserInfoScreen /> : <LoginButton />}
    </div>
  );
}

export default App;
