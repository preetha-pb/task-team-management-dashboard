import {
  AccountCircleOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        height: 72,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#fff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Dashboard
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
          }}
        >
          Welcome back, Preetha!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton>
          <Badge badgeContent={3} color="primary">
            <NotificationsNoneOutlined />
          </Badge>
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "#2563eb",
            }}
          >
            PB
          </Avatar>

          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              Preetha Balakrishnan
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#6b7280" }}
            >
              Administrator
            </Typography>
          </Box>
        </Box>

        <AccountCircleOutlined
          sx={{
            color: "#6b7280",
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
