import "./ContactCard.css"

export const ContactCard = ({addition,handleDelete}) => {
  return (
    <>
        <li key={addition.id}>
            <span>
                {addition.id} - {addition.name}
            </span>
            <button onClick={() => handleDelete(addition.id)} className="delete">Delete</button>
        </li>
    </>
  )
}
