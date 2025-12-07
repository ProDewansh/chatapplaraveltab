// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   // ✅ Check user on page load
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await API.get("/user");
//         setUser(res.data);
//       } catch (err) {
//         setUser(null);
//       }
//     };
//     fetchUser();
//   }, []);

//   // ✅ Login function
//   const login = async (formData) => {
//     try {
//       const res = await API.post("/login", formData);
//       setUser(res.data.user);
//       navigate("/"); // Dashboard redirect
//     } catch (err) {
//       throw err;
//     }
//   };

//   // ✅ Register function
//   const register = async (formData) => {
//     try {
//       const res = await API.post("/register", formData);
//       setUser(res.data.user);
//       navigate("/"); // Dashboard redirect
//     } catch (err) {
//       throw err;
//     }
//   };

//   // ✅ Logout function
//   const logout = async () => {
//     try {
//       await API.post("/logout");
//       setUser(null);
//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   // ✅ Check logged user on page reload
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await API.get("/api/user"); // <-- Corrected
//         setUser(res.data);
//       } catch {
//         setUser(null);
//       }
//     };
//     fetchUser();
//   }, []);

//   // ✅ LOGIN
//   const login = async (formData) => {
//     try {
//       await API.get("/sanctum/csrf-cookie");  // CSRF
//       const res = await API.post("/api/login", formData); // <-- Corrected
//       setUser(res.data.user);
//       navigate("/");
//     } catch (err) {
//       console.error("Login Error:", err);
//       throw err;
//     }
//   };

//   // ✅ REGISTER
//   const register = async (formData) => {
//     try {
//       await API.get("/sanctum/csrf-cookie");  // CSRF
//       const res = await API.post("/api/register", formData); // <-- Corrected
//       setUser(res.data.user);
//       navigate("/");
//     } catch (err) {
//       console.error("Register Error:", err);
//       throw err;
//     }
//   };

//   // ✅ LOGOUT
//   const logout = async () => {
//     try {
//       await API.post("/api/logout"); // <-- Corrected
//       setUser(null);
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout Error:", err);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   // ✅ Check logged user on page load
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         await API.get("/sanctum/csrf-cookie");   // CSRF first
//         const res = await API.get("/api/user");  // Fetch current user
//         setUser(res.data);
//       } catch {
//         setUser(null);
//       }
//     };
//     fetchUser();
//   }, []);

//   // ✅ LOGIN
//   const login = async (formData) => {
//     try {
//       await API.get("/sanctum/csrf-cookie");      // CSRF cookie
//       const res = await API.post("/api/login", formData);
//       setUser(res.data.user);
//       navigate("/"); // Redirect to dashboard
//     } catch (err) {
//       console.error("Login Error:", err);
//       throw err;
//     }
//   };

//   // ✅ REGISTER
//   const register = async (formData) => {
//     try {
//       await API.get("/sanctum/csrf-cookie");      // CSRF cookie
//       const res = await API.post("/api/register", formData);
//       setUser(res.data.user);
//       navigate("/"); // Redirect to dashboard
//     } catch (err) {
//       console.error("Register Error:", err);
//       throw err;
//     }
//   };

//   // ✅ LOGOUT
//   const logout = async () => {
//     try {
//       await API.post("/api/logout");
//       setUser(null);
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout Error:", err);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // ✅ Check logged user on page reload
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await API.get("/sanctum/csrf-cookie"); // CSRF cookie first
        const res = await API.get("/api/user"); // Get logged in user
        setUser(res.data);
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  // ✅ LOGIN
  const login = async (formData) => {
    try {
      await API.get("/sanctum/csrf-cookie");  // CSRF cookie
      const res = await API.post("/login", formData); // session login
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      console.error("Login Error:", err);
      throw err;
    }
  };

  // ✅ REGISTER
  const register = async (formData) => {
    try {
      await API.get("/sanctum/csrf-cookie");  // CSRF cookie
      const res = await API.post("/register", formData); // session login
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      console.error("Register Error:", err);
      throw err;
    }
  };

  // ✅ LOGOUT
  const logout = async () => {
    try {
      await API.post("/logout"); // session logout
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
