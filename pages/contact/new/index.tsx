import { Box, Button } from 'components/Atoms';
import useAxios from 'util/hooks/useAxios';

export default function NewContact() {
  const contacts = useAxios('http://localhost:3000/api/detail/id');

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box>
      <form action="submit">
        <Box>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </Box>
        <Box>
          <label htmlFor="group">Group</label>
          <input id="group" type="text" />
        </Box>
        <Box>
          <label htmlFor="number">Number</label>
          <input id="number" type="text" />
        </Box>
      </form>
      <Button onClick={onSubmitHandler}>확인</Button>
    </Box>
  );
}
