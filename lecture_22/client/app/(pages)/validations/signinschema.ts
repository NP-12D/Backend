import * as Yup from "yup"


export const SignInSchema = Yup.object().shape({
    email:Yup.string().email().required("name is required!"),
    password:Yup.string().required("name is required!").min(6,"min6").max(20,"max20")
})



