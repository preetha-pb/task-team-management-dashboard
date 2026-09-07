import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Box, Card, Typography } from "@mui/material";

interface TaskData {
  day: string;
  created: number;
  completed: number;
}

const data: TaskData[] = [
  { day: "Mon", created: 12, completed: 8 },
  { day: "Tue", created: 15, completed: 12 },
  { day: "Wed", created: 14, completed: 10 },
  { day: "Thu", created: 18, completed: 16 },
  { day: "Fri", created: 20, completed: 14 },
  { day: "Sat", created: 11, completed: 9 },
  { day: "Sun", created: 16, completed: 13 },
];

const TaskOverviewChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        p: 2.5,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#111827",
        }}
      >
        Task Overview
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#6b7280",
          mt: 0.5,
          mb: 2,
        }}
      >
        Tasks created and completed this week
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 300,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#6b7280",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#6b7280",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="created"
              stroke="#93c5fd"
              strokeWidth={3}
              dot={false}
              name="Created"
            />

            <Line
              type="monotone"
              dataKey="completed"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
              name="Completed"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default TaskOverviewChart;
