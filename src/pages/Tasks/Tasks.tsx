import {
  Add,
  FilterList,
  Search,
} from "@mui/icons-material";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import TaskTable, {
  type Task,
} from "../../components/tasks/TaskTable";

const tasks: Task[] = [
  {
    id: 1,
    title: "KYC Integration",
    description: "Integrate KYC verification APIs",
    assignee: "Preetha P B",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 10, 2026",
  },
  {
    id: 2,
    title: "API Integration",
    description: "Integrate customer management APIs",
    assignee: "Priya P",
    priority: "Medium",
    status: "Completed",
    dueDate: "Sep 08, 2026",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Improve dashboard user experience",
    assignee: "Saran S",
    priority: "Low",
    status: "Todo",
    dueDate: "Sep 12, 2026",
  },
  {
    id: 4,
    title: "Authentication",
    description: "Implement authentication flow",
    assignee: "Kavya K",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 11, 2026",
  },
  {
    id: 5,
    title: "Notifications",
    description: "Build notification management module",
    assignee: "Jegan Krishna",
    priority: "Medium",
    status: "Completed",
    dueDate: "Sep 07, 2026",
  },
];


const Tasks = () => {
  return (
    <Box>
      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Tasks
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#6b7280",
              mt: 0.5,
            }}
          >
            Manage and track your team's tasks.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 2.5,
            py: 1.2,
            fontWeight: 600,
            boxShadow: "none",
          }}
        >
          Add Task
        </Button>
      </Box>

      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2.5,
          flexWrap: "wrap",
        }}
      >
        <TextField
          placeholder="Search tasks..."
          size="small"
          sx={{
            minWidth: 280,
            backgroundColor: "#ffffff",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    sx={{
                      color: "#9ca3af",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          variant="outlined"
          startIcon={<FilterList />}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            color: "#4b5563",
            borderColor: "#d1d5db",
            backgroundColor: "#ffffff",
          }}
        >
          Filters
        </Button>
      </Box>

      <TaskTable tasks={tasks} />

    </Box>
  );
};

export default Tasks;
