const stories = [
      {
        text: "Jean Valjean entra dans la ville de Digne, fatigué et méfiant, après des années au bagne.",
        question: "Que veut dire 'bagne' en anglais ?",
        answer: "prison"
      },
      
  {
    text: "Pinocchio, malgré les avertissements, suivit le Chat et le Renard, oubliant son devoir d’aller à l’école.",
    question: "Qui Pinocchio suit-il au lieu d'aller à l'école ?",
    answer: "le chat et le renard"
  },
  {
    text: "Dans les ruelles de Venise, le jeune Tonio rêvait de devenir musicien, défiant la tradition de son aristocratique famille.",
    question: "Quel est le rêve de Tonio ?",
    answer: "devenir musicien"
  },
  {
    text: "Léopardi contemplait la lune solitaire, méditant sur la nature humaine et le destin des hommes.",
    question: "Que fait Léopardi en regardant la lune ?",
    answer: "il médite sur la condition humaine"
  },
  {
    text: "Silvio, dans un petit village de Calabre, écrivait des lettres à sa bien-aimée, espérant la revoir après des années d’exil.",
    question: "Pourquoi Silvio écrit-il des lettres ?",
    answer: "pour revoir sa bien-aimée"
  },
  {
    text: "Fra Cristoforo leva la main pour bénir Lucia et Renzo, leur offrant espoir dans leur fuite.",
    question: "Que fait Fra Cristoforo pour les jeunes ?",
    answer: "il les bénit"
  },
  {
    text: "Pinocchio regretta ses erreurs en voyant Geppetto malade et pauvre à cause de ses choix.",
    question: "Pourquoi Pinocchio regrette-t-il ?",
    answer: "parce que Geppetto est malade et pauvre"
  },
  {
    text: "Le comte Mosca observa la duchesse Sanseverina avec admiration et amour secret.",
    question: "Que ressent le comte Mosca ?",
    answer: "de l'amour"
  },
  {
    text: "Dans la chaleur sicilienne, Angelica marchait avec assurance, consciente de son charme et de son rang.",
    question: "Comment marche Angelica ?",
    answer: "avec assurance"
  },
  {
    text: "Andrea, sur le quai de Naples, regardait les bateaux partir, rêvant d’un avenir libre et glorieux.",
    question: "Que fait Andrea au quai ?",
    answer: "il regarde les bateaux partir"
  },
  {
    text: "Maria, vêtue de noir, relisait les lettres de son mari tombé à la guerre, les larmes aux yeux.",
    question: "Pourquoi Maria pleure-t-elle ?",
    answer: "elle relit les lettres de son mari"
  },
  {
    text: "Le jeune Giuseppe se leva tôt pour aider son père dans les champs, fier de ses racines.",
    question: "Pourquoi Giuseppe se lève-t-il tôt ?",
    answer: "pour aider son père"
  },
  {
    text: "La vieille Teresa chantait des ballades oubliées sur la terrasse, ses souvenirs mêlés au vent.",
    question: "Que fait Teresa sur la terrasse ?",
    answer: "elle chante des ballades"
  },
  {
    text: "Vittorio écrivait dans son journal, notant chaque détail de son voyage à travers la Toscane.",
    question: "Qu’écrit Vittorio ?",
    answer: "les détails de son voyage"
  },
  {
    text: "Le soleil se couchait sur les collines ombriennes alors que Lucia serrait un livre contre elle.",
    question: "Que tient Lucia contre elle ?",
    answer: "un livre"
  },
  {
    text: "Paolo construisit une barque de ses mains, espérant traverser le lac et rejoindre sa famille.",
    question: "Pourquoi Paolo construit-il une barque ?",
    answer: "pour rejoindre sa famille"
  },
  {
    text: "Francesca, au marché de Florence, négociait avec ardeur, sa voix claire attirant les regards.",
    question: "Où Francesca est-elle ?",
    answer: "au marché de Florence"
  },
  {
    text: "Un air d’opéra flottait dans la rue tandis que Pietro se souvenait de ses jours sur scène.",
    question: "De quoi Pietro se souvient-il ?",
    answer: "de ses jours sur scène"
  },
  {
    text: "Les cloches sonnaient dans le village pendant que Clara écrivait un poème à la lumière d’une bougie.",
    question: "Que fait Clara pendant que les cloches sonnent ?",
    answer: "elle écrit un poème"
  },
  {
    text: "Gianni, le regard tourné vers les Alpes, rêvait de les traverser un jour avec son frère.",
    question: "Que rêve Gianni de faire ?",
    answer: "traverser les Alpes"
  },
  {
    text: "Derrière le comptoir du café familial, Rosa écoutait les histoires de la ville.",
    question: "Où Rosa travaille-t-elle ?",
    answer: "dans le café familial"
  },
  {
    text: "Massimo nettoyait sa bicyclette, espérant gagner la course du dimanche.",
    question: "Pourquoi Massimo nettoie-t-il son vélo ?",
    answer: "pour la course du dimanche"
  },
  {
    text: "Nina cueillait des olives au lever du soleil, fredonnant une vieille chanson napolitaine.",
    question: "Que fait Nina ?",
    answer: "elle cueille des olives"
  },
  {
    text: "Luca lisait les écrits de Dante, émerveillé par la beauté des mots.",
    question: "Que lit Luca ?",
    answer: "les écrits de Dante"
  },
  {
    text: "Elena marchait sur les pierres anciennes de Rome, son carnet à la main.",
    question: "Que tient Elena dans la main ?",
    answer: "un carnet"
  },
  {
    text: "Matteo sculptait le bois avec patience, créant une chaise pour son fils.",
    question: "Que fabrique Matteo ?",
    answer: "une chaise"
  },
  {
    text: "Isabella s'arrêtait au bord du lac de Côme, respirant l’air frais et paisible.",
    question: "Où est Isabella ?",
    answer: "au bord du lac de Côme"
  },
  {
    text: "Giulia décorait la table pour le repas du soir, riant avec sa grand-mère.",
    question: "Que fait Giulia avec sa grand-mère ?",
    answer: "elle rit et décore la table"
  },
  {
    text: "Antonio écrivait une lettre à son ami resté à Palerme, racontant sa nouvelle vie à Turin.",
    question: "À qui Antonio écrit-il ?",
    answer: "à son ami de Palerme"
  },
  {
    text: "Margherita, en robe blanche, attendait sous l’arche en pierre, tenant une fleur séchée.",
    question: "Que tient Margherita ?",
    answer: "une fleur séchée"
  },
  {
    text: "Jean Valjean porta Marius blessé à travers les égouts de Paris pour lui sauver la vie.",
    question: "Qui Jean Valjean a-t-il sauvé ?",
    answer: "Marius"
  },
  {
    text: "Cosette grandit en sécurité avec Valjean après une enfance malheureuse chez les Thénardier.",
    question: "Où Cosette était-elle malheureuse ?",
    answer: "chez les Thénardier"
  },
  {
    text: "Julien Sorel ambitionnait de gravir les échelons sociaux grâce à son intelligence.",
    question: "Que voulait faire Julien Sorel ?",
    answer: "gravir les échelons sociaux"
  },
  {
    text: "Madame Bovary se sentait piégée dans sa routine provinciale, rêvant d'une vie de luxe.",
    question: "Comment se sent Madame Bovary ?",
    answer: "piégée"
  },
  {
    text: "Meursault, après la mort de sa mère, agit avec indifférence face au monde.",
    question: "Comment agit Meursault après la mort de sa mère ?",
    answer: "avec indifférence"
  },
  {
    text: "Camille, dans 'Le Fabuleux Destin d'Amélie Poulain', décide de changer la vie des gens autour d'elle.",
    question: "Que veut faire Amélie ?",
    answer: "changer la vie des gens"
  },
  {
    text: "Antoine Doinel, dans 'Les Quatre Cents Coups', fuit l'école et sa famille, cherchant sa liberté.",
    question: "Que cherche Antoine Doinel ?",
    answer: "sa liberté"
  },
  {
    text: "La Bête apprit à aimer grâce à la gentillesse et la patience de Belle.",
    question: "Qui a transformé la Bête ?",
    answer: "Belle"
  },
  {
    text: "Fantine vendit ses cheveux et ses dents pour nourrir sa fille Cosette.",
    question: "Pourquoi Fantine vend-elle ses cheveux ?",
    answer: "pour nourrir sa fille"
  },
  {
    text: "Pépé le Moko vivait caché dans la Casbah d'Alger, poursuivi par la police.",
    question: "Où se cache Pépé le Moko ?",
    answer: "dans la Casbah"
  },
  {
    text: "Monsieur Hulot, dans 'Les Vacances de Monsieur Hulot', provoque des situations comiques malgré lui.",
    question: "Comment sont les actions de Monsieur Hulot ?",
    answer: "comiques"
  },
  {
    text: "Dans Cyrano de Bergerac, Cyrano cache son amour pour Roxane à cause de son nez.",
    question: "Pourquoi Cyrano ne déclare-t-il pas son amour ?",
    answer: "à cause de son nez"
  },
  {
    text: "Le Petit Prince apprit la valeur de l'amitié grâce au renard.",
    question: "Quel animal apprend une leçon au Petit Prince ?",
    answer: "le renard"
  },
  {
    text: "Germinal dépeint la vie dure des mineurs luttant pour des conditions meilleures.",
    question: "Quel est le sujet de Germinal ?",
    answer: "la vie des mineurs"
  },
  {
    text: "Albert, dans La Peste, tente de combattre l'épidémie tout en questionnant le sens de la vie.",
    question: "Que fait Albert dans La Peste ?",
    answer: "il combat l'épidémie"
  },
  {
    text: "Dans Les Choristes, Clément Mathieu découvre les talents cachés des élèves.",
    question: "Que découvre Clément Mathieu ?",
    answer: "les talents des élèves"
  },
  {
    text: "Louise, dans Tomboy, lutte pour affirmer son identité de genre dans un nouvel environnement.",
    question: "Quel est le thème de Tomboy ?",
    answer: "l'identité de genre"
  },
  {
    text: "Dans Le Dîner de Cons, François Pignon est invité pour être ridiculisé, sans le savoir.",
    question: "Pourquoi François Pignon est-il invité ?",
    answer: "pour être ridiculisé"
  },
  {
    text: "Mathilde cherche son fiancé disparu dans les tranchées de la Première Guerre mondiale dans Un long dimanche de fiançailles.",
    question: "Que cherche Mathilde ?",
    answer: "son fiancé"
  },
  {
    text: "Michel, dans À bout de souffle, est un criminel en fuite inspiré par le cinéma américain.",
    question: "Par quoi Michel est-il inspiré ?",
    answer: "le cinéma américain"
  },
  {
    text: "Dans Persepolis, Marjane raconte son enfance en Iran pendant la révolution islamique.",
    question: "Où se déroule Persepolis ?",
    answer: "en Iran"
  },
  {
    text: "Léon, un tueur à gages, devient protecteur d'une jeune fille, Mathilda.",
    question: "Quel est le rôle de Léon pour Mathilda ?",
    answer: "protecteur"
  },
  {
    text: "Dans L'Auberge espagnole, Xavier découvre la diversité culturelle en vivant avec des étudiants européens.",
    question: "Que découvre Xavier ?",
    answer: "la diversité culturelle"
  },
  {
    text: "Le Comte de Monte-Cristo s'évade de prison et se venge de ses ennemis.",
    question: "Que fait le Comte de Monte-Cristo après son évasion ?",
    answer: "il se venge"
  },
  {
    text: "Hugo Cabret vit dans une gare parisienne, réparant des horloges et poursuivant le rêve de son père.",
    question: "Où vit Hugo Cabret ?",
    answer: "dans une gare"
  },
  {
    text: "Dans La Haine, trois amis luttent contre les injustices sociales en banlieue parisienne.",
    question: "Quel est le thème principal de La Haine ?",
    answer: "les injustices sociales"
  },
  {
    text: "Adèle, dans La Vie d'Adèle, explore sa sexualité et ses sentiments à travers une relation intense.",
    question: "Quel aspect de la vie Adèle explore-t-elle ?",
    answer: "sa sexualité"
  },
  {
    text: "Cléo attend les résultats d'un examen médical dans Cléo de 5 à 7, observant la ville et sa propre vie.",
    question: "Que fait Cléo pendant deux heures ?",
    answer: "elle attend des résultats"
  },
  {
    text: "Dans Les Demoiselles de Rochefort, les jumelles rêvent d’amour et de musique dans une ville colorée.",
    question: "De quoi rêvent les jumelles ?",
    answer: "d'amour et de musique"
  },
  {
    text: "Le petit prince regarda les étoiles et dit : 'On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.'",
    question: "Que veut dire 'l’essentiel est invisible pour les yeux' ?",
    answer: "les choses importantes ne se voient pas"
  },
  {
    text: "Candide, après mille épreuves, conclut que le mieux était de cultiver son jardin, loin des guerres et des dogmes philosophiques.",
    question: "Que décide de faire Candide ?",
    answer: "cultiver son jardin"
  },
  {
    text: "Rastignac, en haut de la butte Montmartre, lança à Paris un défi silencieux, décidé à conquérir la capitale coûte que coûte.",
    question: "Qu’est-ce que Rastignac veut faire ?",
    answer: "conquérir paris"
  },
  {
    text: "Julien Sorel, jeune homme ambitieux, cachait un exemplaire du Mémorial de Sainte-Hélène sous son matelas.",
    question: "Quel livre Julien Sorel cache-t-il ?",
    answer: "le mémorial de sainte-hélène"
  },
  {
    text: "Marius observait Cosette de loin, tombant peu à peu amoureux d’elle sans jamais lui adresser la parole.",
    question: "Qui Marius observe-t-il ?",
    answer: "cosette"
  },
      
      {
        text: "Emma Bovary, insatisfaite de sa vie de province, rêvait de passion et de luxe comme dans les romans.",
        question: "Comment se sent Emma Bovary ?",
        answer: "insatisfaite"
      },
      {
        text: "Il était une fois un roi et une reine, qui vivaient dans un grand château au milieu de la forêt...",
        question: "Où habitaient le roi et la reine ?",
        answer: "un château"
      }
    ];