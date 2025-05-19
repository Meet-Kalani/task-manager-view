import { useEffect, useMemo } from 'react';
import { getTasks } from '../../api/task';
import { Box, Typography } from '@mui/material';
import useTaskStore from '../../store/useTaskStore';
import { Task } from '../../types/task';
import IssueBoard from '../../components/IssueBoard';
import { getStatuses } from '../../api/status';
import useStatusStore from '../../store/useStatusStore';
import { Status } from '../../types/status';

type TaskStore = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};

type StatusStore = {
  statuses: Status[];
  setStatuses: (statuses: Status[]) => void;
};

function Homepage() {
  const { tasks, setTasks }: TaskStore = useTaskStore();
  const { statuses, setStatuses }: StatusStore = useStatusStore();

  useEffect(() => {
    const fetchTasks = async () => {
      const [tasks, statuses] = await Promise.all([getTasks(), getStatuses()]);
      setTasks(tasks);
      setStatuses(statuses);
    };
    fetchTasks();
  }, [setStatuses, setTasks]);

  // refactor groupedTasks and also fix naming
  const groupedTasks = useMemo(
    () =>
      statuses.map((status) => ({
        statusId: status._id,
        statusName: status.label,
        tasks: tasks.filter((task) => task.status.includes(status._id)),
      })),
    [statuses, tasks]
  );

  return (
    <Box>
      <Typography variant="h4">Task List</Typography>
      <Box className="issue-boards-wrapper">
        <Box className="issue-boards">
          {groupedTasks.map((task) => {
            return (
              <IssueBoard
                key={task.statusId}
                tasks={task.tasks}
                title={task.statusName}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
