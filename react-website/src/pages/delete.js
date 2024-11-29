import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import styles from '../deleteservice.module.css'; // Import the new CSS module

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Service Removed successfully', { variant: 'success' });
        navigate('/YourServices');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className={styles.container}>
      <BackButton />
      <h1 className={styles.title}>Delete Service</h1>
      {loading && <div className={styles.loading}><Spinner /></div>}
      <div className='flex flex-col items-center'>
        <h3 className={styles.confirmationMessage}>
          Are you sure you want to remove your existing service?
        </h3>
        <button
          onClick={handleDeleteBook}
          className={styles.button}
        >
          Yes, Delete it
        </button>
      </div>
    </div>  
  );
}

export default DeleteBook;
