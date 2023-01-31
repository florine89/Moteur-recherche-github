import { Header, Icon } from 'semantic-ui-react';

function NotFound() {
  return (
    <Header as="h2" icon textAlign="center" size="huge">
      <Icon name="cog" loading />
      404
      <Header.Subheader>
        Page non trouvée.
      </Header.Subheader>
    </Header>
  );
}

export default NotFound;
