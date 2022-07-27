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
	useDisclosure,
	useToast
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import React, { useState } from 'react';
import dbConnect from '../../lib/dbConnect';
import Sugestie from '../../models/Sugestie';

//   function EditModal({ numeLectie, imagineLectie, linkLectie }) {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const toast = useToast();
//     // Data
//     const [nume, setNume] = useState( numeLectie );
//     const [imagine, setImagine] = useState( imagineLectie );
//     const [link, setLink] = useState( linkLectie );
//     //
//     const editLectie = async (nume, imagine, link, e) => {
//       const lectieID = Router.query.id;
//       e.preventDefault();
//       const res = await fetch(`/api/lectii/${lectieID}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           nume,
//           imagine,
//           link,
//         }),
//       });
//       let data = await res.json();
//       if (data.message) {
//         console.log(data.message);
//         return toast({
//           title: "Eroare",
//           description: data.message,
//           status: "error",
//           duration: 9000,
//           isClosable: true,
//         });
//       }
//       if (data.messagee == "success") {
//         Router.push(`/lectii/${lectieID}`)
//         return toast({
//           title: "Lectie Editata.",
//           description: "Lectia a fost editata cu succes!",
//           status: "success",
//           duration: 9000,
//           isClosable: true,
//         });
//       }
//     };
//     return (
//       <Box>
//         <Button onClick={onOpen} colorScheme="blue" mt={10}>
//           Editeaza Lectia
//         </Button>

//         <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Editeaza Lectia</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <FormControl>
//                 <FormLabel htmlFor="nume" mt={10}>
//                   Nume
//                 </FormLabel>
//                 <Input
//                   id="nume"
//                   type="nume"
//                   name="nume"
//                   value={nume}
//                   onChange={(e) => setNume(e.target.value)}
//                 />
//                 <FormLabel htmlFor="imagine" mt={10}>
//                   Imagine
//                 </FormLabel>
//                 <Input
//                   id="imagine"
//                   type="imagine"
//                   name="imagine"
//                   value={imagine}
//                   onChange={(e) => setImagine(e.target.value)}
//                 />
//                 <FormLabel htmlFor="link" mt={10}>
//                   Link
//                 </FormLabel>
//                 <Input
//                   id="link"
//                   type="link"
//                   name="link"
//                   value={link}
//                   onChange={(e) => setLink(e.target.value)}
//                 />
//               </FormControl>
//             </ModalBody>

//             <ModalFooter>
//               <Button colorScheme="red" mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button
//                 colorScheme="blue"
//                 onClick={(e) => editLectie(nume, imagine, link, e)}
//               >
//                 Editeaza Lectia
//               </Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </Box>
//     );
//   }

function DeleteAlert() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	const handleDelete = async () => {
		const sugestieID = Router.query.id;

		try {
			await fetch(`/api/sugestie/${sugestieID}`, {
				method: 'Delete'
			});
			Router.push('/sugestie');
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
										{sugestie.poze.map((data, index) => (
											<Box key={index}>
												
												<Image
													src={data}
													alt={proiect.titlu}
													width={1920}
													height={1080}
													priority
													placeholder="blur"
													blurDataURL={`/_next/image?url=${data}&w=16&q=1`}
												/>
										
											</Box>
										))}
									</Carousel>
								);
							}
						})()}
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
										{sugestie.poze.map((data, index) => (
											<Box key={index}>
												
												<Image
													src={data}
													alt={proiect.titlu}
													width={1920}
													height={1080}
													priority
													placeholder="blur"
													blurDataURL={`/_next/image?url=${data}&w=16&q=1`}
												/>
										
											</Box>
										))}
									</Carousel>
								);
							}
						})()}
                        <Center>
                            <DeleteAlert />
                        </Center>
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
