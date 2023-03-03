import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import getUserData from "./api/dataCall";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Authpage from "./pages/Authpage";
import Appbar from "./components/appbar/Appbar";
import BottomNavBar from "./components/bottomNavBar/BottomNavBar";

function App() {
  const [users, setUsers] = useState();

  async function fetchdata() {
    let data = await getUserData();

    setUsers(data.data.users);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Box sx={{
      height: "100vh"
    }}>
      <Appbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authpage />} />
      </Routes>
      {/* <BottomNavBar /> */}
    </Box>
  );
}

export default App;
