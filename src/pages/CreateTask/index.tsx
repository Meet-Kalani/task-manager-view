import { useForm, SubmitHandler } from 'react-hook-form';
import { Task } from '../../types/task';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { createTask } from '../../api/task';
import { useEffect } from 'react';
import { getPriorities } from '../../api/priority';
import usePriorityStore from '../../store/usePriorityStore';
import { getTags } from '../../api/tag';
import useTagStore from '../../store/useTagStore';
import useStatusStore from '../../store/useStatusStore';
import { getStatuses } from '../../api/status';

const CreateTask = () => {
  const { register, handleSubmit } = useForm<Task>();
  const { setPriorities } = usePriorityStore();
  const { tags, setTags } = useTagStore();
  const { statuses, setStatuses } = useStatusStore();

  useEffect(() => {
    const fetchTasks = async () => {
      const [priorities, tags, statuses] = await Promise.all([
        getPriorities(),
        getTags(),
        getStatuses(),
      ]);
      setPriorities(priorities);
      setTags(tags);
      setStatuses(statuses);
    };

    fetchTasks();
  }, [setPriorities, setStatuses, setTags]);

  const onSubmit: SubmitHandler<Task> = (data) => createTask(data);

  console.log({ statuses });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="title"
        label="title"
        variant="outlined"
        {...register('title')}
      />
      <TextField
        id="multiline"
        label="Multiline"
        multiline
        rows={4}
        {...register('description')}
      />
      <FormControl fullWidth>
        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-select"
          label="Status"
          multiple
          defaultValue={[]}
          {...register('status')}
        >
          {statuses.map(({ _id, label }) => (
            <MenuItem value={_id} key={_id}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="tags">Tags</InputLabel>
        <Select
          labelId="tags-select-label"
          id="tags-select"
          label="tags"
          multiple
          defaultValue={[]}
          {...register('tags')}
        >
          {tags.map(({ _id, label }) => (
            <MenuItem value={_id} key={_id}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <input type="submit" />
    </form>
  );
};

export default CreateTask;
