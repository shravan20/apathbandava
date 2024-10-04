import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
    const handleLogin = async (response) => {
        console.log(response);
        // Handle Google OAuth response
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin onSuccess={handleLogin} onError={() => console.log('Login Failed')} />
        </GoogleOAuthProvider>
    );
};

export default GoogleAuth;
