import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";

const fetchUserNames = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const settingMonsters = async () => {
      const monsters = await fetchUserNames();

      setMonster(monsters);
    };
    settingMonsters();
  }, [search]);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(search)
    );
    setFilteredMonsters(filteredMonsters);
  }, [monsters, search]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value.toLocaleLowerCase());
  };
  return (
    <div className="home">
      <h1 className="monsters_title">MONSTERS ROLODEX</h1>
      <input onChange={handleInputChange} value={search} name="search" />
      <div className="monsters_container">
        {filteredMonsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    </div>
  );
};

export default Home;
