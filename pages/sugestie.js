import { Box, Center, CircularProgress, Container } from '@chakra-ui/react';
import Card from '../components/Card';
import { fetcher } from '../lib/fetcher';
import useSWR from 'swr';
import NextLink from 'next/link';
export default function Sugestii() {
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
	return (
		<Box>
			<Container
				maxW="container.lg"
				mt={{ base: '50px', md: '70px' }}
				mb={{ base: '100px', md: '5' }}
			>
				{data.sugestii.map((sugestie) => (
					<Box>
						{(() => {
							if (sugestie.verify === "true") {
								return (
									<NextLink href={`sugestie/${sugestie._id}`}>
										<Box key={sugestie._id} maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
											<Card
												titlu={sugestie.titlu}
												descriere={sugestie.descriere}
											/>
										</Box>
									</NextLink>
								);
							}
						})()}
					</Box>
				))}
			</Container>
		</Box>
	);
}
