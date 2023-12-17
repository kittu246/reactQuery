
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { customFetch } from './util';
import { toast } from 'react-toastify';
import { useCreateData } from './UseQueryCustomeHooks';



const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  
  // const queryClient = useQueryClient();
  // const {mutate,isLoading,isError,error} = useMutation({
  //   mutationFn:(taskTitle) => customFetch.post('/',{title:taskTitle}),
  //   onSuccess:()=>{
  //     queryClient.invalidateQueries({queryKey:['tasks']})
  //     toast.success("user Added")
  //   },
  //   onError:(err) =>{
  //   toast.error(err.response.data);
  //   }
  // })
  // console.log(newData);

  const {mutate,isLoading,isError,error} = useCreateData();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
