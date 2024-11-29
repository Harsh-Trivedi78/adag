import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import styles from '../CreateBooks.module.css';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [serviceType, setServiceType] = useState(''); // New state for service type
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      serviceType, // Include service type in data sent to the backend
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Service Added successfully', { variant: 'success' });
        setTitle('');
        setAuthor('');
        setPublishYear('');
        setServiceType(''); // Reset service type
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
      <h1 className="text-3xl my-4">Add Service</h1>
      {loading && <Spinner />}
      <div className="flex flex-col">
        <div className="my-4">
          <label className={styles.title}>Service Name / Type of service</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className="my-4">
          <label className={styles.title}>Description</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className="my-4">
          <label className={styles.title}>Service Type</label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className={styles.input}
          >
            <option value="" disabled>Select option</option>
            <option value="fee-based">Fee Based</option>
            <option value="commission-based">Commission Based</option>
          </select>
        </div>
        <div className="my-4">
          <label className={styles.title}>Amount</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className={styles.input}
          />
        </div>
        <button className={styles.button} onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
