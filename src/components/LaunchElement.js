const LaunchElement = ({ missionName, id }) => (
  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
    <a
      href={`//spacex.land/launches/${id}`}
      style={{ color: 'white' }}
    >
      {missionName}
    </a>
  </div>
);

export default LaunchElement;
