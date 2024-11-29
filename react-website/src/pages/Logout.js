import { GoogleLogout } from "react-google-login"


const clientId = "316197304295-rpp5joramj7pbku5oht3m56t0e41uq6s.apps.googleusercontent.com"


function Logout() 
{
    const onSucces = () =>{
        console.log("LogOut Successfull")
    }
    return(
        
            <div id='signOutButton'>
              <GoogleLogout
              clientId={clientId}
              buttonText={"Logout"}
             onLogoutSuccess={onSucces}
/>
</div>
    )   
}
export default Logout;