// import axios from 'axios';
// import { Box, Button } from 'components/Atoms';
// import { dataType } from 'components/Organisms/Contact/ContactList';
// import { useEffect, useRef } from 'react';
// import useAxios from 'util/hooks/useAxios';

// export default function NewContactForm() {
//   const lists = useAxios('http://localhost:3000/api/detail/id');
//   const nameRef = useRef();
//   const groupRef = useRef();
//   const numberRef = useRef();
//   const imageRef = useRef();

//   const onSubmitHandler = (event: any) => {
//     event.preventDefault();
//     const newName = nameRef.current.value;
//     const newGroup = groupRef.current.value;
//     const newNumber = numberRef.current.value;
//     const newImage = imageRef.current.value;

//     const contactData = {
//       name: newName,
//       group: newGroup,
//       number: newNumber,
//       url: newImage,
//     };

//     props.onAddNewConatact(contactData);
// const getNewData = async (post: dataType) => {
//   const newId = lists.length;
//   const { data } = await axios({
//     url: 'http://localhost:3000/api/detail/id',
//     method: 'POST',
//     data: {
//       id: Number(newId),
//       name: nameRef.current.value,
//       group: groupRef.current.value,
//       number: numberRef.current.value,
//       url: null,
//     },
//   });
//   return data;
// };
// getNewData();
// };

//   return (
//     <Box>
//       <form action="submit">
//         <Box>
//           <label htmlFor="name">Name</label>
//           <input id="name" type="text" ref={nameRef} />
//         </Box>
//         <Box>
//           <label htmlFor="group">Group</label>
//           <input id="group" type="text" ref={groupRef} />
//         </Box>
//         <Box>
//           <label htmlFor="number">Number</label>
//           <input id="number" type="text" ref={numberRef} />
//         </Box>
//         <Box>
//           <label htmlFor="image">image</label>
//           <input id="image" type="url" ref={imageRef} />
//         </Box>
//       </form>
//       <Button onClick={onSubmitHandler}>확인</Button>
//     </Box>
//   );
// }
