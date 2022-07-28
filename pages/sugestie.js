import { Box, Center, CircularProgress, Container } from '@chakra-ui/react';
import Card from '../components/Card';
import { fetcher } from '../lib/fetcher';
import useSWR from 'swr';
import NextLink from 'next/link';
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
				<motion.div
					className="card-container"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.1 }}
				>
					<motion.div className="card" variants={cardVariants}>
						{data.sugestii.map((sugestie) => (
							<Box key={sugestie._id}>
								{(() => {
									if (sugestie.verify === 'true') {
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
														titlu={sugestie.titlu}
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
					</motion.div>
				</motion.div>
			</Container>
		</Box>
	);
}
