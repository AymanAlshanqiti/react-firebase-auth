import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export default function SignUp() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>

						<Form.Group id="password" className="mt-2">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>

						<Form.Group id="password-confirm" className="mt-2">
							<Form.Label>Password Conformation</Form.Label>
							<Form.Control type="password" ref={passwordConfirmRef} required />
						</Form.Group>

						<Button type="submit" className="w-100 mt-3">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? Login
			</div>
		</>
	);
}