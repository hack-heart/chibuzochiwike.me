import React from 'react';

import Layout from '../components/layout';
import styles from './contact.module.scss';

const Contact: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className={styles.container}>
        <p>Let&apos;s stay in touch</p>
        <input type="hidden" name="bot-field" />

        <div className={styles.labelContainer}>
          <label htmlFor="email">Name</label>
          <input type="text" name="name" />
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="email">Phone</label>
          <input type="text" name="number" />
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="email">Subject</label>
          <input type="text" name="subject" />
        </div>

        <div className={styles.messageContainer}>
          <label htmlFor="email">Message</label>
          <textarea name="message" />
        </div>

        <button type="submit">Send</button>

      </form>
    </Layout>
  );
};

export default Contact;
