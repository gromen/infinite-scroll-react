import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
import LaunchElement from './components/LaunchElement';
import { onScroll } from './utils/onScroll';

function App() {
  const graphQlClient = new GraphQLClient('https://api.spacex.land/graphql');
  const {
    data, isLoading, error, isSuccess
  } = useQuery('getLaunches', async() => graphQlClient.request(gql`
      query {
        launchesPast(limit: 30) {
          mission_name
          id
        }
      }
    `));

  // const postMutation = async() => fetch('https://api.spacex.land/graphql', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: `
  //       query GetLaunches($offset: Int){
  //         launchesPast(limit: 30, offset: $offset) {
  //           mission_name
  //           id
  //         }
  //       }
  //     `,
  //     variables: {
  //       offset: newOffset + 30,
  //     },
  //   }),
  // })
  //   .then(res => res.json());

  // const queryClient = useQueryClient();
  //

  // useEffect(() => {
  //   if (!isLoading) {
  //     postMutation().then(response => {
  //       // eslint-disable-next-line
  //       setLaunches(response.data.launchesPast)
  //     });
  //   }
  // }, [isSuccess]);
  // const mutation = useMutation('data', {
  //   onSuccess: data => {
  //     queryClient.setQueryData('getLaunches', oldQueryData => ({
  //       ...oldQueryData,
  //       data: [...oldQueryData.data, data]
  //     }));
  //   }
  // });

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error :(((</div>;

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '30px 0 0', height: 'calc(10vh - 30px)' }}>SpaceX Launches</h1>
      <div
        onScroll={event => onScroll(event, lodaMore)}
        style={{ maxHeight: '90vh', overflow: 'auto' }}
      >
        {isSuccess
          && data.launchesPast.map(({ id, mission_name }) => (
            <LaunchElement key={mission_name} missionName={mission_name} id={id} />
          ))}
      </div>
    </div>
  );
}

export default App;
