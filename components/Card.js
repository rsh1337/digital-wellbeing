import {
	Box,
	Button,
	Center,
	Container,
	Divider,
	Flex,
	Heading,
	HStack,
	Spacer,
	Text,
	VStack
} from '@chakra-ui/react';
import {ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'

export default function Card() {
	return (
		<Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
			<HStack spacing={3}>
				<Center>
                    <VStack>
                    <Heading size="lg">Tdsadd asdas dadasd sada sdsadas dest</Heading>
					<Text noOfLines={3}>
						dsadasdasda sdsa dbas hdbash dbdhsab asdasd sadas
						dasdasdas dasdasd asdas dasd asdasd asdasd asdas dasd
						asdas dasdasd sadasd asd asdasda sdasda sdas dsadas
						dasdasdasd asdas dasdas das ddha sdbsah bdas hdb as hd
					</Text>
                    </VStack>
				</Center>
				<Spacer />
				<Center>
					<VStack>
                        <VStack>
                            <Button variant="outline">
                            <ArrowUpIcon />
                            </Button>
                            <Text>32</Text>
                        </VStack>
                        <Divider />
						<VStack>
                        <Text>22</Text>
                        <Button variant="outline">
                        <ArrowDownIcon />
                        </Button>
                        </VStack>
					</VStack>
				</Center>
			</HStack>
		</Box>
	);
}
