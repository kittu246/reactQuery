import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "./util";


import { toast } from "react-toastify";

export const useFetchData =() =>{

    
    const {isLoading,data,error,isError} = useQuery(
        {
          queryKey:['tasks'],
          queryFn:async () =>{
            const {data} = await customFetch.get('/');
            return data;
            },
        }
      )

      return {isLoading,data,error,isError}

}

export const useEditData =() =>{

    const queryClient = useQueryClient();

    

    const {mutate:editTask} = useMutation({  // here editTask is alias for mutate not object
        mutationFn:({taskId,isDone})=>{
          return customFetch.patch(`/${taskId}`),{isDone}
        },
         // we can't hardcode is done true 
        onSuccess:() =>{
          queryClient.invalidateQueries({queryKey:['tasks']})
    1
        }
        
       
      })

      return editTask;
    
}

export const useDeleteData =() =>{

    const queryClient = useQueryClient();

    const {mutate:deleteTask} =useMutation({
      
        mutationFn:(taskId) =>customFetch.delete(`/${taskId}`),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['tasks']})
          toast.success("user Deleted")
        }
      })

      return deleteTask;
    
}

export const useCreateData =() =>{

    const queryClient = useQueryClient();
    const {mutate,isLoading,isError,error} = useMutation({
      mutationFn:(taskTitle) => customFetch.post('/',{title:taskTitle}),
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['tasks']})
        toast.success("user Added")
      },
      onError:(err) =>{
      toast.error(err.response.data);
      }
    })


    return {mutate,isLoading,isError,error}


    
}