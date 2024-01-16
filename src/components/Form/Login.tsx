import React, { useState } from "react";
import TextInput from "../../elements/Input";
import Button from "../Button/Button";
import Heading from "../../elements/Heading";
import Paragraph from "../../elements/Paragraph";
import { Link } from "react-router-dom";
import firebase from "../../firebase/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface FormState {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

const Form = () => {
  const [state, setState] = useState<FormState>({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const errors = {
      email: "",
      password: "",
    };

    if (!state.email) {
      errors.email = "Email is required";
    }

    if (!state.password) {
      errors.password = "Password is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (state.email && !emailPattern.test(state.email)) {
      errors.email = "Invalid email format";
    }

    if (errors.email || errors.password) {
      setState({ ...state, errors });
      return;
    }

    try {
      const auth = getAuth(firebase);
      await signInWithEmailAndPassword(auth, state.email, state.password);
      window.location.href = "/Note";
    } catch (error) {
      alert("Error: Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-md p-4">
        <div className="bg-bk-500 rounded-lg shadow-lg p-6">
          <Heading priority="3">Login</Heading>

          <form className="flex flex-col items-center">
            <TextInput
              placeholder="Email"
              value={state.email}
              onChange={(e) =>
                setState({ ...state, email: e.target.value, errors: { ...state.errors, email: "" } })
              }
              size="normal"
              className="w-full mb-2 mt-2"
            />
            {state.errors.email && (
              <div className="text-red-500 mb-2">{state.errors.email}</div>
            )}

            <TextInput
              placeholder="Password"
              value={state.password}
              onChange={(e) =>
                setState({ ...state, password: e.target.value, errors: { ...state.errors, password: "" } })
              }
              size="normal"
              type="password"
              className="w-full mb-2"
            />
            {state.errors.password && (
              <div className="text-red-500 mb-2">{state.errors.password}</div>
            )}

            <div className="flex justify-center">
              <Button type="button" onClick={handleLogin}>
                Login
              </Button>
            </div>

            <Paragraph>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:text-blue-700 underline">
                Sign Up
              </Link>
            </Paragraph>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
