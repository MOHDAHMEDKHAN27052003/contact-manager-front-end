import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function SignUp() {
    const { register, handleSubmit } = useForm();
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const userData = {
            id: nanoid(),
            ...data,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        updateUser(userData);
        toast.success("You've Signed Up successfully!");
        navigate("/user/profile");
    };
  
    const onError = (formErrors) => {
        Object.values(formErrors).forEach(error => {
            toast.error(error.message);
        });
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <form action="" onSubmit={handleSubmit(onSubmit, onError)} className="rounded-2xl p-12 bg-blue-600 text-white">
                    <h1 className="text-4xl">Sign Up</h1>
                    <div className="pt-4">
                        <label htmlFor="name" className="text-2xl">Name : </label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required",
                                minLength: { value: 3, message: "Minimum 3 characters" },
                                maxLength: { value: 30, message: "Maximum 15 characters" },
                            })}
                            className="w-full bg-gray-600 px-4 py-2 rounded outline-0"
                        />
                    </div>

                    <div className="pt-4">
                        <label htmlFor="contactNo" className="text-2xl">Contact No. :</label>
                        <input type="number" name="contactNo" id="contactNo"
                            {...register("contactNo", {
                                required: "Contact No. is required",
                                minLength: { value: 10, message: "Contact No. must be 10 digits" },
                                maxLength: { value: 10, message: "Contact No. must be 10 digits" },
                            })}
                            className="w-full bg-gray-600 px-4 py-2 rounded outline-0"
                        />
                    </div>

                    <div className="pt-4">
                        <label htmlFor="email" className="text-2xl">Email :</label>
                        <input type="email" name="email" id="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full bg-gray-600 px-4 py-2 rounded outline-0"
                        />
                    </div>

                    <div className="pt-4">
                        <label htmlFor="password" className="text-2xl">Password :</label>
                        <input type="password" name="password" id="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters" },
                                maxLength: { value: 12, message: "Maximum 12 characters" },
                            })}
                            className="w-full bg-gray-600 px-4 py-2 rounded outline-0"
                        />
                    </div>
                        
                    <div className="flex justify-center gap-2 pt-4">
                        <input type="checkbox" name="consent" id="consent"
                            {...register("consent", { required: "Consent is required" })}
                        />I agree to the Terms & Services.
                    </div>
                        
                    <div className="text-right pt-4">
                        <button className="px-4 py-2 rounded-md cursor-pointer hover:scale-[95%] bg-gray-600">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;