import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AspectRatio,
	Box,
	Button,
	Center,
	Container,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
	useDisclosure,
	useToast
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import React, { useState } from 'react';
import dbConnect from '../../lib/dbConnect';
import Sugestie from '../../models/Sugestie';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { Variants, motion } from 'framer-motion';
const cardVariants = {
	offscreen: {
		y: 500
	},
	onscreen: {
		y: 0,
		rotate: 0,
		transition: {
			type: 'spring',
			duration: 1,
			bounce: 0
		}
	}
};

function VerifySugestie() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	// Data
	const [verify, setVerify] = useState('true');
	//
	const VerifySugestie = async (verify, e) => {
		const sugestieID = Router.query.id;
		e.preventDefault();
		const res = await fetch(`/api/sugestie/${sugestieID}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				verify
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
		if (data.messagee == 'success') {
			Router.push(`/admin`);
			return toast({
				title: 'Sugestie verificata.',
				description: 'Sugestia a fost verificata cu succes!',
				status: 'success',
				duration: 9000,
				isClosable: true
			});
		}
	};
	return (
		<Box>
			<Button
				colorScheme="green"
				onClick={(e) => VerifySugestie(verify, e)}
				ml={3}
				mt={10}
			>
				Verifica
			</Button>
		</Box>
	);
}

function EditSugestie({ titluSugestie, descriereSugestie, pozeSugestie }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	// Data
	const [titlu, setTitlu] = useState(titluSugestie);
	const [descriere, setDescriere] = useState(descriereSugestie);
	const [poze, setPoze] = useState(pozeSugestie);
	//
	const editSugestie = async (titlu, descriere, poze, e) => {
		const sugestieID = Router.query.id;
		e.preventDefault();
		const res = await fetch(`/api/sugestie/${sugestieID}`, {
			method: 'PUT',
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
		if (data.messagee == 'success') {
			Router.push(`/sugestie/${sugestieID}`);
			return toast({
				title: 'Sugestie Editata.',
				description: 'Sugestie a fost editata cu succes!',
				status: 'success',
				duration: 9000,
				isClosable: true
			});
		}
	};
	return (
		<Box>
			<Button onClick={onOpen} colorScheme="blue" ml={3} mt={10}>
				Editeaza
			</Button>

			<Modal
				closeOnOverlayClick={false}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Editeaza Sugestia</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
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
							<Textarea
								id="descriere"
								type="descriere"
								name="descriere"
								value={descriere}
								onChange={(e) => setDescriere(e.target.value)}
							/>
							<FormLabel htmlFor="poze" mt={10}>
								Poze
							</FormLabel>
							<Textarea
								id="poze"
								type="poze"
								name="poze"
								value={poze}
								onChange={(e) => setPoze(e.target.value)}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="red" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							colorScheme="blue"
							onClick={(e) =>
								editSugestie(titlu, descriere, poze, e)
							}
						>
							Editeaza Sugestia
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}

function DeleteAlert() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	const handleDelete = async () => {
		const sugestieID = Router.query.id;

		try {
			await fetch(`/api/sugestie/${sugestieID}`, {
				method: 'Delete'
			});
			Router.push('/admin');
		} catch (error) {
			console.log('Failed to delete the sugestie.');
		}
	};
	return (
		<Box>
			<Button colorScheme="red" onClick={onOpen} mt={10}>
				Delete
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Sugestie
						</AlertDialogHeader>

						<AlertDialogBody>
							Esti sigur ca vrei sa stergi sugestia??
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={handleDelete}
								ml={3}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</Box>
	);
}

export default function Index({ sugestie }) {
	const { status } = useSession();
	if (status === 'unauthenticated') {
		return (
			<Box>
				<Container
					maxW="container.lg"
					mt={{ base: '80px', md: '100px' }}
					mb={{ base: '100px', md: '5' }}
				>
					<motion.div
						className="card-container"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.1 }}
					>
						<motion.div className="card" variants={cardVariants}>
							<Center>
								<Heading>{sugestie.titlu}</Heading>
							</Center>
							<Text fontSize="xl" mt={40}>
								{sugestie.descriere}
							</Text>
							{(() => {
								if (!sugestie.poze === '') {
									return (
										<Carousel showThumbs={false}>
											{sugestie.poze.map(
												(data, index) => (
													<Box key={index}>
														<Image
															src={data}
															alt={sugestie.titlu}
															width={1920}
															height={1080}
															priority
															placeholder="blur"
															blurDataURL={`/_next/image?url=${data}&w=16&q=1`}
														/>
													</Box>
												)
											)}
										</Carousel>
									);
								}
							})()}
						</motion.div>
					</motion.div>
				</Container>
			</Box>
		);
	}

	if (status === 'authenticated') {
		return (
			<Box>
				<Container
					maxW="container.lg"
					mt={{ base: '80px', md: '100px' }}
					mb={{ base: '100px', md: '5' }}
				>
					<motion.div
						className="card-container"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.1 }}
					>
						<motion.div className="card" variants={cardVariants}>
							<Center>
								<Heading>{sugestie.titlu}</Heading>
							</Center>
							<Text fontSize="xl" mt={40}>
								{sugestie.descriere}
							</Text>
							{(() => {
								if (sugestie.poze) {
									return (
										<Carousel showThumbs={false}>
											{sugestie.poze.map(
												(data, index) => (
													<Box key={index}>
														<Image
															src={data}
															alt={sugestie.titlu}
															width={1920}
															height={1080}
															priority
															placeholder="blur"
															blurDataURL={`/_next/image?url=${data}&w=16&q=1`}
														/>
													</Box>
												)
											)}
										</Carousel>
									);
								}
							})()}
							<Center>
								<DeleteAlert />
								<VerifySugestie />
								<EditSugestie
									titluSugestie={sugestie.titlu}
									descriereSugestie={sugestie.descriere}
									pozeSugestie={sugestie.poze}
								/>
							</Center>
						</motion.div>
					</motion.div>
				</Container>
			</Box>
		);
	}
}

export async function getServerSideProps({ params }) {
	await dbConnect();

	const sugestie = await Sugestie.findById(params.id).lean();
	sugestie._id = sugestie._id.toString();

	return { props: { sugestie } };
}
