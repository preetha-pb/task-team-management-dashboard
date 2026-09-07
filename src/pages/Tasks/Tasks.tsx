import { useState } from "react";
import { Add, FilterList, Search, } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField, Typography, } from "@mui/material";
import TaskTable from "../../components/tasks/TaskTable";
import TaskDialog, { type TaskFormData, } from "../../components/tasks/TaskDialog";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addTask } from "../../store/slices/tasksSlice";

const formatDueDate = (date: string) => {
  if (!date) {
    return "";
  }

  const parsedDate = new Date(`${date}T00:00:00`);

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

const Tasks = () => {

  const dispatch = useAppDispatch();

  const tasks = useAppSelector(
    (state) => state.tasks.tasks
  );

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateTask = ( formData: TaskFormData ) => {
    const newTask = {
      id: Date.now(),
      ...formData,
      dueDate: formatDueDate(formData.dueDate),
    };


    dispatch(addTask(newTask));

    setDialogOpen(false);
  };

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
          onClick={() => setDialogOpen(true)}
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
      <TaskDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleCreateTask}
      />

    </Box>
  );
};

export default Tasks;
