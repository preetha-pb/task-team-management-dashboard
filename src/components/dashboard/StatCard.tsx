import { Box, Card, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
  backgroundColor: string;
}

const StatCard = ({
  title,
  value,
  icon,
  color,
  backgroundColor,
}: StatCardProps) => {
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
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#6b7280",
              mb: 1,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color,
            backgroundColor,
          }}
        >
          {icon}
        </Box>
      </Box>
    </Card>
  );
};

export default StatCard;
