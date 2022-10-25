import './home.style.css'
import Fade from 'react-reveal/Fade';
import Lojas from '../layouts/Lojas'
import Sobre from '../layouts/sobre'
import img1 from '../images/jkfora.jpeg'
import img2 from '../images/andalofora3.jpeg'
import img3 from '../images/servfesta.jpeg'
import img4 from '../images/isca-de-frango.jpeg'
import Popup from '../layouts/popup'



function Home(){

return(


    <div>
 <Popup img={img4}/>
    <div className='container_background'>
        
        <div className='escrita_background'>
           <Fade duration={1500}>
            <h1>Oficial Chopp & Espeto</h1>
            <p>Deliciosas opções de espetos, 
                lanches, salgados, com cardápio promocional todos os dias!
                 Venha saborear nossos pratos!</p>
            </Fade>
        </div>
    </div>


   

    

    <main className='main'>
    <Lojas img={img1} NomeLoja="Oficial Jk " text="Você já ouviu falar na cerveja mais  gelada de Rio Preto e regiâo? Pois é, ela esta aqui esperando por você, 
            depois do seu dia de trabalho venha fazer seu Happy Hour aqui conosco. Em 2020 inauguramos nossa terceira loja 
            o Ofical JK. Sempre pensando no seu melhor, com um cardápio váriado, uma equipe altamente qualificada,
            agilidade no atendimento e respeito com nossos clientes e colaboradores. Estamos esperando por você." />
    <Lojas img={img2} NomeLoja="Oficial Andaló " text="Localizado em uma das avenidas mais badaladas de São José do Rio Preto, em 2018 inauguramos nossa segunda loja,
            o Oficial andaló, onde servimos os espetos especiais da casa. O Espeto Oficial e o Filé Mignon 
            com legumes, com um preço acessível a todos os públicos, um ambiente familiar e agrádavel, contando com uma equipe qualificada de colaboradores para 
            melhor atende-lo e fazer a diferença do seu final de semana. Venha curtir conosco." />
    <Lojas img={img3} NomeLoja="Oficial Brigadeiro " text="E você estudande? Achou que esquecemos de você? Foi aqui onde tudo começou, em 2016 inauguramos 
            nossa primeira loja, localizada próximo a melhor faculdade de medicina de São José do Rio Preto a Famerp.
            Onde nos destacamos por oferecer a melhor porção de mini coxinha de frango com catupiry da região, e sanduiche de Kafta? Já ouviu falar? 
            Esse é um dos carros chefes da nossa empresa. Saiu mais cedo ? Venha experimentar os nossos pratos e finalizar a sua noite conosco."/>   
            
              
              <div className="container_sobre">
        
        <Sobre title="Nossa Missão" text="Apresentar um diferencial em qualidade e atendimento, tendo em vista a excelência em variedades, em um ambiente agradável, com estrutura de 
        ponta e profissionais capacitados a prestar o melhor atendimento."/>
        <Sobre title="Nossa Visão" text="Ser uma empresa reconhecida por sua sustentabilidade, qualidade e excelência em nosso atendimento, aliando a tecnologia ao atendimento rápido 
        e eficaz de nossa equipe. Buscando sempre superar as espectativas."/>
        <div className='list'>
            <Fade>
            <h1>Nossos Valores</h1>
            <ul>
                <li>Comprometimento;</li>
                <li>Responsabilidade;</li>
                <li>Trabalho em equipe;</li>
                <li>Respeito aos clientes;</li>
                <li>Valorização aos colaboradores.</li>
           
            </ul> 
            </Fade>
        </div>
       
            </div>
     </main>
    </div>
)

}
export default Home