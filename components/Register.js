import {
	Button,
	Center,
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	useToast
} from '@chakra-ui/react';
import Router from 'next/router';
import { useState } from 'react';

export default function Register() {
	const toast = useToast();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState(null);
	const registerUser = async (email, password, name, e) => {
		e.preventDefault();
		const res = await fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password, name })
		});
		let data = await res.json();
		if (data.message) {
			console.log(data.message);
			return toast({
				title: 'Eroare',
				description: data.message,
				status: 'error',
				duration: 9000,
				isClosable: true
			});
		}
		if (data.msgsg == 'success') {
			Router.push('/');
			return toast({
				title: 'Cont Creat.',
				description: 'Contul tau a fost creat cu succes.',
				status: 'success',
				duration: 9000,
				isClosable: true
			});
		}
	};
	return (
		<Center>
			<Container maxW={{ base: 'container.sm' }} mt={10} mb={10}>
				<FormControl isRequired>
					<FormLabel htmlFor="name" mt={10}>
						Nume
					</FormLabel>
					<Input
						id="name"
						placeholder="Ion Popescu"
						name="name"
						value={name}
						onChange={(e) => setNume(e.target.value)}
					/>
					<FormLabel htmlFor="email" mt={10}>
						Adresa Email
					</FormLabel>
					<Input
						id="email"
						type="email"
						placeholder="exemplu@rares-andrei.me"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<FormLabel htmlFor="password" mt={10}>
						Parola
					</FormLabel>
					<Input
						id="password"
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<FormHelperText>
						Parolele sunt 100% criptate.
					</FormHelperText>
					<Button
						mt={6}
						colorScheme="green"
						onClick={(e) => registerUser(email, password, name, e)}
					>
						Inregistreaza-te
					</Button>
				</FormControl>
			</Container>
		</Center>
	);
}
