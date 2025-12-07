// import React from "react";
// import ChatDashboard from "./pages/ChatDashboard";

// function App() {
//   return <ChatDashboard />;
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ChatDashboard from "./pages/ChatDashboard";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* DEFAULT CHAT DASHBOARD */}
//         <Route path="/" element={<ChatDashboard />} />

//         {/* AUTH PAGES */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import ChatDashboard from "./pages/ChatDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ChatDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
