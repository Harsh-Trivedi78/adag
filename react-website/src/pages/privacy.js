import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Introduction</h2>
        <p style={styles.text}>
          Welcome to <span style={styles.highlight}>Branding Boosters</span>. We are committed to protecting your privacy and handling your data responsibly. This Privacy Policy outlines how we collect, use, and protect your personal information.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Data Collection</h2>
        <p style={styles.text}>
          We collect various types of information to improve our services, including:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Personal Identification Information (e.g., name, email address)</li>
          <li style={styles.listItem}>Usage Data (e.g., pages visited, time spent on pages)</li>
          <li style={styles.listItem}>Marketing Preferences (e.g., newsletter subscriptions)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Data Usage</h2>
        <p style={styles.text}>
          We use your information to:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Provide and improve our services</li>
          <li style={styles.listItem}>Communicate with you about updates and offers</li>
          <li style={styles.listItem}>Analyze usage for research and improvement</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Data Protection</h2>
        <p style={styles.text}>
          We implement security measures to protect your information. However, no method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal data, but we cannot guarantee its absolute security.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>User Rights</h2>
        <p style={styles.text}>
          You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at <span style={styles.highlight}>support@brandingboosters.com</span>.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Third-Party Services</h2>
        <p style={styles.text}>
          We may share your information with third-party services for analytics and advertising purposes. However, we do not sell or rent your personal data to external parties.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Updates to This Privacy Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page, and your continued use of our services signifies acceptance of these changes.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Contact Us</h2>
        <p style={styles.text}>
          If you have any questions about our Privacy Policy, please contact us at <span style={styles.highlight}>support@brandingboosters.com</span>.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  subTitle: {
    fontSize: '1.8rem',
    color: '#007bff',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  },
  highlight: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  },
};

export default PrivacyPolicy;
