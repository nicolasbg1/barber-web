import Corte1 from '../../assets/images/service1.jpg';
import Corte2 from '../../assets/images/service2.jpg';
import Corte3 from '../../assets/images/service3.jpg';
import { CardComponent, CardContainer, Description, ImgCard, Paragrapth, Price, ServicesContainer, Title } from './styles';



function Services () {
	return (
		<ServicesContainer>
			<Title>Serviços</Title>
			<Paragrapth>
            Lorem ipsum dolor sit amet consectetur. Etiam mus vitae lectus proin pellentesque mattis iaculis. In viverra accumsan sagittis tempus duis a. Sagittis mollis a eu urna eget id.
			</Paragrapth>
			<CardContainer>
				<CardComponent>
					<ImgCard src={Corte1} />
					<Description>
						<p>Corte de Cabelo</p>
						<Price>R$ 35,00</Price>
					</Description>
				</CardComponent>
				<CardComponent>
					<ImgCard src={Corte2} />
					<Description>
						<p>Corte Completo</p>
						<Price>R$ 64,00</Price>
					</Description>
				</CardComponent>
				<CardComponent>
					<ImgCard src={Corte3} />
					<Description>
						<p>Corte & Barba</p>
						<Price>R$ 85,00</Price>
					</Description>
				</CardComponent>
			</CardContainer>
		</ServicesContainer>
	);
}





export default Services ;