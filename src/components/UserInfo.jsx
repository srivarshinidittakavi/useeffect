function UserInfo({ name, age }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      width: "250px",
      boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>User Information</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;