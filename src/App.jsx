import './App.css'

// Sections
import NavBar from './components/sections/navbar'
import Hero from './components/sections/hero'
import Education from './components/sections/education'
import About from './components/sections/about'
import Work from './components/sections/work'
import Projects from './components/sections/projects'
import Contacts from './components/sections/contacts'
import FAQ from './components/sections/faq'

// Three.js Models
import DesktopModel from './components/models/desktop'
import ClassroomModel from './components/models/classroom'
import OfficeModel from './components/models/office'
import TableModel from './components/models/table'
import HeadphonesModel from './components/models/headphones'

// Chakra UI Components
import { Container } from '@chakra-ui/react'
import FadeIn from './components/transitions/scrollanimations'
import Footer from './components/footer'

function App() {
	return (
	<Container
		maxW={"container.lg"}
	>	
		<NavBar />

		<FadeIn>
			<DesktopModel />
		</FadeIn>

		<FadeIn>
			<Hero />
		</FadeIn>
		
		<About />

		<FadeIn>
			<ClassroomModel />
		</FadeIn>

		<FadeIn>
			<Education />
		</FadeIn>

		<FadeIn>
			<OfficeModel />
		</FadeIn>

		<FadeIn>
			<Work />
		</FadeIn>

		<FadeIn>
			<TableModel />
		</FadeIn>

		<FadeIn>
			<Projects />
		</FadeIn>

		<FadeIn>
			<Contacts />
		</FadeIn>

		<FadeIn>
			<HeadphonesModel />
		</FadeIn>

		<FadeIn>
			<FAQ />
		</FadeIn>

		<Footer />
	</Container>
	)
}

export default App
