const messGamDev = ["Cada error es solo un bug en tu código, depúralo y sigue avanzando.", 
    "No importa cuántas veces pierdas, importa cuántas veces respawneas.", 
    "Tu progreso no se mide en puntos de experiencia, sino en tu constancia diaria.", 
    "Aprende a grindear en la vida como grindeas en tus juegos.", 
    "Un proyecto a la vez, un nivel más cerca del siguiente logro.", 
    "El lag en tu progreso no significa desconexión, solo paciencia.", 
    "Sé como un dev: crea, prueba, falla y vuelve a compilar tu destino.", 
    "No esperes que la vida sea fácil, espera que sea desbloqueable.", 
    "Cada línea de código te acerca al boss final: tu mejor versión.", 
    "El camino al éxito no es un speedrun, es una partida completa."];

const messBib = ["Confía en el Señor con todo tu corazón, y no te apoyes en tu propia prudencia. — Proverbios 3:5", 
    "No temas, porque yo estoy contigo. — Isaías 41:10", 
    "Todo lo puedo en Cristo que me fortalece. — Filipenses 4:13", 
    "El que siembra con lágrimas, cosechará con alegría. — Salmos 126:5", 
    "Esfuérzate y sé valiente, no desmayes. — Josué 1:9", 
    "Mejor es lo poco con justicia, que grandes ganancias con injusticia. — Proverbios 16:8", 
    "Busca primero el Reino de Dios, y todo lo demás vendrá por añadidura. — Mateo 6:33", 
    "El corazón alegre hermosea el rostro. — Proverbios 15:13", 
    "La fe sin obras es muerta. — Santiago 2:17", 
    "No te canses de hacer el bien, porque a su tiempo cosecharás. — Gálatas 6:9" ];

const messAni = ["No nací para ser uno más del montón. Nací para romper mi propio destino.", 
    "Un verdadero héroe no se rinde, aunque su alma esté rota.", 
    "La oscuridad dentro de mí solo es rival para la luz que aún protejo.", 
    "Caí mil veces, pero sigo en pie porque aún tengo un propósito.", 
    "El poder no define a un guerrero, su voluntad sí.", 
    "Mientras tenga un objetivo, ni la muerte me detiene.", 
    "No necesito magia, solo convicción y coraje.", 
    "Mi historia no termina aquí, apenas comienza el arco más fuerte.", 
    "La soledad no me rompe, me afila como espada.", 
    "No lucho por venganza, lucho para proteger lo que aún me importa."];

    const getRandomMessage = (messGamDev, messBib, messAni) => {
       const randomIndex = Math.floor(Math.random() * messGamDev.length);
       const randomIndex1 = Math.floor(Math.random() * messBib.length); 
       const randomIndex2 = Math.floor(Math.random() * messAni.length);
        return `Tu mensaje motivacional del dia de hoy es: ${messGamDev[randomIndex]}, tu consejo biblico seria: ${messBib[randomIndex1]} y tu mensaje al estilo anime: ${messAni[randomIndex2]}`
    };

    const displayMessage = () => {
        const message = getRandomMessage(messGamDev, messBib, messAni);
        const output = document.getElementById('message-output');
        output.innerText = message;
    };

    const button = document.getElementById('generate-btn');
    button.addEventListener('click', displayMessage);


    const capitalizeFirstLetter = '';