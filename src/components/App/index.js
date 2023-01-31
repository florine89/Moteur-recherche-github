// == Import



import './styles.scss';

import axios from 'axios';

import Header from '../header/index';
import Posts from '../posts';
import Search from '../searchBar/index'
import NotFound from '../notFound';
import FAQ from '../FAQ';


import React from "react-dom";
import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

// == Composant
function App() {

  const API_URL = 'https://api.github.com/search/repositories?q=';

  const [ loading, setLoading ] = useState(false);

  const [ profileData, setProfileData ] = useState([]);

  const [ resultData, setResultData ] = useState([]);

  const [ newRecherch, setNewRecherch ] = useState();

  const loadResults = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${API_URL}${newRecherch}`)

      setProfileData(response.data.items);
      setResultData(response.data.total_count);
    }
    catch (error) {
      console.error(error);
    }

    finally {
      setLoading(false);
    }
  };

  const deleteResults = () => {
    setProfileData([]);
  }

  useEffect(() => {
    if (!newRecherch) {
      return;
    }
    loadResults();
  }, [ newRecherch ]);



  return (

    <div className='app'>
     <Routes>

        <Route
          path="/" element={(
            <>
              <Search
                loading={loading}
                setNewRecherch={setNewRecherch}
                deleteResults={deleteResults}
              />

              <Header data={resultData}/>

         
          
              {!loading && <Posts data={profileData} />}

           

              
           </>
          )} />

       <Route path="/faq" element={<FAQ />} />

       <Route path="*" element={<NotFound />} />

      </Routes>
   </div>
  );
}

// == Export
export default App;
