import {
	Box,
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
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import useSWR from 'swr';
import Login from '../components/Login';
import { fetcher } from '../lib/fetcher';
import NextLink from 'next/link'
import Card from '../components/Card';
import DeleteButton from '../components/DeleteButton';
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
		return <Login />;
	}
	if (status === 'authenticated') {
		return (
			<Box>
				<Container
					maxW="container.lg"
					mt={{ base: '80px', md: '100px' }}
					mb={{ base: '100px', md: '5' }}
				>
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
											if (sugestie.verify === false) {
												return (
													<NextLink
														href={`sugestie/${sugestie._id}`}
													>
														<Box key={sugestie._id} maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
															<Card
																titlu={
																	sugestie.titlu
																}
																descriere={
																	sugestie.descriere
																}
															/>
                                                            <Center mt={3}>
                                                            <DeleteButton />
                                                            </Center>
														</Box>
													</NextLink>
												);
											}
										})()}
									</Box>
								))}
							</TabPanel>
							<TabPanel>
								<Text>Test hatzz invitatie</Text>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Container>
			</Box>
		);
	}
}
