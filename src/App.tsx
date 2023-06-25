import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axiosClient, { AxiosClient } from './utils/axios';
import Header from './features/header';
import Form from './features/form';
import Result from './components/result/result';
import Layout from './components/Layout';

function App() {
  const handleSampleApiCall = async () => {
    const response = await axiosClient.get(
      '/weather?q=London&appid=8f6b7b7b0b0b0b0b0b0b0b0b0b0b0b0b'
    );
    console.log(response.data);
  };
  return (
    <Layout>
      <Header />
      <Form />
      <Result />
    </Layout>
  );
}

export default App;
