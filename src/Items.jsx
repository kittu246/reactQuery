import SingleItem from './SingleItem';
import { isError, useQuery } from '@tanstack/react-query';
import { customFetch } from './util';
import { useFetchData } from './UseQueryCustomeHooks';
const Items = ({ items }) => {

  // const {isLoading,data,error,isError} = useQuery(
  //   {
  //     queryKey:['tasks'],
  //     queryFn:async () =>{
  //       const {data} = await customFetch.get('/');
  //       return data;
  //       },
  //   }
  // )
  // console.log(serverData);
  const {isLoading,data,error,isError} = useFetchData();

  if(isLoading == true){
    return <p>Is Loading...</p>
  }
  if(isError == true){
    return <p>Error:{error.message}</p>
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
