import {
	Box,
	Container,
	Flex,
	Spacer,
	Button,
	HStack,
	Center,
	Icon,
	VStack,
	Text,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	MenuItem
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import {FcNegativeDynamic, FcPositiveDynamic, FcHome, FcInfo} from 'react-icons/fc'
const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2
		}
	}
};
const itemMobile = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
};
const itemDesktop = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
};
function NavbarMobile() {
		return (
			<Box
				position="fixed"
				bottom="0"
				width="full"
				as="header"
				bg="white"
				display={{ base: 'block', md: 'none' }}
				zIndex="dropdown"
			>
				<Container maxW="container.md">
					<Center>
						<motion.ul
							variants={container}
							initial="hidden"
							animate="visible"
						>
							<HStack spacing={7} mb={8}>
								<motion.ul variants={itemMobile}>
									<NextLink href="/">
										<Button variant="ghost" w={14} h={14}>
											<VStack>
												<Icon as={FcHome} h={7} w={7} />
												<Text fontSize="xx-small">
													Acasa
												</Text>
											</VStack>
										</Button>
									</NextLink>
								</motion.ul>
								<motion.ul variants={itemMobile}>
									<NextLink href="/negative">
										<Button variant="ghost" w={14} h={14}>
											<VStack>
												<Icon as={FcNegativeDynamic} h={7} w={7} />
												<Text fontSize="xx-small">
													Partile Negative
												</Text>
											</VStack>
										</Button>
									</NextLink>
								</motion.ul>
								<motion.ul variants={itemMobile}>
									<NextLink href="/pozitive">
										<Button variant="ghost" w={14} h={14}>
											<VStack>
												<Icon as={FcPositiveDynamic} h={7} w={7} />
												<Text fontSize="xx-small">
													Partile Pozitive
												</Text>
											</VStack>
										</Button>
									</NextLink>
								</motion.ul>
								<motion.ul variants={itemMobile}>
								<Menu>
										<MenuButton
											as={Button}
											variant="ghost"
											w={14}
											h={14}
										>
											<VStack>
												<Icon as={FcInfo} h={7} w={7} />
												<Text fontSize="xx-small">
													Sugestii
												</Text>
											</VStack>
										</MenuButton>
										<MenuList>
											<NextLink href="/sugestie" passHref>
												<MenuItem>
													Sugestii
												</MenuItem>
											</NextLink>
											<NextLink href="/createsugestie" passHref>
												<MenuItem>
													Creaza Sugestie
												</MenuItem>
											</NextLink>
										</MenuList>
									</Menu>
								</motion.ul>
							</HStack>
						</motion.ul>
					</Center>
				</Container>
			</Box>
		);
	}

function NavbarDesktop() {
	return (
		<Box
			position="sticky"
			as="header"
			top="0"
			backgroundColor="rgba(255,255, 255, 0.8)"
			backdropFilter="saturate(180%) blur(5px)"
			display={{ base: 'none', md: 'block' }}
		>
			<Container maxW="container.xl" mt={2}>
				<motion.ul
					variants={container}
					initial="hidden"
					animate="visible"
				>
					<Flex direction="row">
						<motion.ul variants={itemDesktop}>
							<Box borderRadius="full">
								<NextLink href="/">
									<Heading size={{ md: 'md', lg: 'lg' }}>
										Digital Wellbeing
									</Heading>
								</NextLink>
							</Box>
						</motion.ul>
						<Spacer />

						<HStack spacing={2}>
							<motion.ul variants={itemDesktop}>
								<NextLink href="/negative" passHref>
									<Button variant="ghost">
										Partile Negative
									</Button>
								</NextLink>
							</motion.ul>
							<motion.ul variants={itemDesktop}>
								<NextLink href="/pozitive" passHref>
									<Button variant="ghost">
										Partile Pozitive
									</Button>
								</NextLink>
							</motion.ul>
							<motion.ul variants={itemDesktop}>
								<NextLink href="/sugestie" passHref>
								<Button variant="ghost">Sugestii</Button>
								</NextLink>
							</motion.ul>
							<motion.ul variants={itemDesktop}>
								<NextLink href="/createsugestie" passHref>
								<Button variant="ghost">Creaza Sugestie</Button>
								</NextLink>
							</motion.ul>
						</HStack>
					</Flex>
				</motion.ul>
			</Container>
		</Box>
	);
	}

function Navbar() {
	return (
		<>
			<NavbarDesktop />
			<NavbarMobile />
		</>
	);
}

export default function Header() {
	return <Navbar />;
}
