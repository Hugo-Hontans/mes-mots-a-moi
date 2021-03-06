import React, { useState } from "react";
import "./word-add.css";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../../utils/API';

export function WordAdd(props) {
  const [word, setWord] = useState("");
  const handleChange = (event) => {
    setWord(event.target.value);
  };
  const submit = async () => {
    await API.createWord(word);
  };
  return (
    <form onSubmit={(event) => {submit(); event.preventDefault();}}>
      <FormGroup>
        <FormLabel>New word</FormLabel>
        <FormControl value={word} onChange={handleChange} type="text" />
      </FormGroup>
      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}
