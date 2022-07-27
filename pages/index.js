import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
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

export default function Home() {
	return (
		<Box>
				<Container maxW="container.lg">
						<motion.div
					className="card-container"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
				>
					<motion.div className="card" variants={cardVariants}>
						<Box>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading><Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading><Heading>Tetst</Heading>
							<Heading>Tetst</Heading><Heading>Tetst</Heading>

							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
						</Box>
					</motion.div>
					
				</motion.div>

				<motion.div
					className="card-container"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.1 }}
				>
					<motion.div className="card" variants={cardVariants}>
						<Box>
							<Heading>part2</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading><Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading><Heading>Tetst</Heading>
							<Heading>Tetst</Heading><Heading>Tetst</Heading>

							<Heading>Tetst</Heading>
							<Heading>Tetst</Heading>
						</Box>
					</motion.div>
					
				</motion.div>
	</Container>
		</Box>
	);
}
