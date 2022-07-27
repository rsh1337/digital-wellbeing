import {
	Box,
	Center,
	Container,
	Heading,
	Link,
	Text,
	VStack
} from '@chakra-ui/react';

export default function Pozitive() {
	return (
		<Box>
			<Container
				maxW="container.lg"
				mt={{ base: '80px', md: '100px' }}
				mb={{ base: '100px', md: '5' }}
			>
				<Heading size="lg">
					Efectele pozitive create de tehnologie
				</Heading>

				<Text fontSize="lg" mt={20}>
					Tehnologiile pot avea un efect pozitiv daca stim cum sa le
					folosim in favoarea noastra. In ziua de astazi putem sa
					facem aproape orice doar la un click distanta de exemplu sa
					platim facturi, sa vedem soldul cardului, inchidem/deschidem
					masina.
				</Text>
				<Heading size="md" mt={7} mb={7}>
					Castigi timp
				</Heading>
				<Text fontSize="lg">
					Tehnologia te ajuta sa salvezi timp atunci cand esti intr-un
					oras nou si nu esti familiarizat cu locatiile, un telefon te
					poate duce oriunde doar punand locatia unde doriti sa
					ajungeti.
				</Text>
				<Heading size="md" mt={7} mb={7}>
					Inveti mai usor
				</Heading>
				<Text fontSize="lg">
					Cu ajutorul tehnologiei invatatul poate fi mai usor datorita
					aplicatiilor si jocurilor educative care fac din procesul de
					invatare o joaca.
				</Text>
				<Heading size="md" mt={7} mb={7}>
					Comunicare
				</Heading>
				<Text fontSize="lg">
					Comunicarea nu a putut fi niciodata mai usoara, si asta
					datorita tehnologiei. In orice colt al globului ai fi poti
					sa vorbesti cu persoana dorita, chiar puteti sa va si
					vedeti.
				</Text>
			</Container>
		</Box>
	);
}
