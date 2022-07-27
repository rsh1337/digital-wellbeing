import {
	Button,
	Center,
	Container,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast
} from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
				<Button onClick={onOpen} variant="ghost">Sign In</Button>

				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Sign In</ModalHeader>
						<ModalCloseButton />
						<form onSubmit={handleSubmit}>
						<ModalBody>
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
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								Close
							</Button>
							<Button colorScheme="green" type="submit">
							Conecteaza-te
						</Button>
						</ModalFooter>
						</form>
					</ModalContent>
				</Modal>
		</Center>
	);
}
