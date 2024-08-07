import {Link} from "react-router-dom"
const SingUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold text-slate my-7">SingUp</h1>
      <form className="flex flex-col gap-4 ">
        <input type="tex" placeholder="username" className="p-3 border rounded-lg" name="username" />
        <input type="email" placeholder="email" className="p-3 border rounded-lg"name="email" />
        <input type="password" placeholder="password" className="p-3 border rounded-lg"name="password" />
        <button className="p-3 border rounded-lg bg-slate-700 text-white hover:opacity-95 disabled:opacity-80 ">
          SING UP
        </button>
      </form>
      <div className="flex gap-2 mt-2">
      <p>Have an account?</p>
       <Link className="text-blue-600" to={"/singIn"}>SING IN</Link>
      </div>
    </div>
  )
}

export default SingUp
