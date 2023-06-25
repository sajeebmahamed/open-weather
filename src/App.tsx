import React from 'react';
import Header from './features/header';
import Form from './features/form';
import Result from './components/result/result';
import Layout from './components/Layout';
import { WeatherProvider } from './store/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Layout>
        <Header />
        <Form />
        <Result />
      </Layout>
    </WeatherProvider>
  );
}

export default App;
