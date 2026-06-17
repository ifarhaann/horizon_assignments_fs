
function Button({label,onClick,color}) {

  const colors = {
    orange: "bg-orange-400 text-white",
    red: "bg-red-500 text-white",
    gray: "bg-gray-200 text-black",
    green: "bg-green-500 text-white",
  }
  
  return (
    <div>
       <button onClick={onClick} className={`px-4 py-2 rounded-2xl font-bold ${colors[color]}`} >{label}</button>
    </div>
  )
}

export default Button
