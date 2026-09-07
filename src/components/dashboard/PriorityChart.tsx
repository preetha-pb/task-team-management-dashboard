import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Box, Card, Typography } from "@mui/material";

interface PriorityData {
  name: string;
  value: number;
  color: string;
}

const data: PriorityData[] = [
  {
    name: "High",
    value: 35,
    color: "#ef4444",
  },
  {
    name: "Medium",
    value: 50,
    color: "#f59e0b",
  },
  {
    name: "Low",
    value: 35,
    color: "#22c55e",
  },
];

const PriorityChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        p: 2.5,
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#111827",
        }}
      >
        Tasks by Priority
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#6b7280",
          mt: 0.5,
        }}
      >
        Current task distribution
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 280,
          mt: 1,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2.5,
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
            }}
          >
            <Box
              sx={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                backgroundColor: item.color,
              }}
            />

            <Typography
              variant="caption"
              sx={{ color: "#6b7280" }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default PriorityChart;
