import { Box, Grid, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Digital Wellbeing</title>
				<link
					rel="icon"
					type="image/png"
					sizes="196x196"
					href="icons/favicon-196.png"
				/>
			</Head>
			<Grid minH="100vh">
				<VStack align="stretch" w="full" spacing={3}>
					<Header />
					<Box as="main" h="full">
						{children}
					</Box>
				</VStack>
			</Grid>
		</>
	);
}
