import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import styles from './Register.module.css';

function Register() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const register = async (event: FormEvent) => {
		event.preventDefault();
		try {
			axios.post(
				'http://localhost:4000/auth/local/register',
				{
					email,
					username,
					password,
				},
				{ withCredentials: true }
			);
		} catch (err) {}
	};
	const googleLogin = () => {
		window.open('http://localhost:4000/auth/google', '_self');
	};

	return (
		<div className={styles.loginPage}>
			<h1>Register</h1>
			<form onSubmit={register}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				></input>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<input type="submit" value="Register" />
			</form>
			<div className={styles.loginForm}>
				<h3>Or login with:</h3>
				<div className={styles.googleContainer} onClick={googleLogin}>
					<p>
						<FcGoogle size="2rem" />
						Login with Google
					</p>
				</div>
			</div>
		</div>
	);
}

export default Register;