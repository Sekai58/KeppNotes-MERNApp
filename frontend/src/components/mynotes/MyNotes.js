import React, { useEffect, useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import MainScreen from "../mainscreen/MainScreen";
import { Link } from "react-router-dom";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchnotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };
  console.log(notes);

  useEffect(() => {
    fetchnotes();
  }, []);

  return (
    <MainScreen title="Welcome Back..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="md">
          Create note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion defaultActiveKey="0" key={note._id} flush>
          <Accordion.Item>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    flex: 1,
                    fontSize: 18,
                    alignItems: "center",
                  }}
                >
                  <Accordion.Header>{note.title}</Accordion.Header>
                </span>
                <div>
                  <Button href={`/note/${note._id}`} size="sm" className="mx-2">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body eventKey="0">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on -date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
