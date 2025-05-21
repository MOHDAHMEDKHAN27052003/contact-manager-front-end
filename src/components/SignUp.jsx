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
            <div>
                <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
                    <h1>Enter your data to Sign Up!</h1>
                    <label htmlFor="name">
                        Name : 
                        <input type="text"
                            {...register("name", {
                                required: "Name is required",
                                minLength: { value: 3, message: "Minimum 3 characters" },
                                maxLength: { value: 30, message: "Maximum 15 characters" },
                            })}
                        />
                    </label>

                    <label htmlFor="contactNo">
                        Contact No. :
                        <input type="number" name="contactNo" id="contactNo"
                            {...register("contactNo", {
                                required: "Contact No. is required",
                                minLength: { value: 10, message: "Contact No. must be 10 digits" },
                                maxLength: { value: 10, message: "Contact No. must be 10 digits" },
                            })}
                        />
                    </label>

                    <label htmlFor="email">
                        Email :
                        <input type="email" name="email" id="email"
                            {...register("email", { required: "Email is required" })}
                        />
                    </label>

                    <label htmlFor="password">
                        Password :
                        <input type="password" name="password" id="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters" },
                                maxLength: { value: 12, message: "Maximum 12 characters" },
                            })}
                        />
                    </label>
                    
                    <label htmlFor="consent">
                        <input type="checkbox" name="consent" id="consent"
                            {...register("consent", { required: "Consent is required" })}
                        />
                        I agree to the Terms & Services.
                    </label>
                    
                    <button>Sign Up</button>
                </form>
            </div>
        </>
    );
};

export default SignUp;