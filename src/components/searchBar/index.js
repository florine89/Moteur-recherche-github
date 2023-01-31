import React from "react";

import PropTypes from 'prop-types';

import { Icon, Input, Form, Button } from 'semantic-ui-react'

import { useState } from 'react';

import './style.scss';
//le setNewRecherch correspond à un tableau des nouvelles données
//qui apparaitra dans les résultats du loadResults
function searchBar({ setNewRecherch , loading, deleteResults}) {

  //içi le setSearchItem correspond à la nouvelle rentrée dans la barre de recherche
  const [ searchItem, setSearchItem ] = useState("");

  const handleChange = ({ target }) => {
    setSearchItem(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewRecherch(searchItem);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setNewRecherch(searchItem);
  // };

  const handleClickCancel = () => {
    setSearchItem('');
    deleteResults();
  };

  return (

    <Form className="search" onSubmit={handleSubmit}>
      <Input
        type="text"      
        loading={loading}
        size='large' icon='cancel' placeholder='Search...'
        
        name="text"       
        onChange={handleChange}
        onClick={handleClickCancel}
        value={searchItem}
      />
     
      <Button className="BouttonSearch" icon onClick={handleSubmit}>
        <Icon name="search" />
      </Button>
    </Form>

  );
}

searchBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  deleteResults: PropTypes.func.isRequired,
}

export default searchBar;
