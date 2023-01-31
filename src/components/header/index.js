import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoGithub from './logo-github.png';

import { Image, Segment, Icon, Menu } from 'semantic-ui-react';

import './styles.scss';
//import { Header, Icon, Image } from 'semantic-ui-react'
// == Composant
function Header({ data }) {

  const text = data > 1 ? `La recherche a donné : ${data} résultats` :
    `Aucun résultat`;

  return (
    <div>
      <header className="header">
        {/* 2. Router : liens */}
        <Link to="/">
          <Image alt="logo" src={logoGithub} size='medium' centered />
        </Link>
        {/*Je dis à Semantic que le lien de menu c'est un NavLink avec les bonnes routes dans l'URL*/}
        <Menu pointing>
          <Menu.Item as={NavLink} to="/">
            Recherche
          </Menu.Item>

          <Menu.Item as={NavLink} to="/faq">
            FAQ
          </Menu.Item>
        </Menu>
      </header>

      <Segment className='text'
        color='violet'>
        <i class="angle double right icon"></i> {text}
      </Segment>
    </div>
  )
}

Header.proptypes = {
  total_count: PropTypes.number.isRequired,

};

export default Header;
