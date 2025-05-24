import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignIn() {
    const { register, handleSubmit} = useForm();
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

        const userWithEmail = allUsers.find(user => user.email === data.email);

        if (!userWithEmail) {
            toast.error("This Email does not exist!");
            return;
        }

        if (userWithEmail.password !== data.password) {
            toast.error("This is the wrong Password!");
            return;
        }

        localStorage.setItem("user", JSON.stringify(userWithEmail));
        setUser(userWithEmail);
        toast.success("You're now Signed In!");
        navigate("/user/profile");
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl px-8 py-12 bg-blue-600 text-white m-8">
                    <h1 className="text-4xl">Sign In</h1>

                    <div className="pt-12">
                        <label htmlFor="email" className="text-2xl">Email :</label>
                        <input type="email" name="email" id="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full bg-gray-600 px-4 py-2 rounded outline-0"
                        />
                    </div>

                    <div className="pt-8">
                        <label htmlFor="password" className="text-2xl">Password :</label>
                        <input type="password" name="password" id="password"
                            {...register("password", {required: "Password is required"})}
                            className="w-full bg-gray-600 px-4 py-2 rounded outline-0"
                        />
                    </div>
                        
                    <div className="text-right pt-12">
                        <button className="px-4 py-2 rounded-md cursor-pointer hover:scale-[95%] bg-gray-600">Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignIn;