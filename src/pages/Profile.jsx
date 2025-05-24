import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Profile() {
    const { user } = useContext(UserContext);
  
    return (
        <>
            <div className="p-8 sm:px-16 sm:py-12">
                <h1 className="text-4xl pb-4">Your account details :-</h1>
                <h3 className="text-2xl pb-2">Name : {user.name}</h3>
                <h3 className="pb-2">Email : {user.email}</h3>
                <h3 className="pb-2">Contact : {user.contactNo}</h3>
            </div>
        </>
    );
};

export default Profile;