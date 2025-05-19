import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router';
import useTaskStore from '../../store/useTaskStore';
import { useMemo } from 'react';

const TaskView = () => {
  const { id } = useParams();
  const { tasks } = useTaskStore();

  const task = useMemo(
    () => tasks.find((task) => task._id === id),
    [id, tasks]
  );

  if (!task) {
    return;
  }

  return (
    <Box>
      <Typography>{task?.title}</Typography>
      <Typography>{task?.description}</Typography>
    </Box>
  );
};

export default TaskView;
