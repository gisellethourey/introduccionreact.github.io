import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App () {
  return ( 
  <>
  <Header title = "Adopta un perrito"/>
  <MyCard 
  source = "https://media.istockphoto.com/id/154918294/es/foto/perro-feliz.jpg?s=612x612&w=0&k=20&c=ZQFlIFIVpl9IO1vye1AoZ-xOP-BUDnyrxmeh5wBd-hw="
  name = "Romeo"
  description= "Soy un perrito negrito como la noche e ilumino todo con mi sonrisa angelical, listo para ofrecer mucha paz a tu hogar"
  textBadge = "Labrador"
  color = "success"
  />
 
  <MyCard
    source = "https://media.istockphoto.com/id/1130714351/es/foto/cachorro-de-labrador-de-chocolate-acostado-y-masticando-un-hueso-de-perro.jpg?s=612x612&w=0&k=20&c=DlfhjO9Gv8g3S7m8GGxC6wN4KRMxwk3GTBcm9H-nw_E="
    name = "Omar"
    description= "Un perrito color chocolate listo para traer dulzura, travesuras y amor a tu hogar, !no te vas a arrepentir! "
    textBadge= "Labrador"
    color = "primary"
    />
   <MyCard 
  source = "https://media.istockphoto.com/id/1159049945/es/foto/perro-esperando-la-alimentaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=1DIJasI1LO--mPJCUS1dn6NF-hq4e2eAUslF1wYmJLU="
  name = "Nicki"
  description= "Soy un perrito muy obediente, no me gusta el desorden y soy lo que necesitas para el caos. Por favor adóptame"
  textBadge= "Multiraza"
  color = "danger"
  />  
  <MyCard 
  source = "https://media.istockphoto.com/id/1379600355/es/foto/perro-callejero-en-la-calle-de-vacaciones.jpg?s=612x612&w=0&k=20&c=MWmWTnnnOVD9o6AimU3yyyvJvGezpIn-ZYARwlKZsL4="
  name = "Tommy"
  description= "No sé de donde vengo, pero si para donde voy. Listo para encontrar un hogar amoroso y duradero."
  textBadge= "Multiraza"
  color ="warning"
  /> 
  <Footer />
  </>
   );
}

export default App;
