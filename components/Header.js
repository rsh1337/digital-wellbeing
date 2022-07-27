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
import { BiHomeAlt } from 'react-icons/bi';
import { ChevronDownIcon } from '@chakra-ui/icons';
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
											<Icon as={BiHomeAlt} h={7} w={7} />
											<Text fontSize="xx-small">
												Acasa
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
											<Icon as={BiHomeAlt} h={7} w={7} />
											<Text fontSize="xx-small">
												Informatii
											</Text>
										</VStack>
									</MenuButton>
									<MenuList>
										<NextLink href="/negative" passHref>
											<MenuItem>
												Partile Negative
											</MenuItem>
										</NextLink>
										<NextLink href="/positive" passHref>
											<MenuItem>
												Partile Pozitive
											</MenuItem>
										</NextLink>
									</MenuList>
								</Menu>
							</motion.ul>
							<motion.ul variants={itemMobile}>
								<NextLink href="/sugestie">
									<Button variant="ghost" w={14} h={14}>
										<VStack>
											<Icon as={BiHomeAlt} h={7} w={7} />
											<Text fontSize="xx-small">
												Sugestii
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
											<Icon as={BiHomeAlt} h={7} w={7} />
											<Text fontSize="xx-small">
												Login
											</Text>
										</VStack>
									</MenuButton>
									<MenuList>
										<NextLink href="/signin" passHref>
											<MenuItem>Sign In</MenuItem>
										</NextLink>
										<NextLink href="/register" passHref>
											<MenuItem>Register</MenuItem>
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
									<Heading size={{md: "md", lg: "lg"}}>Digital Wellbeing</Heading>
								</NextLink>
							</Box>
						</motion.ul>
						<Spacer />

						<HStack spacing={2}>
							<motion.ul variants={itemDesktop}>
								<NextLink href="/negative" passHref>
								<Button variant="ghost">Partile Negative</Button>
								</NextLink>
							</motion.ul>
							<motion.ul variants={itemDesktop}>
								<NextLink href="/pozitive" passHref>
								<Button variant="ghost">Partile Pozitive</Button>
								</NextLink>
							</motion.ul>
							<motion.ul variants={itemDesktop}>
								<Button variant="ghost">Sugestii</Button>
							</motion.ul>
						</HStack>
						<Spacer />
						<HStack spacing={2}>
							<motion.ul variants={itemDesktop}>
								<Button variant="ghost">Login</Button>
							</motion.ul>
							<motion.ul variants={itemDesktop}>
								<Button variant="ghost">Register</Button>
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
