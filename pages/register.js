import { Container } from '@chakra-ui/react';
import Registerfunction from '../components/Register';
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
	return (
		<Container maxW="container.lg">
			<motion.div
				className="card-container"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.1 }}
			>
				<motion.div className="card" variants={cardVariants}>
					<Registerfunction />
				</motion.div>
			</motion.div>
		</Container>
	);
}
