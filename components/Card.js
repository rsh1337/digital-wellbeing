import {
	Box,
	Center,
	Heading,
	HStack,
	Text,
	VStack
} from '@chakra-ui/react';

export default function Card({descriere, titlu}) {
	return (
		<Box>
            <Center>
			<HStack spacing={3} ml={3} mr={3}>
				<Center>
                    <VStack>
                    <Heading size="lg">{titlu}</Heading>
					<Text noOfLines={3}>
                        {descriere}
					</Text>
                    </VStack>
				</Center>
			</HStack>
            </Center>
		</Box>
	);
}
