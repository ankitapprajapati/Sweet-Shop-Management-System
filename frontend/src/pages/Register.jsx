import RegisterForm from "../components/Register/RegisterForm";


export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Register</h2>
      <RegisterForm/>
    </div>
  );
}
