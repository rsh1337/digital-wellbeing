import {
	Button,
	Center,
	FormLabel,
	Input,
	useDisclosure,
	useToast
} from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
	const toast = useToast();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		let options = { redirect: true, email, password };
		const res = await signIn('credentials', options);
		setMessage(null);
		if (res?.error) {
			return toast({
				title: 'Error',
				description: res.error,
				status: 'error',
				duration: 9000,
				isClosable: true
			});
		}
	};
	return (
		<Center>
			<form onSubmit={handleSubmit}>
				<FormLabel htmlFor="email" mt={10}>
					Adresa Email
				</FormLabel>
				<Input
					id="email"
					type="email"
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
				<Button colorScheme="green" type="submit" mt={10}>
					Conecteaza-te
				</Button>
			</form>
		</Center>
	);
}
