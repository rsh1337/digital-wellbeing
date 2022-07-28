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
											if (sugestie.verify === "false") {
												return (
                                                    <NextLink
                                                    href={`sugestie/${sugestie._id}`}
                                                >
													<Box
														key={sugestie._id}
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
								<CreateInvitatie/>
							</TabPanel>
						</TabPanels>
					</Tabs>
                    <Center>
                    <Button mt={6} colorScheme="red" onClick={() => signOut()}>
            Deconecteaza-te
          </Button>
                    </Center>
				</Container>
			</Box>
		);
	}
}
