import { Box } from "@mui/material";
import Navbar from "scenes/navbar";

const HomePage = () => {
  return (
    <Box>
      homepage
      {/* absolute imports not working */}
      <Navbar />
    </Box>
  );
};

export default HomePage;
