import PropTypes from 'prop-types';

import { List, Image, Segment,} from 'semantic-ui-react';

function Post({name, description, owner}) {
  return (

    <List >
       <Segment>
    
      <Image src={owner.avatar_url} href={owner.html_url} as='a'></Image>
      <List.Header href={owner.html_url} as='a'>{name}</List.Header>
           <List.Description>
          {description}
        </List.Description>
        </Segment>
    </List>
    
  );
}

Post.propTypes = {

  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,

};

export default Post;
