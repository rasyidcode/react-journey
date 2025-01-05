/* eslint-disable react/prop-types */
import { getImageUrl2 } from "../utils";
import Panel from "./Panel";

export default function Profile({ person }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl2(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
