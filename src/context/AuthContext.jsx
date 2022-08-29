import React, { createContext } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuth, SetisAuth] = React.useState(false);
  const [Data, SetData] = React.useState(initial);
  const { email, password } = Data;
  // ---------------------------
  const handleEvent = (e) => {
    const { name, value } = e.target;
    SetData({ ...Data, [name]: value });
  };

    const handleLogin = async () => {
      try {
        const res = await fetch(`https://reqres.in/api/login`, {
          method: "POST",
          body: JSON.stringify(Data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data = await res.json();
        if (res.status === 200) {
          SetMainData(data);
          SetisAuth(!isAuth);
        } else {
          alert("Invalid Email Password");
        }
      } catch (error) {
        console.log(error);
      }
    };
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
