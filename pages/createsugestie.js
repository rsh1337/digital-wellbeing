import {
	Button,
	Center,
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Textarea,
	useToast
} from '@chakra-ui/react';
import { useState } from 'react';

export default function CreateSugestie() {
	const toast = useToast();
	// Data
	const [titlu, setTitlu] = useState('');
	const [descriere, setDescriere] = useState('');
	const [poze, setPoze] = useState('');
	//
	const createSugestie = async (titlu, descriere, poze, e) => {
		e.preventDefault();
		const res = await fetch('/api/sugestie/sugestii', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				titlu,
				descriere,
				poze
			})
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
			return toast({
				title: 'Sugestie Adaugata.',
				description: 'Sugestia va fi verificata de un admin!',
				status: 'success',
				duration: 9000,
				isClosable: true
			});
		}
	};
	return (
		<Center>
			<Container maxW={{ base: 'container.sm' }} mt={10} mb={10}>
				<FormControl>
					<FormLabel htmlFor="titlu" mt={10}>
						Titlu
					</FormLabel>
					<Input
						id="titlu"
						type="titlu"
						name="titlu"
						value={titlu}
						onChange={(e) => setTitlu(e.target.value)}
					/>
					<FormLabel htmlFor="descriere" mt={10}>
						Descriere
					</FormLabel>
					<Input
						id="descriere"
						type="descriere"
						name="descriere"
						value={descriere}
						onChange={(e) => setDescriere(e.target.value)}
					/>
					<FormLabel htmlFor="poze" mt={10}>
						Poza
					</FormLabel>
					<Textarea
						id="poze"
						type="poze"
						name="poze"
						value={poze}
						onChange={(e) => setPoze(e.target.value)}
					/>
					<Button
						mt={6}
						colorScheme="blue"
						onClick={(e) =>
							createSugestie(titlu, descriere,poze, e)
						}
					>
						Creaza Sugestie
					</Button>
				</FormControl>
			</Container>
		</Center>
	);
}
