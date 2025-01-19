"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { FramerModal, ModalContent } from "@/components/ui/loginModel";

const LoginButton: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email as string,
        password: password as string,
      });
      if (error) {
        console.error(error.message);
        alert("Login failed. Please check your credentials.");
      } else if (data) {
        console.log("Login successful", data);
        router.push("/dashboard"); // Navigate after successful login
        localStorage.setItem("user", JSON.stringify(data));
         let user = localStorage.getItem("user");
         if(user){
           user = JSON.parse(user);
         }
        console.log(user)
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <button
        onClick={() => setModalOpen(true)}
        className="i h-9 rounded-md border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[#19b2b0] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-all ease-in-out duration-300 hover:scale-105 hover:bg-[#3f5964] focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Login
      </button>

      <FramerModal open={modalOpen} setOpen={setModalOpen}>
        <ModalContent>
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">
              Login
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Please enter your credentials to continue.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#3f5964]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-md border bg-transparent px-4 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#19b2b0] focus:border-[#19b2b0]"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#3f5964]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 w-full rounded-md border bg-transparent px-4 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#19b2b0] focus:border-[#19b2b0]"
                />
              </div>

              <button
                onClick={handleLogin}
                disabled={loading} // Disable button while loading
                className={`w-full h-12 rounded-md ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#19b2b0] to-[#3f5964] text-white"
                } font-medium transition-all ease-in-out duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#19b2b0] focus:ring-offset-2`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </ModalContent>
      </FramerModal>
    </div>
  );
};

export default LoginButton;
