import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import type { Task } from '../../types/task';
import type { FC } from 'react';
import { Link } from 'react-router';

interface CardListProps {
  tasks: Task[];
}

const CardList: FC<CardListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map(({ _id, title, description }) => (
        <Card variant="outlined" key={_id}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={`/task/${_id}`}>Learn More</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default CardList;
