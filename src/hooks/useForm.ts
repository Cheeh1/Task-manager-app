import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  nickname: string;
  email: string;
  password: string;
}

// yup schema
const schema = yup.object().shape({
  nickname: yup.string().required("Nickname is required").min(4, "Field must be at least 4 characters"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid Email format"),
  password: yup.string().required("Password is required").matches(/^(?=.*[0-9]).{6,}$/, 'Password must be at least 6 characters and contain at least one number'),
});

const useFormData = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    }
}
export default useFormData;