import { gql, useQuery } from '@apollo/client';

const LAUNCHES_QUERY = gql(`
  {
    launchesPast(limit: 30) {
      id
      mission_name
    }
  }
`);

const LaunchesList = () => {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error :(((</div>;

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>SpaceX Launches</h1>
      {data.launchesPast.map(({ id, mission_name }) => (
        <div key={mission_name} style={{ textAlign: 'center', marginBottom: '30px' }}>
          <a href={`//spacex.land/launches/${id}`} style={{ color: 'white', textDecoration: 'line-through' }}>{mission_name}</a>
        </div>
      ))}
    </>
  );
};

export default LaunchesList;
