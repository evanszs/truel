import barra from '../img/barra.jpg'
import ambiente from '../img/ambiente2.jpg'
import pessoas from '../img/ppl.jpg'
import Accordion from 'react-bootstrap/Accordion';
import fundo from '../img/fundo.png'
import Footer from './footer';
import wpp from '../img/whatsapp.png'
import ig from '../img/instagram.png'
import Carder from './carder';
import truelove from '../img/trip.jpg'
import { FaFacebookF,FaTwitter,FaLinkedinIn, FaInstagram,FaWhatsapp } from "react-icons/fa";
const Meio = () => {
  return (
    <div>
<main class="main">
      <section class="section">
        <figure class="image-container"> <img src={barra} style={{opacity:'0.3'}}/> </figure>
 
        <h4></h4>
        <article class="content">
          <h2 class="section-title" style={{textAlign:"center"}}>Horário/Local</h2>
          <p style={{textAlign:"center",textJustify:'inter-word'}}>
                

<h1 > Nossa localização</h1> 

<p>
O estúdio fica na Av. Oceanica, 551, no Edificío, Barra Center, sobreloja 8.
</p>
<p>
<h1 style={{marginTop:"50px"}}>Funcionamento</h1>
<ul> Todos os dias de Segunda a Domingo 10:00-19:00</ul>
<ul> Nosso time possui um horário de trabalho bem flexível, 
sendo possível agendar uma tattoo qualquer dia da semana.
Porém os atendimentos são feitos com hora marcada.
Os agendamentos podem ser feitos diretamente com os nossos artistas via 
Instagram ou Whatsapp.</ul>
<ul>No estúdio acontecem alguns eventos e projetos, como Flashdays, comemorações e novidades, 
então não esqueça de segui os estúdio nas redes sociais <a style={{color:"yellow"}} href="https://www.instagram.com/tl.inke/">@tl.inke</a> para ficar por dentro
do que está acontecendo.  para acompanhar 
     nossos projetos e eventos, como flashdays, comemorações e novidades.</ul>

</p> <div style={{paddingBottom:"250px"}}></div>


          </p>
        </article>
      </section>
      <section class="section">
        <figure class="image-container"><img src={ambiente} alt="" style={{opacity:'0.3'}}/></figure>
        <article class="content"  style={{textAlign:"center",textJustify:'inter-word'}}>
          <h2 class="section-title">O que eu devo saber?</h2>
          
          
          <span class="byline">Um pequeno FAQ para os curiosos de plantão </span>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Qual o valor mínimo do estúdio?</Accordion.Header>
        <Accordion.Body>
    <p>   O valor mínimo cobrado pelas tatuagens no estúdio é de R$250 e pode variar
dependendo do tamanho, local e detalhes. O orçamento pode ser feito diretamente
com os nossos artistas.</p> 

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">

        <Accordion.Header>Posso fazer uma tatuagem sem marcar horário?</Accordion.Header>
        <Accordion.Body>
      <p>  Sim, dependendo da disponibilidade dos artistas no dia nos aceitamos fazer trabalhos
’’não programados’’. Mas sugerimos você checar a disponibilidade antes de ir ao
estúdio via mensagem por social media.</p> 

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">

<Accordion.Header>Como eu posso agendar um horário?</Accordion.Header>
<Accordion.Body>
<p>A melhor forma de agendar uma tattoo e diretamente com os nossos artistas, via social
midia ou whatsapp, por lá nos conseguimos ter um contato mais proximos e captar
todas as ideias que você teve para a criação da <arte className="dir"></arte>
Quando for solicitar um orçamento, tente nos dar o mais número de informações
possiveis sobre a tattoo que você planeja ter, como:
Local, tamanho em cm, a sua ideia e detalhes.
Fique a vontade para mandar referência , elas nos ajudam a entender melhor como
você idealizou a sua tattoo.
Para que o seu horário seja resevado e necessário o pagamento adiantado de um sinal no valor combinado com o artista
. Este sinal será abatido no valor final da sessão.
Ex: se o valor da tatuagem e 350 reais o sinal depositado e de 50 reais e no final da
sessão você paga 300 reais) </p>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">

<Accordion.Header>Quanto vai custar a minha tatuagem?
</Accordion.Header>
<Accordion.Body>
<p> Nós sabemos como é difícil juntar dinheiro para uma tatto, então queremos que você
tenha uma noção de quanto cobramos nas nossas tatuagens.
Os preços médios no estúdio são :
-Pequena (palavras ou desenhos até 5 cm)- R$250
-Média (frase ou desenhos até 8cm)- R$300~R$400
-Grande (desenhos até 15cm)- R$500~700
-Fechamentos (braço, perna, costas)- R$1500~3000
 Lembrando que os valores estão sujeitos a alteração dependendo do artista que fizer
e a quantidade de detalhes da arte final.</p>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4">

<Accordion.Header>Posso consultar o artista antes da sessão?
</Accordion.Header>
<Accordion.Body>
<p> Sim, nossos artistas são capacitados para fazer coberturas de todos os tipos.Ms nem
sempre é possível fazer exatamente o que você esta pensando pois geralmente
coberturas tem mais limitações, diferentes de projetos criados do zero. Por isso seja
flexível quanto considerar a ideia sugerida pelo profissional, já que ele busca fazer o
melhor trabalho</p>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="5">

<Accordion.Header>É a minha primeira tattoo, o que devo saber?</Accordion.Header>
<Accordion.Body>
<p>Todos os dias encontramos pessoas interessadas em fazer sua primeira tatuagem
conosco. Então sim, nós sabemos como você se sente.
Não há limite de idade para a primeira tatuagem, exceto para menores de idade.
Algumas pessoas fazem sua primeira tatuagem no final dos anos 80, então você não
deve ter vergonha de dizer isso ao seu artista.
Nós pedimos que você nos avise se for sua primeira vez, então sinta-se à vontade para
perguntar ao seu artista tudo o que você precisa saber antes de começar.
Quando finalmente chegar o dia da sua consulta, siga estas regras simples:
Não beba álcool no caminho e tente ficar sóbrio desde o dia anterior. O álcool é um
anticoagulante e tem o potencial de complicar as coisas enquanto você está sendo
tatuado.
Faça uma refeição antes da consulta.
Mantenha os níveis de açúcar elevados, mantenha-se hidratado e tenha alguns
lanches à mão.
Diga ao artista se você está se sentindo tonto ou fraco, isso é completamente
normal, mas precisamos saber para administrar a situação com cuidado.
A sessão pode demorar mais do que você pensou inicialmente, então é melhor
manter sua agenda o mais flexível possível.
Dependendo da localização da sua tatuagem, recomendamos que você use roupas
adequadas, a fim de facilitar tanto para você quanto para o tatuador. Também
desaconselhamos o uso de roupas caras ou roupas brancas, pois elas podem
manchar facilmente.
A higiene pessoal é importante! Por favor, certifique-se de estar limpo, em respeito
ao tatuador e às outras pessoas na loja.
Depois de ser tatuado por nós, por favor, fique longe; sol, banhos e praia. A tatuagem
precisa ser cuidada por um mês depois de concluída, e não ficará igual se você fizer o
contrário! Se você não seguir nossas diretrizes, poderá correr o risco de possíveis
infecções.
Por fim, se você estiver prestes a viajar para as férias de verão, talvez seja melhor
remarcar a sessão.
</p>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="6">

<Accordion.Header>Posso levar acompanhante?</Accordion.Header>
<Accordion.Body>
<p>É possível levar acompanhante, mas saiba que muitas vezes a espera na sessão e
longa, e nem sempre e possível acompanhar a tattoo de perto, então todos devem vir
preparados.</p>
</Accordion.Body>
</Accordion.Item>
    </Accordion>

        </article>
      </section>
      </main>
      <section class="section">
      <img src={fundo} className="true"></img>   
<figure class="image-container">       <img src={pessoas} style={{opacity:'0.3'}}/></figure>
 <article class="content">
   <h2 class="section-title">Informações</h2><span class="byline " style={{color:'pink'}}>True love </span>

<h1> Como tudo começou</h1>
<p>O nosso estúdio de tatuagem idealizado e criado em 2020 pelos artistas e tatuadores Erick e Drica Torrez. Localizado no na Barra, o coração de Salvador Bahia e 
de frente para o mar, o estúdio é a casa de quatro tatuadores talentosos e guests renomados. 
Arte autoral com qualidade e a melhor experiencia em atendimento é o que mais prezamos.
</p>
<p>
O estúdio foi projetado para você se sentir em casa e desfrutar de uma vista
incrível enquanto tatua com os melhores profissionais.<a href="https://www.instagram.com/ek.trz/"style={{color:'yellow'}}> Erick Torrez</a>,
<a href="https://www.instagram.com/drica.tattoo/"style={{color:'yellow'}}>   Drica Torrez</a>,  <a href="https://www.instagram.com/gagabi.tattoo/"style={{color:'yellow'}}>Gagabi</a> e  <a href ="https://www.instagram.com/oadailtonunes/"style={{color:'yellow'}}>  Adailton </a>
são os nossos tatuadores, e cada um tem o seu estilo próprio e
autoral.
</p>
 {/*
<p> 
 
<ul>


  <li style={{textAlign:"right"}}><a href="https://www.instagram.com/tl.inke/">Truelove <img src={ig} width="5%" style={{marginLeft:'12.8%'}}/><img src={wpp} width="5%" style={{marginLeft:'1%'}}/></a> </li>
  <li style={{textAlign:"right"}}><a href="https://www.instagram.com/tl.inke/">Adailton <img src={ig} width="5%" style={{marginLeft:'13.2%'}}/><img src={wpp} width="5%" style={{marginLeft:'1%'}}/></a></li>
  <li style={{textAlign:"right"}}><a href="https://www.instagram.com/tl.inke/">Drica <img src={ig} width="5%" style={{marginLeft:'17%'}}/> <img src={wpp} width="5%" style={{marginLeft:'0%'}}/></a> </li>
  <li style={{textAlign:"right"}}><a href="https://www.instagram.com/tl.inke/">Erick <img src={ig} width="5%" style={{marginLeft:'17.5%'}}/> <img src={wpp} width="5%" style={{marginLeft:'0%'}}/></a> </li>
  <li style={{textAlign:"right"}}><a href="https://www.instagram.com/tl.inke/">Gagabe <img src={ig} width="5%" style={{marginLeft:'14.5%'}}/><img src={wpp} width="5%" style={{marginLeft:'1%'}}/></a></li>
</ul>
</p>
  */}
 </article>
 
</section>

 

    <footer class="site-footer">

      <div class="container">
        <div class="row">
        <div class="col-xs-6 col-md-3">
            <h6>Ambiente</h6>
            <ul class="footer-links">
              <li>Ventilado (possuir ar)</li>
              <li>Possui bar</li>
              <li>De frente para o mar</li>
              <li>LBTQIA+</li>

            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Tatuadores</h6>
            <ul class="footer-links" >
            <li style={{color:'yellow'}}>Adailton</li>
                   <li style={{color:'yellow'}}>Drica</li>
                   <li style={{color:'yellow'}}>Erick</li>
                   <li style={{color:'yellow'}}>Gagabi</li>

            </ul>
          </div>

          <div class="col-xs-6 col-md-3">

            <h4>Social</h4>
         <ul class="footer-links">
              <li><FaWhatsapp/>               <FaInstagram/></li>
                 <li><FaWhatsapp/>               <FaInstagram/></li>
                 <li><FaWhatsapp/>               <FaInstagram/></li>
                 <li><FaWhatsapp/>               <FaInstagram/></li>

            </ul>
       
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">© 2022 All Rights Reserved | Truelove Tattoo Art
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><FaFacebookF/></a></li>
              <li><a class="twitter" href="#"><FaTwitter/></a></li>

              <li><a class="linkedin" href="#"><FaLinkedinIn/></a></li>   
            </ul>
          </div>
        </div>
      </div>





 





</footer>

 </div>
  )
}

export default Meio