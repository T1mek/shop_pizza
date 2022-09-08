import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import IPizza from "../@types/types";




const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<IPizza>();
const navigate = useNavigate()
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://62c5602fa361f72512824193.mockapi.io/pizza/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка получения пиццы")
        navigate('/')
      }
    }
    fetchPizza();
  },[id,navigate]);
  if (!pizza) {
    return <>"Загрузка ..."; </>
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Пицца" />
      <h2>{pizza.title}</h2>

      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
