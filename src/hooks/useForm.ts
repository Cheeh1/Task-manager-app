import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// Register Component
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

export const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  // password visibilty
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    FormData,
    showPassword,
    passwordVisibility
  };
}


// Form Input validation and errors for task in Home component.
interface TaskData {
  title: string;
  description: string;
  date: string;
  time: string;
}

const taskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  date: yup.string().required("Pick a date"),
  time: yup.string().required("Pick a time")
})

export const useTaskData = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskData>({ resolver: yupResolver(taskSchema)});

  const onSubmit: SubmitHandler<TaskData> = (data) => console.log(data);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}