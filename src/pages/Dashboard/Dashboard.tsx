import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Dashboard
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Your task management overview will appear here.
      </Typography>
    </Box>
  );
};

export default Dashboard;
