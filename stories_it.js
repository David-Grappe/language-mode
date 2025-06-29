const stories_it = [
        { text: "Pinocchio ignorò i consigli e seguì il Gatto e la Volpe.", question: "Chi segue Pinocchio?", answer: "il gatto e la volpe" },
        { text: "La giovane Lucia camminava tra i vigneti toscani, pensando al futuro.", question: "Dove cammina Lucia?", answer: "tra i vigneti" },
        { text: "Nel cuore di Milano, il piccolo Andrea sognava di diventare artista.", question: "Cosa sogna di diventare Andrea?", answer: "artista" },
        { text: "Il vecchio pescatore guardava il mare in silenzio.", question: "Cosa guarda il pescatore?", answer: "il mare" },
        { text: "Giulia preparava il pranzo con sua nonna nella cucina di famiglia.", question: "Con chi cucina Giulia?", answer: "sua nonna" },
        { text: "Marco scriveva poesie al tramonto, ispirato dal canto degli uccelli.", question: "Cosa scrive Marco?", answer: "poesie" },
        { text: "Teresa correva lungo il fiume, ascoltando il suono dell'acqua.", question: "Dove corre Teresa?", answer: "lungo il fiume" },
        { text: "Nel silenzio della biblioteca, Leonardo sfogliava vecchi manoscritti.", question: "Cosa fa Leonardo?", answer: "sfoglia manoscritti" },
        { text: "Sotto il cielo stellato, Anna sognava una vita migliore.", question: "Cosa sogna Anna?", answer: "una vita migliore" },
        { text: "Giovanni guardava le Alpi dalla finestra della sua stanza.", question: "Cosa guarda Giovanni?", answer: "le Alpi" },
        {
            text: "Era una giornata soleggiata e calda.",
            question: "Com'era la giornata?",
            answer: "soleggiata e calda"
          },
          {
            text: "Luca ha visto un gatto nero per strada.",
            question: "Cosa ha visto Luca?",
            answer: "un gatto nero"
          },
          {
            text: "Guardò il cielo stellato.",
            question: "Chi è il soggetto della frase?",
            answer: "lui"
          },
            { text: "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura.", question: "Chi è l'autore di questo verso?", answer: "dante" },
            { text: "La rosa nel nome, fragile e misteriosa, svelava verità nell'ombra del monastero.", question: "Quale oggetto è simbolico nel titolo?", answer: "rosa" },
            { text: "Don Abbondio tornava dal suo passeggio quando incontrò i bravi.", question: "Come si chiama il prete ne 'I Promessi Sposi'?", answer: "don abbondio" },
            { text: "Renzo fuggì da Milano durante i tumulti del pane.", question: "In quale città si trovava Renzo?", answer: "milano" },
            { text: "Lucia pregava la Madonna, cercando protezione nel momento del bisogno.", question: "A chi si rivolgeva Lucia per aiuto?", answer: "madonna" },
            { text: "Il principe Fabrizio osservava la decadenza della nobiltà siciliana.", question: "Chi è il protagonista del 'Gattopardo'?", answer: "fabrizio" },
            { text: "Padre Cristoforo offrì il perdono in nome della fede.", question: "Qual è il ruolo di Cristoforo?", answer: "frate" },
            { text: "L’Innominato fu tormentato dal rimorso prima della sua conversione.", question: "Come si chiama il personaggio che si redime?", answer: "innominato" },
            { text: "Leopardi scrisse poesie sull'infelicità e la natura.", question: "Qual era il sentimento ricorrente nei versi di Leopardi?", answer: "infelicità" },
            { text: "La siepe dell’Infinito ostruisce la vista ma apre l’immaginazione.", question: "Qual è il titolo della poesia più famosa di Leopardi?", answer: "infinito" },
            { text: "Mastro-don Gesualdo lottava per elevarsi nella società.", question: "Qual è il cognome di Gesualdo?", answer: "motta" },
            { text: "Pinocchio era un burattino di legno che desiderava diventare un bambino vero.", question: "Di che materiale era fatto Pinocchio?", answer: "legno" },
            { text: "Geppetto costruì un burattino che prese vita.", question: "Chi è il padre di Pinocchio?", answer: "geppetto" },
            { text: "Il Gattopardo osservava il cambiamento sociale con malinconia.", question: "Qual è l'animale nel titolo del romanzo di Tomasi di Lampedusa?", answer: "gattopardo" },
            { text: "L’amore di Paolo e Francesca fu punito nell’Inferno.", question: "In quale cantica si trova la storia di Paolo e Francesca?", answer: "inferno" },
            { text: "Beatrice guida Dante nel Paradiso con dolcezza e luce.", question: "Chi guida Dante nel Paradiso?", answer: "beatrice" },
            { text: "Virgilio accompagna Dante nei regni dell’oltretomba.", question: "Chi è la guida di Dante nell'Inferno?", answer: "virgilio" },
            { text: "La Divina Commedia è divisa in tre cantiche.", question: "In quante parti è divisa la Divina Commedia?", answer: "tre" },
            { text: "D’Annunzio scrisse romanzi pieni di estetismo e sensualità.", question: "Qual è il cognome di Gabriele, autore del 'Piacere'?", answer: "d'annunzio" },
            { text: "Andrea Sperelli è il protagonista del 'Piacere'.", question: "Come si chiama il protagonista del 'Piacere'?", answer: "andrea" },
            { text: "Svevo racconta la crisi di Zeno attraverso il diario.", question: "Come si intitola il romanzo famoso di Italo Svevo?", answer: "coscienza di zeno" },
            { text: "Zeno Cosini racconta le sue nevrosi e dipendenze.", question: "Qual è il cognome di Zeno?", answer: "cosini" },
            { text: "La poesia futurista rompeva con la tradizione e celebrava la velocità.", question: "Quale movimento artistico celebrava la macchina e il progresso?", answer: "futurismo" },
            { text: "Marinetti fu il fondatore del Futurismo.", question: "Chi scrisse il Manifesto del Futurismo?", answer: "marinetti" },
            { text: "Primo Levi raccontò la sua esperienza ad Auschwitz.", question: "Qual è il cognome dell’autore di 'Se questo è un uomo'?", answer: "levi" },
            { text: "Italo Calvino scrisse storie fantastiche e allegoriche.", question: "Qual è il nome di battesimo di Calvino?", answer: "italo" },
            { text: "Il Visconte dimezzato rappresenta la divisione dell’animo umano.", question: "Chi è l’autore del 'Visconte dimezzato'?", answer: "calvino" },
            { text: "La coscienza di Zeno è narrata in forma di diario.", question: "Che tipo di forma narrativa ha il romanzo di Svevo?", answer: "diario" },
            { text: "Il Decamerone raccoglie cento novelle raccontate da giovani in fuga dalla peste.", question: "Chi scrisse il Decamerone?", answer: "boccaccio" },
            { text: "Orlando perde il senno per amore di Angelica.", question: "Chi è l'autore dell'Orlando Furioso?", answer: "ariosto" },
            { text: "Tasso descrive la crociata nel suo poema epico.", question: "Chi scrisse la 'Gerusalemme Liberata'?", answer: "tasso" }
          ];
       
  
