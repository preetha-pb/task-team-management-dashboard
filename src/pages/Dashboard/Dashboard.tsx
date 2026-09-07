import {
  AssignmentOutlined,
  CheckCircleOutlined,
  ErrorOutlined,
  HourglassEmptyOutlined,
} from "@mui/icons-material";


import { Box, Grid, Typography } from "@mui/material";

import StatCard from "../../components/dashboard/StatCard";
import TaskOverviewChart from "../../components/dashboard/TaskOverviewChart";


const Dashboard = () => {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Dashboard
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#6b7280",
            mt: 0.5,
          }}
        >
          Here's an overview of your team's tasks and activities.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Total Tasks"
            value={120}
            icon={<AssignmentOutlined />}
            color="#2563eb"
            backgroundColor="#eff6ff"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Completed"
            value={72}
            icon={<CheckCircleOutlined />}
            color="#16a34a"
            backgroundColor="#f0fdf4"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="In Progress"
            value={35}
            icon={<HourglassEmptyOutlined />}
            color="#d97706"
            backgroundColor="#fffbeb"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Overdue"
            value={13}
            icon={<ErrorOutlined />}
            color="#dc2626"
            backgroundColor="#fef2f2"
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 2.5 }}>
        <TaskOverviewChart />
      </Box>

    </Box>
  );
};

export default Dashboard;
