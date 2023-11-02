import { Link, useNavigate } from "react-router-dom"
import ConteinerAuth from "../components/layouts/ConteinerAuth"
import { axiosMusic } from "../utils/configAxios"


const Register = () => {
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const data= Object.fromEntries(formData)

    axiosMusic
      .post("/api/auth/register", data)
      .then(()=>{
        alert("Usuarios creado correctamente")
        navigate("/login")
      })
      .catch((err)=>console.log(err))
  }


  return (
      <ConteinerAuth>
        {/* Imagen */}
        <div className="hidden md:block">
          <img className="max-w-[380px]" src="/images/bannerRegister.png" alt="" />
        </div>

        {/* formulario */}
        <form onSubmit={handleSubmit} className="[&>label]:grid [&>label]:gap-4 grid gap-5 w-[min(100%,300px)] mx-auto items-center">
          <h1 className="text-3xl uppercase font-semibold">Cuenta nueva</h1>

          
          <label className="">
            <span className="text-slate-300/50 text-sm">E-mail</span>
            <input  className="bg-transparent border-b border-secondary outline-none" type="email" name="email"/>
          </label>

          <label>
            <span className="text-slate-300/50 text-sm">Nombre de usuario</span>
            <input className="bg-transparent border-b border-secondary outline-none" type="text" name="name"/>
          </label>

          <label>
            <span className="text-slate-300/50 text-sm">Contraseña</span>
            <input className="bg-transparent border-b border-secondary outline-none" type="password" name="password"/>
          </label>

          <button className="bg-primary-light hover:tracking-widest transition-all rounded-full py-1 px-4 max-w-max mx-auto uppercase font-semibold text-md shadow-lg shadow-purple-400/40 mt-4" type="submit">Crear</button>

          <Link className="text-center underline" to={"/login"}>O iniciar sesión</Link>
        </form>
        </ConteinerAuth>
  )
}

export default Register
