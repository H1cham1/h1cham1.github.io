const projects = [
    {
        slug: "TableTech Website",
        title: "TableTech Website",
        image: process.env.PUBLIC_URL + "/TableTechWeb/TableTechWeb1.png",
        description: "De officiële website van TableTech waarmee horecaondernemers kennismaken met het platform. De site legt de voordelen uit, bevat call-to-actions en is geoptimaliseerd voor SEO en conversie.",
        tag: "Persoonlijk project",
        techstack: "TypeScript",
        gallery: [
            process.env.PUBLIC_URL + "/TableTechWeb/TableTechWeb1.png",
            process.env.PUBLIC_URL + "/TableTechWeb/TableTechWeb2.png"
        ]
    },
    {
        slug: "TableTech",
        title: "TableTech",
        image: process.env.PUBLIC_URL + "/TableTechApp/TableTech4.png",
        description: "Een alles-in-één dashboard voor horecazaken, waarmee personeel menu’s kan beheren, feedback kan ontvangen, voorraden bijhouden en klanttevredenheid verhogen via digitale bestel- en contactmomenten.",
        tag: "Persoonlijk project",
        techstack: "",
        gallery: [
            process.env.PUBLIC_URL + "/TableTechApp/TableTech1.jpeg",
            process.env.PUBLIC_URL + "/TableTechApp/TableTech2.jpeg",
            process.env.PUBLIC_URL + "/TableTechApp/TableTech3.png",
            process.env.PUBLIC_URL + "/TableTechApp/TableTech4.png",
            process.env.PUBLIC_URL + "/TableTechApp/TableTech5.png",
            process.env.PUBLIC_URL + "/TableTechApp/TableTech6.png",
            process.env.PUBLIC_URL + "/TableTechApp/TableTech7.png"
        ]
    },
    {
        slug: "space-monkey",
        title: "Space Monkey",
        image: process.env.PUBLIC_URL + "/spacemonkey/SpaceMonkey1.png",
        description: "Space Monkey is een interactieve terminal-game geschreven in Python waarin je speelt als Jararis, een hyperintelligente aap op een missie om de mensheid te redden. De game combineert avontuur, humor en puzzels met een verhalende ervaring waarin keuzes daadwerkelijk impact hebben. Van het crashen op een mysterieuze planeet tot ontsnappen uit een alien-basis en terugkeren naar Rotterdam Zuid – alles is mogelijk. De speler wordt uitgedaagd met raadsels, multiple choice-situaties en zelfs een potje galgje, allemaal met een flinke dosis satire.",
        tag: "Schoolproject",
        techstack: "Python",
        gallery: [
            process.env.PUBLIC_URL + "/spacemonkey/SpaceMonkey1.png"
        ]
    },
    {
        slug: "2D Battle Game",
        title: "2D Battle Game",
        image: process.env.PUBLIC_URL + "/pokemon/PokemonHackathon3.png",
        description: "Tijdens een GitHub Copilot Hackathon op 21 mei 2025, georganiseerd door Xebia in Hilversum, ontwikkelde ik samen met mijn team een eenvoudige Pokémon-achtige game. In deze browsergame verplaats je je karakter over een speelveld, kun je wilde Pokémon tegenkomen en ga je gevechten aan via een turn-based battle-systeem. Het doel was om met behulp van AI-assistentie (GitHub Copilot) binnen enkele uren een werkende game te bouwen.",
        tag: "Evenement project",
        techstack: "HTML, Javascript, GitHub Copilot",
        gallery: [
            process.env.PUBLIC_URL + "/pokemon/PokemonHackathon1.png",
            process.env.PUBLIC_URL + "/pokemon/PokemonHackathon2.png",
            process.env.PUBLIC_URL + "/pokemon/PokemonHackathon3.png"
        ]
    },
    {
        slug: "voetbal-app",
        title: "Voetbal-app",
        image: process.env.PUBLIC_URL + "/voetbal/voetbalbanner.png",
        description: "Een sociale voetbal-app waarin gebruikers wedstrijden kunnen voorspellen, vrienden kunnen volgen en coins verdienen voor correcte voorspellingen. Coins zijn in te wisselen voor profiel-aanpassingen of cosmetische items.",
        tag: "Persoonlijk project",
        techstack: "Frontend: React Native met JavaScript Backend: Momenteel bevat dit project nog geen backend",
        gallery: [
            process.env.PUBLIC_URL + "/voetbal/voetbal1.jpeg",
            process.env.PUBLIC_URL + "/voetbal/voetbal2.jpeg",
            process.env.PUBLIC_URL + "/voetbal/voetbal3.jpeg",
            process.env.PUBLIC_URL + "/voetbal/voetbal4.jpeg"
        ]
    }
];

export default projects;
