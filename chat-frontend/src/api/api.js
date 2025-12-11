// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://127.0.0.1:8000",
//     withCredentials: true,   // ⭐ MOST IMPORTANT
//     withXSRFToken: true,    // ⭐ THIS FIXES TOKEN MISMATCH
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000",
//   withCredentials: true,
// });

// /**
//  * ✅ Laravel CSRF Fix
//  * Cookie se XSRF-TOKEN uthakar
//  * header me X-XSRF-TOKEN bhejta hai
//  */
// API.interceptors.request.use((config) => {
//   const token = document.cookie
//     .split("; ")
//     .find(row => row.startsWith("XSRF-TOKEN="))
//     ?.split("=")[1];

//   if (token) {
//     config.headers["X-XSRF-TOKEN"] = decodeURIComponent(token);
//   }

//   return config;
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000",
//   withCredentials: true,
//   headers: {
//     "X-Requested-With": "XMLHttpRequest"
//   }
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,

//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   }
// });

// /**
//  * ✅ CSRF TOKEN auto attach
//  */
// API.interceptors.request.use((config) => {
//   const token = document
//     .querySelector('meta[name="csrf-token"]')
//     ?.getAttribute("content");

//   if (token) {
//     config.headers["X-CSRF-TOKEN"] = token;
//   }

//   return config;
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,
//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/json",
//   },
// });

// export default API;


// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true, // ✅ important
//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/json" // ✅ important for JSON post
//   }
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,               // ✅ cookies send/receive
//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
// });

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,     // ✅ MUST — cookie bhejne ke liye
//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/json",
//   },
//   xsrfCookieName: "XSRF-TOKEN",
//   xsrfHeaderName: "X-XSRF-TOKEN",
// });

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

// ✅ CSRF header attach automatically
API.interceptors.request.use((config) => {
  const token = document.cookie
    .split("; ")
    .find(row => row.startsWith("XSRF-TOKEN"))
    ?.split("=")[1];

  if (token) {
    config.headers["X-XSRF-TOKEN"] = decodeURIComponent(token);
  }

  return config;
});

export default API;

