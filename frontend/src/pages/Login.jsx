import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <LoginForm />
    </div>
  );
}
