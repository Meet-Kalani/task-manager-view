import { Route, Routes } from 'react-router';
import Homepage from '../pages/Homepage';
import CreateTask from '../pages/CreateTask';
import Layout from '../components/Layout';
import TaskView from '../pages/TaskView';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/task/:id" element={<TaskView />} />
      </Route>
    </Routes>
  );
}

export default Router;
