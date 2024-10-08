
export default function Card(props) {
  return (
    <div className="p-2 m-2 lg:w-52 rounded-lg shadow-md shadow-black/20 hover:bg-black/10 hover:scale-105 duration-200">
      <img src={props.thumbnailImage} alt="" />
      <div className="text-2xl font-bold p-4">{props.name}</div>
      <div className="text-xl font-light p-4">{props.brand}</div>
      <div className="text-xl font-light p-4">{props.basePrice}</div>
      <div className="text-xl font-light p-4">{props.description}</div>
    </div>
  )
}
