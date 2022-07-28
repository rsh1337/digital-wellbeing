import {
	Box,
	Button,
	Center,
	Container,
	Heading,
	HStack,
	Text,
	VStack
} from '@chakra-ui/react';
import { Variants, motion } from 'framer-motion';
import NextLink from 'next/link';
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

export default function Home() {
	return (
		<Box>
			<Container
				maxW="container.lg"
				mt={{ base: '80px', md: '200px' }}
				mb={{ base: '100px', md: '5' }}
			>
				<Container>
					<motion.div
						className="card-container"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.1 }}
					>
						<motion.div className="card" variants={cardVariants}>
							<VStack spacing={6}>
								<NextLink href="/" passHref>
									<Heading size="2xl" color="blue.500">
										Digital Wellbeing
									</Heading>
								</NextLink>
								<Text fontSize="2xl" color="blue.600">Ce este?</Text>
								<Text fontSize="xl">
									Digital Wellbeing se refera la impactul{' '}
									<Text as="b">tehnologiei</Text> asupra
									mentalitatii, psihicului, socializarii si
									sanatatii emotionale.
								</Text>
								<Text fontSize="2xl" color="blue.600">Ce facem?</Text>
								<Text fontSize="xl">
									Prin aceasta aplicatie incercam sa ajutam
									utilizatorii sa inteleaga partile negative
									si pozitive pe care le aduce tehnologia, de
									asemenea cum sa se foloseasca de ea pentru
									beneficiul lor.
								</Text>
								<NextLink href="/negative" passHref>
									<Button
										variant="outline"
										colorScheme="green"
									>
										Apasa pentru a incepe!
									</Button>
								</NextLink>
							</VStack>
						</motion.div>
					</motion.div>
				</Container>
			</Container>
		</Box>
	);
}
