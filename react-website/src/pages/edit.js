import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import styles from '../editservice.module.css'; // Import the CSS module

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
  
    const { enqueueSnackbar } = useSnackbar();
  
    useEffect(() => {
      if (!id) {
        console.error("Book ID is undefined");
        return; // Stop if ID is not defined
      }
  
      setLoading(true);
      axios.get(`http://localhost:5555/books/${id}`)
        .then((response) => {
          setAuthor(response.data.author);
          setPublishYear(response.data.publishYear);
          setTitle(response.data.title);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          alert('An error happened. Please check console');
          console.log(error);
        });
    }, [id]);
  
    const handleEditBook = () => {
        const data = {
          title,
          author,
          publishYear,
        };
        setLoading(true);
        axios
          .put(`http://localhost:5555/books/${id}`, data)
          .then(() => {
            setLoading(false);
            enqueueSnackbar('Service Edited successfully', { variant: 'success' });
            navigate('/YourServices');
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
          });
    };
  
    return (
      <div className={styles.container}>
        <BackButton />
        <h1 className={styles.title}>Manage Your Services </h1>
        {loading && <div className={styles.loading}><Spinner /></div>}
        <div>
          <div className='my-4'>
            <label className={styles.label}> Service Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className='my-4'>
            <label className={styles.label}>Description</label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className='my-4'>
            <label className={styles.label}>Amount</label>
            <input
              type='number'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className={styles.input}
            />
          </div>
          <button className={styles.button} onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    );
}

export default EditBook;
