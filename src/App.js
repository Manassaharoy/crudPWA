import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Authpage from "./pages/Authpage";
import Appbar from "./components/appbar/Appbar";

function App() {
  
  return (
    <Box sx={{
      height: "100vh"
    }}>
      <Appbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </Box>
  );
}

export default App;
