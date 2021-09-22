import React, { useEffect, useState, ReactElement } from "react";
import axios from "axios";
import "./App.css";
import { CardRow, Container, Footer, Header } from "./styles/elements";
import Wilder from "./components/Wilder/Wilder";
import AddWilder from "./components/AddWilder/AddWilder";

type Skills = {
  votes : number;
  title: string;
}

interface WilderState {
  _id?: number;
  city: string
  name:string
  skills: Skills[]
}

function App(): ReactElement {
  const [wilders, setWilders] = useState<WilderState[]>([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilders");
        setWilders(result.data.result);
      } catch (error: any) {
        console.log(error)
      }
    };

    fetchWilders();
  }, []);

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <AddWilder />
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map((wilder) => (
            <Wilder key={wilder._id} city={wilder.city} name={wilder.name} skills={wilder.skills} />
          ))}
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
