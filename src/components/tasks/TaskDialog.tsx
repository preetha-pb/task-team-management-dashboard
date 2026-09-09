import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "./TaskTable";
import { parseDueDate } from "../../utils/date";

interface TaskDialogProps {
  open: boolean;
  taskData?: Task;
  onClose: () => void;
  onSubmit: (task: TaskFormData) => void;
}

export interface TaskFormData {
  title: string;
  description: string;
  assignee: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
}

const initialFormData: TaskFormData = {
  title: "",
  description: "",
  assignee: "",
  priority: "Medium",
  status: "Todo",
  dueDate: "",
};

const TaskDialog = ({
  open,
  taskData,
  onClose,
  onSubmit
}: TaskDialogProps) => {
  const [formData, setFormData] =
    useState<TaskFormData>(initialFormData);

  useEffect(() => {
    if(taskData){
      setFormData({
        ...taskData,
        dueDate: parseDueDate(taskData.dueDate),
      })
    } else {
      setFormData(initialFormData)
    }
  }, [taskData])

  const handleChange = (
    field: keyof TaskFormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      return;
    }

    onSubmit(formData);

    setFormData(initialFormData);
  };

  const handleClose = () => {
    setFormData(initialFormData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        sx={{
          fontWeight: 600,
        }}
      >
        {taskData ? "Edit Task": "Add New Task"}
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          label="Task Title"
          value={formData.title}
          onChange={(event) =>
            handleChange("title", event.target.value)
          }
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Description"
          value={formData.description}
          onChange={(event) =>
            handleChange(
              "description",
              event.target.value
            )
          }
          margin="normal"
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          label="Assignee"
          value={formData.assignee}
          onChange={(event) =>
            handleChange(
              "assignee",
              event.target.value
            )
          }
          margin="normal"
        />

        <TextField
          fullWidth
          select
          label="Priority"
          value={formData.priority}
          onChange={(event) =>
            handleChange(
              "priority",
              event.target.value
            )
          }
          margin="normal"
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>

        <TextField
          fullWidth
          select
          label="Status"
          value={formData.status}
          onChange={(event) =>
            handleChange(
              "status",
              event.target.value
            )
          }
          margin="normal"
        >
          <MenuItem value="Todo">Todo</MenuItem>
          <MenuItem value="In Progress">
            In Progress
          </MenuItem>
          <MenuItem value="Completed">
            Completed
          </MenuItem>
        </TextField>

        <TextField
          fullWidth
          type="date"
          label="Due Date"
          value={formData.dueDate}
          onChange={(event) =>
            handleChange(
              "dueDate",
              event.target.value
            )
          }
          margin="normal"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button
          onClick={handleClose}
          sx={{
            textTransform: "none",
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          {taskData ? "Update Task": "Create Task"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDialog;
