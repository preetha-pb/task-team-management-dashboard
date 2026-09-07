import {
  Box,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type TaskStatus = "Todo" | "In Progress" | "Completed";

type TaskPriority = "High" | "Medium" | "Low";

interface Task {
  id: number;
  title: string;
  assignee: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "KYC Integration",
    assignee: "Preetha P B",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 10, 2026",
  },
  {
    id: 2,
    title: "API Integration",
    assignee: "Priya P",
    priority: "Medium",
    status: "Completed",
    dueDate: "Sep 08, 2026",
  },
  {
    id: 3,
    title: "Dashboard UI Enhancement",
    assignee: "Saran S",
    priority: "Low",
    status: "Todo",
    dueDate: "Sep 12, 2026",
  },
  {
    id: 4,
    title: "User Authentication",
    assignee: "Kavya K",
    priority: "High",
    status: "In Progress",
    dueDate: "Sep 11, 2026",
  },
  {
    id: 5,
    title: "Notification Module",
    assignee: "Jegan Krishna",
    priority: "Medium",
    status: "Completed",
    dueDate: "Sep 07, 2026",
  },
];

const getPriorityColor = (priority: TaskPriority) => {
  switch (priority) {
    case "High":
      return {
        color: "#ef4444",
        backgroundColor: "#fef2f2",
      };

    case "Medium":
      return {
        color: "#f59e0b",
        backgroundColor: "#fffbeb",
      };

    case "Low":
      return {
        color: "#22c55e",
        backgroundColor: "#f0fdf4",
      };
  }
};

const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case "Completed":
      return {
        color: "#22c55e",
        backgroundColor: "#f0fdf4",
      };

    case "In Progress":
      return {
        color: "#2563eb",
        backgroundColor: "#eff6ff",
      };

    case "Todo":
      return {
        color: "#6b7280",
        backgroundColor: "#f3f4f6",
      };
  }
};

const RecentTasks = () => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        mt: 2.5,
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Recent Tasks
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            mt: 0.5,
          }}
        >
          Latest tasks assigned to your team
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#f9fafb",
              }}
            >
              <TableCell sx={{ fontWeight: 600 }}>
                Task
              </TableCell>

              <TableCell sx={{ fontWeight: 600 }}>
                Assignee
              </TableCell>

              <TableCell sx={{ fontWeight: 600 }}>
                Priority
              </TableCell>

              <TableCell sx={{ fontWeight: 600 }}>
                Status
              </TableCell>

              <TableCell sx={{ fontWeight: 600 }}>
                Due Date
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tasks.map((task) => {
              const priorityStyle = getPriorityColor(
                task.priority
              );

              const statusStyle = getStatusColor(
                task.status
              );

              return (
                <TableRow
                  key={task.id}
                  hover
                  sx={{
                    "&:last-child td": {
                      borderBottom: 0,
                    },
                  }}
                >
                  <TableCell>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#111827",
                      }}
                    >
                      {task.title}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4b5563",
                      }}
                    >
                      {task.assignee}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={task.priority}
                      size="small"
                      sx={{
                        color: priorityStyle.color,
                        backgroundColor:
                          priorityStyle.backgroundColor,
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={task.status}
                      size="small"
                      sx={{
                        color: statusStyle.color,
                        backgroundColor:
                          statusStyle.backgroundColor,
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4b5563",
                      }}
                    >
                      {task.dueDate}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default RecentTasks;
