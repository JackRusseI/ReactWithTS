type GithubItemProps = {
  teste: {
    name: string,
    html_url: string,
    description: string
  }
}

export function GithubItem(props: GithubItemProps){
  return(
    <li>
      <h2>{props.teste.name}</h2>
      <p>{props.teste.description}</p>
      <a href={props.teste.html_url}>Acessar diretório</a>
    </li>
  );
}