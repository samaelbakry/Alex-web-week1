import { useContext, useState } from "react";
import { loginFn } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { EyeClosed, Pencil } from "lucide-react";
import { AuthContextWrapper } from "../../context/AuthContext";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContextWrapper);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      setLoading(true);
      if (!userName || !password) {
        console.error("Please fill in all fields");
        return;
      }
      const data = await loginFn(userName, password);
      const user = {username:data?.username , email:data?.email};
      login(data.accessToken, user);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-stone-100 border h-70 border-gray-100 shadow flex flex-col items-center justify-center rounded-2xl px-4">
      <Input
        placeholder={"Enter your user name"}
        value={userName}
        loading={loading}
        setValue={(e) => setUserName(e.target.value)}
        type={"text"}
        icon={<Pencil size={15} color="gray"/>}
      />
      <Input
        placeholder={"Enter your password"}
        value={password}
        loading={loading}
        setValue={(e) => setPassword(e.target.value)}
        type={"password"}
        icon={<EyeClosed size={15} color="gray"/>}
      />
      <Button
        children="Login"
        disabled={loading}
        onClick={handleLogin}
        varient="primary"
      />
    </div>
  );
}
