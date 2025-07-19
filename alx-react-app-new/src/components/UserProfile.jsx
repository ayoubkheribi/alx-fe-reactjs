const UserProfile = (props) => {
  return(
    <div style={{padding:'10px',margin: '10px',border: '1px solid gray'}}>
      <h2 style={{color:'blue'}}>{props.name}</h2>
      <p><span style={{fontWeight:'bold'}}>Age: {props.age}</span></p>
      <p style={{border:'2px solid black'}}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;