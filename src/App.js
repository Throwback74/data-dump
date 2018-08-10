import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Friends List</h1>
    {friends.map(friend => (
    <FriendCard
      key={friends.id}
      name={friends.name}
      image={friends.image}
      occupation={friends.occupation}
      location={friends.location}
      
    />

    ))}
    </Wrapper>
);

export default App;
