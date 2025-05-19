import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import CardList from '../CardList';
import { Task } from '../../types/task';

interface IssueBoardPropTypes {
  title: string;
  tasks: Task[];
}

const IssueBoard: FC<IssueBoardPropTypes> = ({ title, tasks }) => {
  return (
    <Box className="issue-board">
      <Typography>{title}</Typography>
      <CardList tasks={tasks} />
    </Box>
  );
};

export default IssueBoard;
