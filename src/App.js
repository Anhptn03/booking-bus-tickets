import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import Promos from './components/Promos';
import RoutersList from './components/RoutersList';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <SearchForm />
            <Promos />
            <RoutersList />
        </div>
    );
}

export default App;
