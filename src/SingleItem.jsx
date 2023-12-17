import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "./util";
import { toast } from "react-toastify";
import { useEditData,useDeleteData } from "./UseQueryCustomeHooks";

const SingleItem = ({ item }) => {
  // const queryClient = useQueryClient();
//   const {mutate:editTask} = useMutation({
//     mutationFn:({taskId,isDone})=>{
//       return customFetch.patch(`/${taskId}`),{isDone}
//     },
//      // we can't hardcode is done true 
//     onSuccess:() =>{
//       queryClient.invalidateQueries({queryKey:['tasks']})
// 1
//     }
    
   
//   })
  const editTask = useEditData()

  // const {mutate:deleteTask} =useMutation({
      
  //   mutationFn:(taskId) =>customFetch.delete(`/${taskId}`),
  //   onSuccess:()=>{
  //     queryClient.invalidateQueries({queryKey:['tasks']})
  //     toast.success("user Deleted")
  //   }
  // })

  const deleteTask= useDeleteData()

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId:item.id,isDone:!item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
