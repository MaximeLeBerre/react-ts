import React, { useState, ReactElement } from "react";
import axios from "axios";
import { Button, Error, Form, Input, Label } from "../../styles/form-elements";


function AddWilder(): ReactElement {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Form
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const result = await axios.post("http://localhost:5000/api/wilders", {
            name,
            city,
          });
          if (result.data.success) {
            setErrorMessage("");
          }// eslint-disable-next-line  @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
              setErrorMessage(error.response.data.message);
            } else {
              setErrorMessage(error.message);
            }
        }
      }}
    >


      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
      />
      {errorMessage !== "" && <Error>{errorMessage}</Error>}
      <Button>Add</Button>
    </Form>
  );
}

export default AddWilder;
