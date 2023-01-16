import "./Card.scss";

const Card = ({monster}) => {
  const { name, id, email } = monster;
  return (
    <div className="monster_card">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
};

export default Card;
