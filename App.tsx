import { CssBaseline, Box } from '@mui/material';
import TodoList from './views/pages/TodoList';
import TodoListCopy from './views/pages/TodoListCopy';
import WriteBoard from './views/pages/WriteBoard';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <Box sx={{ background: '#F7F2E0', mt: '30px' }}>
        <TodoList />
      </Box> */}
      <Box sx={{ mt: '30px' }}>
        {/* <TodoListCopy /> */}
        <WriteBoard />
      </Box>
    </div>
  );
}

export default App;
