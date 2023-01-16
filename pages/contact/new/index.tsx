import axios from 'axios';
import { Box, Button } from 'components/Atoms';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function NewContact() {
  const router = useRouter();
  const nameRef = useRef();
  const groupRef = useRef();
  const numberRef = useRef();
  const imageRef = useRef();

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const newName = nameRef.current.value;
    const newGroup = groupRef.current.value;
    const newNumber = numberRef.current.value;
    const newImage = imageRef.current.value;

    // const contactData = {
    //   name: newName,
    //   group: newGroup,
    //   number: newNumber,
    //   url: newImage,
    // };

    // const response = await fetch('/api/contacts', {
    //   method: 'POST',
    //   body: JSON.stringify(contactData),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // });
    // const data = await response.json();

    const { data } = await axios({
      url: '/api/contacts',
      method: 'POST',
      data: {
        name: newName,
        group: newGroup,
        number: newNumber,
        url: newImage,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log(data);

    router.push('/contact/new');
  };

  return (
    <Box>
      <form action="submit">
        <Box>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameRef} />
        </Box>
        <Box>
          <label htmlFor="group">Group</label>
          <input id="group" type="text" ref={groupRef} />
        </Box>
        <Box>
          <label htmlFor="number">Number</label>
          <input id="number" type="text" ref={numberRef} />
        </Box>
        <Box>
          <label htmlFor="image">image</label>
          <input id="image" type="url" ref={imageRef} />
        </Box>
      </form>
      <Button onClick={onSubmitHandler}>확인</Button>
    </Box>
  );
}
