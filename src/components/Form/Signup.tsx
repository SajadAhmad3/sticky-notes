import React, { useState } from "react";
import TextInput from "../../elements/Input";
import Button from "../Button/Button";
import Heading from "../../elements/Heading";
import Paragraph from "../../elements/Paragraph";
import { Link } from "react-router-dom";
import firebase from "../../firebase/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ReCAPTCHA from "react-google-recaptcha";

interface FormState {
  name: string;
  email: string;
  password: string;
  errors: {
    name: string;
    email: string;
    password: string;
  };
}

const Form = () => {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    errors: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [verified, setVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function onChange(token: string | null) {
    console.log("Captcha value:", token);

    if (token) {
      setVerified(true);
      setErrorMessage(null); 
    }
  }

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!verified) {
      setErrorMessage("Please complete the reCAPTCHA verification.");
      return;
    }
    const errors = {
      name: "",
      email: "",
      password: "",
    };

    
  if (!state.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]/.test(state.name)) {
    errors.name = "Name must start with an alphabet character";
  }

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

    if (errors.name || errors.email || errors.password) {
      setState({ ...state, errors });
      return;
    }

    try {
      const auth = getAuth(firebase);
      await createUserWithEmailAndPassword(auth, state.email, state.password);
      alert("User Registered Successfully");
      window.location.href = "/Login";
    } catch (error: any) {
      alert("Error: " + (error as Error).message);
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-md p-4">
        <div className="bg-bk-500 rounded-lg shadow-lg p-6">
          <Heading priority="3">Sign Up</Heading>

          {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}

          <form className="flex flex-col items-center">
            <TextInput
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                setState({
                  ...state,
                  name: e.target.value,
                  errors: { ...state.errors, name: "" },
                })
              }
              size="normal"
              type="name"
              className="w-full mb-2 mt-2"
            />
            {state.errors.name && (
              <div className="text-red-500 mb-2">{state.errors.name}</div>
            )}
            <TextInput
              placeholder="Email"
              value={state.email}
              onChange={(e) =>
                setState({
                  ...state,
                  email: e.target.value,
                  errors: { ...state.errors, email: "" },
                })
              }
              size="normal"
              type="email"
              className="w-full mb-2"
            />
            {state.errors.email && (
              <div className="text-red-500 mb-2">{state.errors.email}</div>
            )}
            <TextInput
              placeholder="Password"
              value={state.password}
              onChange={(e) =>
                setState({
                  ...state,
                  password: e.target.value,
                  errors: { ...state.errors, password: "" },
                })
              }
              size="normal"
              type="password"
              className="w-full mb-2"
            />
            {state.errors.password && (
              <div className="text-red-500 mb-2">{state.errors.password}</div>
            )}

            <ReCAPTCHA
              sitekey="6LdvwJEoAAAAAFzU_SMhzcm5qDwj_VLRHOgBxuPC"
              onChange={onChange}
              className="mb-2"
            />

            <div className="flex justify-center">
              <Button
                type="button"
                onClick={handleSignUp}
                disabled={!verified}
              >
                Sign Up
              </Button>
            </div>

            <Paragraph>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Login
              </Link>
            </Paragraph>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
