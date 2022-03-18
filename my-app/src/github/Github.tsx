import { useEffect, useState } from "react";
import { GithubItem } from "./GithubItem";

type Users = {
  name: string,
  html_url: string,
  description: string
}

export function Github(){
  const [users, setUsers] = useState<Users[]>([])

  useEffect(()=>{
  fetch('https://api.github.com/orgs/tesla/repos')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, []);

  return(
    <ul>
      {users.map(x => <GithubItem key={x.name} teste={x} /> )}
    </ul>
  );
}