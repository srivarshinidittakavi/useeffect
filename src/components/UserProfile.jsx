import UserInfo from "./UserInfo";

function UserProfile() {
  const user = {
    name: "Varshini",
    age: 21
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>User Profile</h2>
      {/* Passing props down to UserInfo */}
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;