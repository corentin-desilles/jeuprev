function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9)
}

const profileMapping = {
    "Vous refusez de prêter attention aux publicités pour éviter l'influence, conscient des stratégies marketing.":
        'Profil pragmatique',
    "Vous recherchez des informations pour comprendre les risques associés aux jeux d'argents":
        'Profil empathe',
    "Encourager l'ami à se renseigner sur les risques associés aux jeux d'argents":
        'Profil empathe',
    'Eviter les discussions sur le jeu pour ne pas être influencé et ne pas encourager ces habitudes chez votre ami.':
        'Profil pragmatique',
    "Essayer les jeux pour comprendre leur fonctionnement, mais rester conscient des risques d'initiations à des habitudes de jeux.":
        'Profil curieux',
    'Refuser de vous engager dans les jeux pour éviter les risques potentiels liés aux habitudes de jeu.':
        'Profil pragmatique',
    'Choisir de ne pas prêter attention et montrer du respect envers les personnes qui jouent, conscient du caractère stigmatisant de ces propos.':
        'Profil empathe',
    "Chercher des informations pour comprendre les difficultés rencontrées par ceux qui ont des problèmes liés aux jeux d'argent et de hasard.":
        'Profil curieux',
    'Discuter du pourquoi et des risques avant de décider de participer ou non.':
        'Profil pragmatique',
    "Proposer une alternative divertissante. Comme un jeu vidéo ou encore parier des gages à la place de l'argent.":
        'Profil curieux',
    "Opter pour le jeu complet pour profiter de toute l'expérience sans avoir à dépenser de l'argent supplémentaire et éviter les incitations aux achats réguliers.":
        'Profil pragmatique',
    'Choisir le jeu gratuit, mais rester conscient(e) de ses stratégies employées pour donner envie de dépenser.':
        'Profil curieux',
}

const cardsData = [
    {
        id: generateUniqueId(),
        title: 'Les publicités de jeu',
        text: "Vous remarquez une augmentation des publicités pour les jeux d'argent sur les réseaux sociaux",
        model: 'hamburger',
        choices: [
            {
                id: generateUniqueId(),
                text: "Vous refusez de prêter attention aux publicités pour éviter l'influence, conscient des stratégies marketing.",
            },
            {
                id: generateUniqueId(),
                text: "Vous recherchez des informations pour comprendre les risques associés aux jeux d'argents",
            },
        ],
    },
    {
        id: generateUniqueId(),
        title: 'Un ami pari régulièrement',
        text: 'Votre ami vous parle de ses paris fréquents. Il sembe très excité, mais celà vous inquiète.',
        model: 'hamburger',
        choices: [
            {
                id: generateUniqueId(),
                text: "Encourager l'ami à se renseigner sur les risques associés aux jeux d'argents",
            },
            {
                id: generateUniqueId(),
                text: 'Eviter les discussions sur le jeu pour ne pas être influencé et ne pas encourager ces habitudes chez votre ami.',
            },
        ],
    },
    {
        id: generateUniqueId(),
        title: 'Les jeux de hasard en ligne',
        text: "Vous découvrez une variété de jeux d'argent et de hasard disponible en ligne",
        model: 'hamburger',
        choices: [
            {
                id: generateUniqueId(),
                text: "Essayer les jeux pour comprendre leur fonctionnement, mais rester conscient des risques d'initiations à des habitudes de jeux.",
            },
            {
                id: generateUniqueId(),
                text: 'Refuser de vous engager dans les jeux pour éviter les risques potentiels liés aux habitudes de jeu.',
            },
        ],
    },
    {
        id: generateUniqueId(),
        title: 'Les préjugés sur les joueurs',
        text: "Vous entendez un commentaire négatif sur les joueurs : 'Seuls les idiots pensent pouvoir gagner aux jeux !'",
        model: 'hamburger',
        choices: [
            {
                id: generateUniqueId(),
                text: 'Choisir de ne pas prêter attention et montrer du respect envers les personnes qui jouent, conscient du caractère stigmatisant de ces propos.',
            },
            {
                id: generateUniqueId(),
                text: "Chercher des informations pour comprendre les difficultés rencontrées par ceux qui ont des problèmes liés aux jeux d'argent et de hasard.",
            },
        ],
    },
    {
        id: generateUniqueId(),
        title: 'Paris sportif entre amis',
        text: "Vous êtes invité(e) à parier de l'argent sur le résultat d'un match sportif entre amis.",
        model: 'hamburger',
        choices: [
            {
                id: generateUniqueId(),
                text: 'Discuter du pourquoi et des risques avant de décider de participer ou non.',
            },
            {
                id: generateUniqueId(),
                text: "Proposer une alternative divertissante. Comme un jeu vidéo ou encore parier des gages à la place de l'argent.",
            },
        ],
    },
    {
        id: generateUniqueId(),
        title: 'Quel jeu vidéo ?',
        text: 'Vous hésitez entre deux jeux vidéos, un jeu compet à acheter et un jeu gratuit qui conient des petits paiements pour avancer plus vite',
        model: 'hamburger',
        choices: [
            {
                id: generateUniqueId(),
                text: "Opter pour le jeu complet pour profiter de toute l'expérience sans avoir à dépenser de l'argent supplémentaire et éviter les incitations aux achats réguliers.",
            },
            {
                id: generateUniqueId(),
                text: 'Choisir le jeu gratuit, mais rester conscient(e) de ses stratégies employées pour donner envie de dépenser.',
            },
        ],
    },
]

export { cardsData }
export { profileMapping }
