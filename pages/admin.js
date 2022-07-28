import {
	Box,
	Button,
	Center,
	CircularProgress,
	Container,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import useSWR from 'swr';
import Login from '../components/Login';
import { fetcher } from '../lib/fetcher';
import NextLink from 'next/link';
import Card from '../components/Card';
import CreateInvitatie from '../components/create_invitation';
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
export default function Signin() {
	const { data: session, status } = useSession();
	const { data, error } = useSWR('/api/sugestie/sugestii', fetcher);
	if (error) return <div>Failed to load</div>;
	if (!data) {
		return (
			<Container maxW={{ base: 'container.xl' }} mt={10} mb={10}>
				<Center>
					<CircularProgress />
				</Center>
			</Container>
		);
	}

	if (status === 'unauthenticated') {
		return (
			<motion.div
				className="card-container"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.1 }}
			>
				<motion.div className="card" variants={cardVariants}>
					<Login />
				</motion.div>
			</motion.div>
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
							<Tabs variant="soft-rounded" colorScheme="green">
								<Center>
									<TabList>
										<Tab>Verificare Sugestii</Tab>
										<Tab>Creare Invitatie</Tab>
									</TabList>
								</Center>
								<TabPanels mt={8}>
									<TabPanel>
										{data.sugestii.map((sugestie) => (
											<Box key={sugestie._id}>
												{(() => {
													if (
														sugestie.verify ===
														'false'
													) {
														return (
															<NextLink
																href={`sugestie/${sugestie._id}`}
															>
																<Box
																	key={
																		sugestie._id
																	}
																	maxW="full"
																	borderWidth="1px"
																	borderRadius="lg"
																	overflow="hidden"
																	mb={4}
																>
																	<Card
																		titlu={
																			sugestie.titlu
																		}
																		descriere={
																			sugestie.descriere
																		}
																	/>
																</Box>
															</NextLink>
														);
													}
												})()}
											</Box>
										))}
									</TabPanel>
									<TabPanel>
										<CreateInvitatie />
									</TabPanel>
								</TabPanels>
							</Tabs>
							<Center>
								<Button
									mt={6}
									colorScheme="red"
									onClick={() => signOut()}
								>
									Deconecteaza-te
								</Button>
							</Center>
						</motion.div>
					</motion.div>
				</Container>
			</Box>
		);
	}
}
