import { Segment, Header } from 'semantic-ui-react';

function FAQ() {
  return (
    <Segment>
      <Header as="h1">FAQ</Header>

      <Header as="h2">À quoi ça sert ?</Header>
      <p>Cette application permet de trouver une liste de dépôts GitHub par rapport à votre recherche.</p>

      <Header as="h2">Comment faire une recherche ?</Header>
      <p>Sur la page recherche, complétez le champ de recherche et valider la recherche.</p>

      <Header as="h2">Puis-je chercher n'importe quel terme ?</Header>
      <p>Oui, c'est fou ! <i className="thumbs up icon"></i></p>
    </Segment>
  );
}

export default FAQ;
