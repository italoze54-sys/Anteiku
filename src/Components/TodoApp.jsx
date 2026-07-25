import {useState,useRef, useEffect} from 'react';
import fondo from '../assets/imagenes/finalfondo.png';
import cafeteria from '../assets/imagenes/anteikucafeteria.png';
import cafe from '../assets/imagenes/cafe.jpg';
import latte from '../assets/imagenes/latte.jpg';
import mocha from '../assets/imagenes/mocha.jpg';
import fondo1 from '../assets/imagenes/CuerpoF.png';
import fondo2 from '../assets/imagenes/Cuerpo1F.png';
import fondo3 from '../assets/imagenes/Cuerpo2F.png';
import cafes from '../assets/imagenes/cafes.jpg';
import postres from '../assets/imagenes/postres.jpg';
import bebidas from '../assets/imagenes/bebidas.jpg';
import estudio from '../assets/imagenes/estudio.png';
import artesanal from '../assets/imagenes/artesanal.png';
import ambiente from '../assets/imagenes/ambiente.png';
import ambiente2 from '../assets/imagenes/ambiente2.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import musica from "../assets/audio/consume.mp3";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";


function TodoApp({notas}) {

    const [contador, setContador] = useState(0);  

    const mostrarNotas = () => {
        console.log(notas);
    }
    const [texto, setTexto] = useState("");
    const [texto1, setTexto1] = useState("");

    const [resultado, setResultado] = useState(0);

    const CalcularSuma = () => {
        const total = parseInt(texto) + parseInt(texto1);
        setResultado(isNaN(total) ? 0 : total);
    }

    const CalcularResta = () => {
        const total = parseInt(texto) - parseInt(texto1);
        setResultado(isNaN(total) ? 0 : total);
    }

    const CalcularMult = () => {
        const total = parseInt(texto) * parseInt(texto1);
        setResultado(isNaN(total) ? 0 : total);
    }

    const CalcularDiv = () => {
        const total = parseInt(texto) / parseInt(texto1);
        setResultado(isNaN(total) ? 0 : total);
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const ImprimirUsername = () => {
        console.log("Mi nombre es: "+username +" y mi contraseña es: "+password);
    };
    const productos = [
        {
            nombre: "Cappuccino",
            descripcion: "Espresso italiano con leche vaporizada y espuma cremosa.",
            precio: "S/. 14.90",
            imagen: cafe
        },
        {
            nombre: "Latte",    
            descripcion: "Café con leche cremosa.",
            precio: "S/. 13.90",
            imagen: latte
        },
        {
            nombre: "Mocha" ,
            descripcion: "Chocolate con espresso.",
            precio: "S/. 16.90",
            imagen: mocha
        }
    ];
    const beneficios = [
    {
        id:1,
        icono: "☕",
        titulo: "Café Premium",
        descripcion: "Granos cuidadosamente seleccionados para ofrecer un sabor excepcional."
    },
    {
        id:2,
        icono: "🥐",
        titulo: "Repostería Artesanal",
        descripcion: "Postres elaborados diariamente con ingredientes frescos."
    },
    {
        id:3,
        icono: "🌿",
        titulo: "Ambiente Acogedor",
        descripcion: "Un espacio tranquilo para conversar, trabajar o relajarte."
    },
    {
        id:4,
        icono: "📶",
        titulo: "WiFi Gratuito",
        descripcion: "Conexión rápida para estudiar, trabajar o navegar sin límites."
    }
    ];
    const menu = {

    cafes: {
        imagen: cafes,
        productos: [
            {
                nombre: "Espresso",
                precio: "S/. 10.90"
            },
            {
                nombre: "Latte",
                precio: "S/. 13.90"
            },
            {
                nombre: "Cappuccino",
                precio: "S/. 14.90"
            },
            {
                nombre: "Mocha",
                precio: "S/. 16.90"
            }
        ]
    },

    postres: {
        imagen: postres,
        productos: [
            {
                nombre: "Cheesecake",
                precio: "S/. 12.90"
            },
            {
                nombre: "Brownie",
                precio: "S/. 9.90"
            },
            {
                nombre: "Croissant",
                precio: "S/. 11.90"
            },
            {
                nombre: "Tiramisú",
                precio: "S/. 13.90"
            }
        ]
    },

    bebidas: {
        imagen: bebidas,
        productos: [
            {
                nombre: "Frappuccino",
                precio: "S/. 18.90"
            },
            {
                nombre: "Cold Brew",
                precio: "S/. 15.90"
            },
            {
                nombre: "Limonada",
                precio: "S/. 11.90"
            },
            {
                nombre: "Té Helado",
                precio: "S/. 10.90"
            }
        ]
    }

    };

    const galeria = [

    {
        imagen: estudio,
        titulo: "Zona de Estudio",
        descripcion: "Un espacio tranquilo para trabajar o estudiar con una buena taza de café."
    },

    {
        imagen: artesanal,
        titulo: "Café Artesanal",
        descripcion: "Cada bebida es preparada al momento por nuestros baristas."
    },

    {
        imagen: ambiente,
        titulo: "Momentos Especiales",
        descripcion: "Comparte momentos inolvidables con amigos y familia."
    },

    {
        imagen: ambiente2,
        titulo: "Ambiente Acogedor",
        descripcion: "Diseño cálido inspirado en la esencia de Anteiku."
    }

    ];


    const [indice, setIndice] = useState(0);
    const [animando, setAnimando] = useState(false);
    const [categoria, setCategoria] = useState("cafes");
    const audioRef = useRef(null);
    
    const [musicaActiva, setMusicaActiva] = useState(false);
    const [volumen, setVolumen] = useState(30);
    const [loading, setLoading] = useState(true);
    const [scroll, setScroll] = useState(false);

    const controlarMusica = async () => {

        if (!audioRef.current) return;

        audioRef.current.volume = volumen / 100;

        if (musicaActiva) {

            audioRef.current.pause();

        } else {

            await audioRef.current.play();

        }

        setMusicaActiva(!musicaActiva);

    };
    const cambiarVolumen = (e) => {

        const nuevoVolumen = e.target.value;

        setVolumen(nuevoVolumen);

        audioRef.current.volume = nuevoVolumen / 100;

    };
    useEffect(() => {

        const intervalo = setInterval(() => {
            siguienteProducto();
        }, 3000);

        return () => clearInterval(intervalo);

    }, [indice]);

    const cambiarProducto = (nuevoIndice) => {

        setAnimando(true);

        setTimeout(() => {

            setIndice(nuevoIndice);

            setAnimando(false);

        },250);

    }

    const siguienteProducto = () => {

        setAnimando(true);

        setTimeout(() => {

            if (indice === productos.length - 1) {
               setIndice(0);
            } else {
                setIndice(indice + 1);
            }
            setAnimando(false);
        },250);
    }

    const anteriorProducto = () => {

        setAnimando(true);

        setTimeout(() => {

            if (indice === 0) {
                setIndice(productos.length - 1);
            } else {
                setIndice(indice - 1);
            }

            setAnimando(false);

        },250);
    }
    useEffect(() => {

        AOS.init({

            duration: 600,
            once: true,
            easing: "ease-in-out",

        });

    }, []);
    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 2200);

        return () => clearTimeout(timer);

    }, []);
    useEffect(() => {

        const cambiarNavbar = () => {

            setScroll(window.scrollY > 80);

        };

        window.addEventListener("scroll", cambiarNavbar);

        return () => window.removeEventListener("scroll", cambiarNavbar);

    }, []);

    if (loading) {

        return (

            <div className="loading">

                <h1>あんてい</h1>

                <h2>Anteiku</h2>

                <p>Preparando tu café...</p>

                <div className="loader"></div>

            </div>

        );

    }
    

    return (
    <>
        <section
            className='hero' 
            style={{
                backgroundImage: `url(${fondo})`,
            }}            
        >
            <div className='overlay'>
                <h2 data-aos="fade-up" className="AnteiLogo2">あんてい</h2>
                <h3 data-aos="fade-up" className="Anteikushort">Anteiku</h3>
            </div>

        </section>
        <nav className={scroll ? "navbar activo" : "navbar"}>

            <div className="navbarContenido">
                <h2 data-aos="fade-up" className="AnteiLogo">あんてい</h2>

                <ul data-aos="fade-up">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#cita">Cita</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>       
            </div>            
        </nav>
        <section  className='Hero' id="inicio">             

        </section>
        
        <section className="cuerpo" style={{backgroundImage: `url(${fondo1})`}}  >
            <div className='navbar2'>
                <div>
                    <h2 className="Bienvenida" data-aos="fade-up">Bienvenido a Anteiku</h2>                   
                    <p className="presentacion" data-aos="fade-up">
                        Donde cada taza cuenta una historia. Descubre un espacio diseñado para disfrutar del mejor café artesanal, deliciosos postres y un ambiente acogedor que convierte cada visita en una experiencia especial. Relájate, comparte y deja que el aroma del café te acompañe en cada momento.
                    </p>
                </div>                
                <div className="cafeteria">
                    <img src={cafeteria} alt="Cafetería Anteiku" data-aos="fade-up" />
                </div>
            </div>
        </section>


        <section className="productos" id="productos" style={{backgroundImage: `url(${fondo2})`}}  >
            
            <div className="fondoDecorativo" ></div>
            <div className={`tarjetaProducto ${animando ? "salir" : ""}`}  style={{"--bg": `url(${fondo3})`}}>

                <div className="imagenProducto" >
                    <img 
                        src={productos[indice].imagen} 
                        alt={productos[indice].nombre}
                    />
                </div>

                <div className="infoProducto"  >
                    <h3>{productos[indice].nombre}</h3>
                    <p>
                        {productos[indice].descripcion}
                    </p>
                    <h4>{productos[indice].precio}</h4>
                </div> 
                <button className="flecha izquierda" onClick={anteriorProducto}> <FaChevronLeft /> </button>    
                <button className="flecha derecha" onClick={siguienteProducto}><FaChevronRight /></button>
            
                <div className="indicadores" >
                    {productos.map((producto, i) => {
                    if (i === indice) {
                        return <span key={i} className="indicador activo" onClick={() => cambiarProducto(i)}></span>;
                    }
                    else {
                        return <span key={i} className="indicador" onClick={() => cambiarProducto(i)}></span>;
                    }
                    })}
                </div>
            </div>       
        </section>     

        <section className="porqueElegir" style={{backgroundImage: `url(${fondo1})`}}  >
            <h2 data-aos="fade-right" >¿Por qué elegir Anteiku?</h2>
                <p data-aos="fade-right" >
                    Más que una cafetería, somos un espacio donde cada taza de café
                    se convierte en una experiencia inolvidable.
                </p>
                <div className="contenedorTarjetas" data-aos="fade-right" >
                    {beneficios.map((beneficio, i) => (
                        <div className="tarjetaBeneficio" key={beneficio.id} data-aos="flip-left" >
                            <span className="icono">{beneficio.icono}</span>
                            <h3>{beneficio.titulo}</h3>
                            <p>{beneficio.descripcion}</p>
                        </div>
                    ))}
                </div>      
        </section>
        
        <section id="menu" className="menu" style={{ backgroundImage: `url(${fondo2})` }}  > 

            <h2 data-aos="flip-right" >Nuestro Menú</h2>
            <p data-aos="flip-right" >
                Descubre una selección de cafés, postres y bebidas preparados
                con ingredientes de la mejor calidad.
            </p>
            <div className="categoriasMenu" data-aos="flip-right">

                <button className={categoria === "cafes" ? "Cactivo" : ""} onClick={() => setCategoria("cafes")}>
                    ☕ Cafés
                </button>

                <button className={categoria === "postres" ? "Cactivo" : ""} onClick={() => setCategoria("postres")}>
                    🥐 Postres
                </button>

                <button className={categoria === "bebidas" ? "Cactivo" : ""} onClick={() => setCategoria("bebidas")}>
                    🥤 Bebidas
                </button>
            </div>

            <div className="contenidoMenu" data-aos="flip-right">
                <div className="listaMenu" data-aos="flip-right" data-aos="flip-right" >

                    {menu[categoria].productos.map((producto, i) => (

                        <div className="itemMenu" key={i}>

                            <span>{producto.nombre}</span>
                            <span className="precio" >{producto.precio}</span>

                        </div>
                    ))}
                </div>
            </div>

            <div className="imagenMenu" data-aos="fade-left" >

                <img
                    key={categoria}
                    className="imagenAnimada"
                    src={menu[categoria].imagen}
                    alt={categoria}
                />
            </div>


        </section>

        <section id="galeria" className="galeria" style={{backgroundImage: `url(${fondo1})`}}  >
            <h2 data-aos="fade-left">Nuestro ambiente</h2>
            <p data-aos="fade-left" className="textoGaleria">
                Descubre los espacios que hacen de Anteiku un lugar perfecto
                para relajarte, trabajar o compartir un buen café.
            </p>
            <div className="contenedorGaleria" data-aos="fade-left">
                {galeria.map((foto, i) => (
                    <div className="tarjetaGaleria" key={i} data-aos="zoom-in" >

                        <img
                            src={foto.imagen}
                            alt={foto.titulo}
                        />
                        <div className="overlayGaleria">

                            <h3>{foto.titulo}</h3>
                            <p>{foto.descripcion}</p>

                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="contacto" id="contacto" style={{backgroundImage: `url(${fondo2})`}}  >
        <h2 data-aos="fade-up" className="tituloContacto">Contáctanos</h2>

        <p data-aos="fade-up" className="textoContacto">
            ¿Tienes alguna consulta o deseas visitarnos?
            Estaremos encantados de recibirte.
        </p>

        <div className="contenidoContacto"  data-aos="fade-up">

            <div className="infoContacto">

                <div className="dato">

                    <h3>📍 Dirección</h3>

                    <p>Av. Primavera 123, Lima, Perú</p>

                </div>

                <div className="dato" data-aos="fade-up">

                    <h3>☎ Teléfono</h3>

                    <p>+51 999 999 999</p>

                </div>

                <div className="dato" data-aos="fade-up">

                    <h3>✉ Correo</h3>

                    <p>contacto@anteiku.com</p>

                </div>

                <div className="dato" data-aos="fade-up">

                    <h3>🕒 Horario</h3>

                    <p>Lunes - Domingo</p>

                    <p>8:00 AM - 10:00 PM</p>

                </div>

            </div>

            <div className="mapa" data-aos="fade-up">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1784215045436!6m8!1m7!1smHJWOtK7zaEZHHmg5oxcmQ!2m2!1d-12.12273797648588!2d-77.02911959173217!3f290.4145393476291!4f1.4665476289965653!5f0.7820865974627469"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>

        </div>
        </section>
        <footer className="footer" >

            <h2  className="logoFooter">あんてい</h2>

            <p  className="nombreFooter">Anteiku</p>

            <ul  className="linksFooter">

                <li  ><a href="#inicio">Inicio</a></li>

                <li><a href="#menu">Menú</a></li>

                <li><a href="#galeria">Galería</a></li>

                <li><a href="#contacto">Contacto</a></li>

            </ul>

            <div className="redes">

                <a href="#"><FaInstagram /></a>

                <a href="#"><FaFacebookF /></a>

                <a href="#"><FaTiktok /></a>

            </div>

            <p className="copyright">

                © 2026 Anteiku. Todos los derechos reservados.

            </p>

        </footer>

        <a
            href="https://wa.me/51924915832?text=Hola%20quisiera%20información%20sobre%20Anteiku!"
            className="btnWhatsapp"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp />
        </a>            

        <audio ref={audioRef} loop >

            <source src={musica} type="audio/mp3" />

        </audio>
        <button
            className="btnMusica"
            onClick={controlarMusica} 
        >
            {musicaActiva ? <HiSpeakerWave /> : <HiSpeakerXMark />}
        </button>
        <div className="controlMusica" >

            <button
                className="btnMusica"
                onClick={controlarMusica}
            >
                {musicaActiva ? <HiSpeakerWave /> : <HiSpeakerXMark />}
            </button>

            <input
                type="range"
                min="0"
                max="100"
                value={volumen}
                onChange={cambiarVolumen}
            />

        </div>

    

        
        
    </>);
}

export default TodoApp;