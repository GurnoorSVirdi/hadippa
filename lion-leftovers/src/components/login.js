import{ GoogleLogin} from 'react-google-login';

const clientId = "826830747209-gqeu06rb29db7bu4ki1a5733nek60m9s.apps.googleusercontent.com";



function Login () { 
    const onSuccess = (res) => {
        console.log("Login Success! current user: ", res.profileObj);
    }
    
    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }

    return(
        <div id ="signInButton">
            <GoogleLogin
                clientId = {clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy='single_host_origin'
                isSignedIn={true}
            />
        </div>
    )
}

export default Login; 