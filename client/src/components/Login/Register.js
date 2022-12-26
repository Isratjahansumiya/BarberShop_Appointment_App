import * as React from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "./../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [signInWithGoogle, gUser, gLoading, gError] =
      useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate=useNavigate();
    let signInErrorMessage;
    if (loading || gLoading || updating) {
      return <Loading />;
    }
    if (error || gError || updateError) {
      signInErrorMessage = (
        <p className="text-red-500">
          <small>{error?.message || gError?.message}</small>
        </p>
      );
    }

    if (user || gUser) {
      console.log(gUser);
    }
    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({userName: data.name});
      navigate('/appointment');
    };
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold text-secondary">
              JOIN US
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">NAME</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Israt"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: "true",
                      message: "**Name is required",
                    }
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">EMAIL</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g., israt@gmail.com"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: "true",
                      message: "**Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "**Invalid email",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">PASSWORD</span>
                </label>
                <input
                  type="password"
                  placeholder="e.g., 1234hello"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: "true",
                      message: "**Password is required",
                    },
                    minLength: {
                      value: 8,
                      message: "**Must be 8 characters or longer",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInErrorMessage}
              <br />
              <input
                type="submit"
                className="btn w-full max-w-xs text-white"
                value="JOIN"
              />
            </form>
            <p>
              <small>
                Already have an account?
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Register;