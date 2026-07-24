import * as Yup from "yup"


 const SignUpSchema = Yup.object().shape({
    name:Yup.string().required("name is required!"),
    email:Yup.string().email().required("email is required!"),
    password:Yup.string().required("password is required!").min(6,"min6").max(20,"max20")
})
export default SignUpSchema