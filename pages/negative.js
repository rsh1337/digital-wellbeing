import {
	Box,
	Center,
	Container,
	Heading,
	Link,
	Text,
	VStack
} from '@chakra-ui/react';
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
export default function Negative() {
	return (
		<Box>
			<Container
				maxW="container.lg"
				mt={{ base: '80px', md: '100px' }}
				mb={{ base: '100px', md: '5' }}
			>
				<motion.div
					className="card-container"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.1 }}
				>
					<motion.div className="card" variants={cardVariants}>
						<Heading size="lg">
							Efectele negative create de tehnologie
						</Heading>

						<Text fontSize="lg" mt={20}>
							In timp ce tehnologiile produc schimbari pozitive in
							lume, in acelasi timp utilizarea lor excesiva poate
							avea efecte negative. Retelele de socializare si
							dispozitivele mobile pot duce la probleme
							psihologice si fizice, cum ar fi oboseala ochilor si
							dificultati de concentrare pe perioade mai lungi.
							Ele pot contribui, de asemenea, la afectiuni mai
							grave de sanatate, cum ar fi depresia. Utilizarea
							excesiva a tehnologiei poate avea un impact mai
							semnificativ asupra dezvoltarii copiilor și
							adolescentilor.
						</Text>
						<Heading size="md" mt={7} mb={7}>
							Depresie si Anxietate
						</Heading>
						<Text fontSize="lg">
							Autorii unei{' '}
							<Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5143470/">
								revizuiri sistematice din 2016
							</Link>{' '}
							au discutat despre legătura dintre rețelele sociale
							și problemele de sănătate mintală, cum ar fi
							depresia și anxietatea. Cercetările lor au avut
							rezultate mixte. Persoanele care au avut mai multe
							interacțiuni pozitive și sprijin social pe aceste
							platforme păreau să aibă niveluri mai scăzute de
							depresie și anxietate. Cu toate acestea, oamenii
							care au mai multe interactiuni negative pe retelele
							sociale au fost mai predispuși la comparații sociale
							care au experimentat niveluri mai ridicate de
							depresie și anxietate. Deci, deși pare să existe o
							legătură între rețelele sociale și sănătatea
							mintală, un factor determinant semnificativ îl
							reprezintă tipurile de interacțiuni pe care oamenii
							simt că le au pe aceste platforme.
						</Text>
						<Heading size="md" mt={7} mb={7}>
							Oboseala ochilor
						</Heading>
						<Text fontSize="lg">
							Tehnologiile, cum ar fi tabletele, smartphone-urile
							și computerele, pot reține atenția unei persoane
							pentru perioade lungi de timp. Acest lucru poate
							duce la oboseala ochilor. Simptomele oboselii
							ochilor pot include vedere încețoșată și ochi
							uscați. Oboseala ochilor poate duce, de asemenea, la
							dureri în alte zone ale corpului, cum ar fi capul,
							gâtul sau umerii. Mai mulți factori tehnologici pot
							duce la oboseala ochilor, cum ar fi: timpul petrecut
							in fata ecranului, luminozitatea ecranului,
							vizualizarea prea aproape sau prea departe, postura
							incorecta.
						</Text>
						<Heading size="md" mt={7} mb={7}>
							Insomnii
						</Heading>
						<Text fontSize="lg">
							Utilizarea telefonului, tabletei sau computerului
							prea aproape de ora de culcare poate cauza probleme
							cu somnul. Acest efect are de-a face cu faptul că
							lumina albastră, cum ar fi lumina telefoanelor
							mobile, tabletelor și computerelor, stimulează
							creierul. Autorii unui{' '}
							<Link href="https://www.pnas.org/content/112/4/1232">
								studiu din 2014
							</Link>{' '}
							au descoperit că această lumină albastră este
							suficientă pentru a perturba ritmul circadian
							natural al corpului. Această tulburare ar putea
							îngreuna adormirea sau poate duce la o persoană să
							se simtă mai puțin alertă a doua zi. Pentru a evita
							impactul potențial al luminii albastre asupra
							creierului, oamenii pot înceta să mai folosească
							dispozitive electronice care emit lumină albastră cu
							o oră sau două înainte de culcare.
						</Text>
					</motion.div>
				</motion.div>
			</Container>
		</Box>
	);
}
