import{GoogleLogout} from 'react-google-login';

const clientId = "826830747209-gqeu06rb29db7bu4ki1a5733nek60m9s.apps.googleusercontent.com";



function Logout() {

    const onSuccess = () =>
    {
        console.log("log out successful!");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />

        </div>
    )
}

export default Logout;