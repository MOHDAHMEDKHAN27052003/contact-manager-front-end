import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Profile() {
    const { user } = useContext(UserContext);
  
    return (
        <>
            <div>
                <h1>Your account details :-</h1>
                <h3>Name : {user.name}</h3>
                <h3>ID : {user.id}</h3>
                <h3>Email : {user.email}</h3>
                <h3>Contact : {user.contactNo}</h3>
            </div>
        </>
    );
};

export default Profile;