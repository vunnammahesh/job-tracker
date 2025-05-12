import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Login = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const handleLogin = ()=>{
    login({name:"mahesh",token:"1234"});
    navigate("/");
  }
  console.log("Login component loaded")
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login Now</button>
    </div>
  )
}

export default Login
