import {
  AssessmentOutlined,
  DashboardOutlined,
  GroupOutlined,
  LogoutOutlined,
  TaskOutlined,
} from "@mui/icons-material";

import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Tasks",
    path: "/tasks",
    icon: <TaskOutlined />,
  },
  {
    label: "Team",
    path: "/team",
    icon: <GroupOutlined />,
  }
];

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box
            sx={{
                width: 250,
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bgcolor: "#111827",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                zIndex: 1200,
            }}
        >
            
            <Box
                sx={{
                    height: 72,
                    display: "flex",
                    alignItems: "center",
                    px: 3,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: "#60a5fa",
                    }}
                >
                TaskFlow
                </Typography>
            </Box>

            <Divider sx={{ borderColor: "#374151" }} />

            <List sx={{ px: 2, py: 3, flex: 1 }}>
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <ListItemButton
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            sx={{
                                mb: 1,
                                borderRadius: 2,
                                color: isActive ? "#fff" : "#9ca3af",
                                bgcolor: isActive ? "#2563eb" : "transparent",

                                "&:hover": {
                                    bgcolor: isActive ? "#2563eb" : "#1f2937",
                                    color: "#fff",
                                },
                            }}
                        >
                            
                            <ListItemIcon
                                sx={{
                                    minWidth: 40,
                                    color: "inherit",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: isActive ? 600 : 400,
                                }}
                            />

                        </ListItemButton>
                    );
                })}
            </List>

            <Box sx={{ p: 2 }}>
                <Divider sx={{ borderColor: "#374151", mb: 1 }} />

                <ListItemButton
                    sx={{
                        borderRadius: 2,
                        color: "#9ca3af",

                        "&:hover": {
                            bgcolor: "#1f2937",
                            color: "#fff",
                        },
                    }}
                >

                    <ListItemIcon
                        sx={{
                            minWidth: 40,
                            color: "inherit",
                        }}
                    >
                        <LogoutOutlined />
                    </ListItemIcon>

                    <ListItemText
                        primary="Logout"
                        primaryTypographyProps={{
                            fontSize: 14,
                        }}
                    />

                </ListItemButton>
            </Box>
        </Box>
    );
};

export default Sidebar;