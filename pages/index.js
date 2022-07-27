import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';

const cardVariants = {
	offscreen: {
		y: 300
	},
	onscreen: {
		y: 0,
		rotate: 0,
		transition: {
			type: 'spring',
			duration: 1,
			bounce: 0.2
		}
	}
};

function Content(){
	<Container maxW="container.lg">
		<Text>trytfhg</Text>
	</Container>
}


export default function Home() {
	return (
		<Box>
			<Content />
		</Box>
	);
}
