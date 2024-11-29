import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import styles from '../yourservice.module.css'; // Importing the CSS module

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SERVICES LIST</h1>
      
      {/* Anchor tag for redirecting to the create page */}
      <a href='createbooks' className="flex items-center">
        <MdOutlineAddBox className='text-sky-800 text-4xl' />
        <span className='text-lg ml-2'>Add Service</span>
      </a>

      {loading ? (
        <Spinner />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>No</th>
              <th className={styles.th}>Service Name</th>
              <th className={`${styles.th} max-md:hidden`}>Description</th>
              <th className={`${styles.th} max-md:hidden`}>Amount</th>
              <th className={`${styles.th} max-md:hidden`}>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className={styles.td}>{index + 1}</td>
                <td className={styles.td}>{book.title}</td>
                <td className={`${styles.td} max-md:hidden`}>{book.author}</td>
                <td className={`${styles.td} max-md:hidden`}>{book.publishYear}</td>
                <td className={`${styles.td} max-md:hidden`}>
                  <div className={styles.operations}>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className={styles.infoIcon} />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className={styles.editIcon} />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className={styles.deleteIcon} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
