import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import styles from '../showservice.module.css'; // Ensure this path is correct

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className={styles.container}> {/* Apply the container style here */}
      <BackButton />
      <h1 className={styles.title}>Service Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          <div className={styles.serviceDetail}>
            <span className={styles.label}>Service Id:</span>
            <span className={styles.text}>{book._id}</span>
          </div>
          <div className={styles.serviceDetail}>
            <span className={styles.label}>Service Title:</span>
            <span className={styles.text}>{book.title}</span>
          </div>
          <div className={styles.serviceDetail}>
            <span className={styles.label}>Description:</span>
            <span className={styles.text}>{book.author}</span>
          </div>
          <div className={styles.serviceDetail}>
            <span className={styles.label}>Amount:</span>
            <span className={styles.text}>{book.publishYear}</span>
          </div>
          <div className={styles.serviceDetail}>
            <span className={styles.label}>Create Time:</span>
            <span className={styles.text}>{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className={styles.serviceDetail}>
            <span className={styles.label}>Last Update Time:</span>
            <span className={styles.text}>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
