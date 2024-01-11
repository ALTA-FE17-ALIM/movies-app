/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const body = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    try {
      alert(JSON.stringify(body));
      alert("Login successfuly");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center font-ubuntu">
      <div className="max-w-md w-full shadow-xl rounded-lg p-10 bg-[#0A0D14]">
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-y-4">
          <img
            src="https://live.themewild.com/moplay/assets/img/logo/logo.png"
            alt="logo"
            width={200}
          />
          <span className="text-[#757F95] text-xl font-medium">Login with your moplay account</span>
          <Separator className="bg-[#3f4551]" />

          <div className="w-full text-[#757F95] space-y-2">
            <Label htmlFor="username" className="text-[#757F95]">
              Username
            </Label>
            <Input
              className="py-6 px-[18px] text-slate-300 rounded-[10px] bg-[#131722] border-slate-700 focus-visible:border-buttonColor focus-visible:ring-offset-0"
              type="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div className="w-full text-[#757F95] space-y-2">
            <Label htmlFor="password" className="text-[#757F95]">
              Password
            </Label>
            <Input
              className="py-6 px-[18px] text-slate-300 rounded-[10px] bg-[#131722] border-slate-700 focus-visible:border-buttonColor focus-visible:ring-offset-0"
              type="password"
              id="password"
              placeholder="password"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-x-2 text-[#757F95]">
              <Input id="Remember" placeholder="Remember" type="checkbox" />
              <Label htmlFor="Remember" className="text-[#757F95] whitespace-nowrap">
                Remember Me
              </Label>
            </div>
            <span className="text-buttonColor">Forgot Password?</span>
          </div>

          <Button size="full" type="submit">
            <LogIn className="w-4 h-4  " /> SIGN IN
          </Button>

          <span className="text-sm text-[#757F95]">or</span>
          <p className="text-[#757F95]">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-buttonColor">
              Sign Up.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
