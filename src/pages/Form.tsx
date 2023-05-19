import { useEffect, useState } from 'react';
import styles from '@/styles/Form.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  useEffect(() => {
    const existingInfo = localStorage.getItem('userInfo');
    if (existingInfo) {
      router.push('/ChatHome');
    } else {
      router.push('/Form');
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      email: email,
      name: name,
      password: password
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    router.push('/ChatHome');
  };

  const handleInputChange = (event) => {
    const eventName = event.target.name;
    const value = event.target.value;

    if (eventName === 'email') {
      setEmail(value);
    } else if (eventName === 'name') {
      setName(value);
    } else if (eventName === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className="email-section">
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button className={styles.button} type="submit" onClick={handleFormSubmit}>
          Se connecter
        </button>
      </form>
    </div>
  );
}