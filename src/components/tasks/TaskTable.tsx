import {
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";

import {
  DeleteOutlined,
  EditOutlined,
} from "@mui/icons-material";


export type TaskStatus =
  | "Todo"
  | "In Progress"
  | "Completed";

export type TaskPriority =
  | "Low"
  | "Medium"
  | "High";

export interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
}

interface TaskTableProps {
  tasks: Task[];
}

const getPriorityStyle = (priority: TaskPriority) => {
  switch (priority) {
    case "High":
      return {
        color: "#dc2626",
        backgroundColor: "#fef2f2",
      };

    case "Medium":
      return {
        color: "#d97706",
        backgroundColor: "#fffbeb",
      };

    case "Low":
      return {
        color: "#16a34a",
        backgroundColor: "#f0fdf4",
      };
  }
};

const getStatusStyle = (status: TaskStatus) => {
  switch (status) {
    case "Completed":
      return {
        color: "#16a34a",
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

const TaskTable = ({ tasks }: TaskTableProps) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 3,
      }}
    >
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

            <TableCell
              align="right"
              sx={{ fontWeight: 600 }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.map((task) => {
            const priorityStyle = getPriorityStyle(
              task.priority
            );

            const statusStyle = getStatusStyle(
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
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        color: "#111827",
                      }}
                    >
                      {task.title}
                    </div>

                    <div
                      style={{
                        fontSize: 13,
                        color: "#6b7280",
                        marginTop: 4,
                      }}
                    >
                      {task.description}
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  {task.assignee}
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
                  {task.dueDate}
                </TableCell>

                <TableCell align="right">
                  <Tooltip title="Edit task">
                    <IconButton size="small">
                      <EditOutlined fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete task">
                    <IconButton
                      size="small"
                      color="error"
                    >
                      <DeleteOutlined fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
