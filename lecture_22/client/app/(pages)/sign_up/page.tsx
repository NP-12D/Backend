"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import axios from "axios";
import SignUpSchema from "../validations/signupSchema";

interface dataType {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });
  const router = useRouter();

  async function onSubmit(data: dataType) {
    try {
      const res = await axios.post(
        "http://localhost:3030/api/auth/sign_up",
        data,
      );
      if (res.status === 200) {
        router.push("/sign_in");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white text-slate-800 text-base rounded-3xl flex flex-col p-8 gap-5 shadow-xl border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-center uppercase tracking-tight text-slate-900">
            Register
          </h2>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition duration-200"
            />
            {errors.name?.message && (
              <p className="text-red-500 text-xs px-1 font-medium mt-0.5">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition duration-200"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-xs px-1 font-medium mt-0.5">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition duration-200"
            />
            {errors.password?.message && (
              <p className="text-red-500 text-xs px-1 font-medium mt-0.5">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold uppercase text-sm tracking-wider mt-2 py-4 px-6 rounded-2xl shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            Submit
          </button>

          <div className="flex items-center justify-center gap-1.5 text-sm mt-2 text-slate-600">
            <span>Already have an account?</span>
            <Link
              className="text-violet-600 hover:text-violet-700 font-medium hover:underline transition-colors"
              href={"/sign_in"}
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
