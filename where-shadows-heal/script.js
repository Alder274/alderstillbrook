/*
  Where Shadows Heal language switcher.
  Security:
  - no innerHTML
  - no eval
  - no inline event handlers
  - all text updates use textContent
*/

(function () {
  "use strict";

  const fallbackLanguage = "nl";

  const languages = {
    nl: {
      htmlLang: "nl",
      pageTitle: "Waar Schaduwen Helen — Officiële Boekpagina",
      metaDescription: "Ontdek Waar Schaduwen Helen, een waargebeurd verhaal over zoeken, stilte, heling en licht.",
      buyLink: "https://example.com/nl/buy",
      cover: "assets/covers/cover-nl.webp",
      fallbackCover: "assets/covers/cover-en.webp",
      skip: "Ga naar de inhoud",
      navBook: "Boek",
      navReviews: "Reviews",
      navFaq: "FAQ",
      buyNow: "Bestel nu",
      buyNowHero: "Bestel nu",
      buyNowCta: "Bestel nu",
      learnMore: "Lees meer",
      eyebrow: "Een waargebeurd verhaal",
      heroTitle: "Waar Schaduwen Helen",
      heroSubtitle: "Een kind dat de hemel afzocht naar antwoorden. Een ziel die nooit stopte met zoeken.",
      heroDescription: "Een aangrijpende literaire memoir over herinnering, stilte, heling en het kwetsbare licht dat zelfs na duisternis gevonden kan worden.",
      bookAlt: "Boekomslag van Where Shadows Heal door Alder Stillbrook",
      aboutLabel: "Over het boek",
      aboutTitle: "Een verhaal over zoeken naar licht wanneer het leven schaduw wordt",
      aboutText: "Vervang deze placeholder door je officiële boekbeschrijving. Leg de nadruk op de emotionele belofte, het waargebeurde karakter en de verandering die lezers kunnen verwachten.",
      benefitsLabel: "Waarom lezen",
      benefitsTitle: "Wat lezers meenemen",
      benefit1Title: "Emotionele diepgang",
      benefit1Text: "Een stil en oprecht verhaal voor lezers die worden geraakt door heling, herinnering en veerkracht.",
      benefit2Title: "Een echte reis",
      benefit2Text: "Een verhaal geworteld in de echtheid van een leven, verteld met zorg en eerlijkheid.",
      benefit3Title: "Hoop na duisternis",
      benefit3Text: "Een uitnodiging voor lezers om mee te gaan van schaduw naar licht.",
      reviewsLabel: "Reviews",
      reviewsTitle: "Wat lezers zeggen",
      review1: "“Een prachtig sfeervol en diep menselijk verhaal.”",
      review1Name: "— Lezersreview",
      review2: "“Teder, eerlijk en vol stille hoop.”",
      review2Name: "— Lezersreview",
      review3: "“Het soort boek dat bij je blijft na de laatste pagina.”",
      review3Name: "— Lezersreview",
      authorLabel: "Over de auteur",
      authorText: "Vervang deze placeholder door je auteursbiografie. Voeg je missie, achtergrond en de reden toe waarom dit verhaal ertoe doet.",
      authorAlt: "Placeholder voor auteursfoto",
      faqLabel: "FAQ",
      faqTitle: "Veelgestelde vragen",
      faq1Q: "Voor wie is dit boek?",
      faq1A: "Voor lezers die zich verbonden voelen met waargebeurde verhalen over heling, jeugd, herinnering en hoop.",
      faq2Q: "Waar kan ik het boek kopen?",
      faq2A: "Vervang de links “Bestel nu” door je echte kooplink.",
      faq3Q: "Kan ik de tekst aanpassen?",
      faq3A: "Ja. Alle teksten zijn aanpasbaar in index.html en script.js.",
      ctaTitle: "Stap het verhaal binnen",
      ctaText: "Ontdek een waargebeurd verhaal over zoeken, stilte, heling en licht.",
      copyright: "© 2026 Alder Stillbrook. Alle rechten voorbehouden.",
      privacy: "Privacy",
      contact: "Contact",
      social: "Social media"
    },
    en: {
      htmlLang: "en",
      pageTitle: "Where Shadows Heal — Official Book Page",
      metaDescription: "Discover Where Shadows Heal, a true story about a child who searched the skies for answers and a soul that never stopped searching.",
      buyLink: "https://example.com/buy",
      cover: "assets/covers/cover-en.webp",
      fallbackCover: "assets/covers/cover-en.webp",
      skip: "Skip to content",
      navBook: "Book",
      navReviews: "Reviews",
      navFaq: "FAQ",
      buyNow: "Order now",
      buyNowHero: "Order now",
      buyNowCta: "Order now",
      learnMore: "Read more",
      eyebrow: "A true story",
      heroTitle: "Where Shadows Heal",
      heroSubtitle: "A child who searched the skies for answers. A soul that never stopped searching.",
      heroDescription: "A moving literary memoir about memory, silence, healing, and the fragile light that can still be found after darkness.",
      bookAlt: "Book cover of Where Shadows Heal by Alder Stillbrook",
      aboutLabel: "About the book",
      aboutTitle: "A story about searching for light when life becomes shadow",
      aboutText: "Replace this placeholder with your official book description. Focus on the emotional promise, the true-story angle, and the transformation readers can expect.",
      benefitsLabel: "Why read it",
      benefitsTitle: "What readers will take away",
      benefit1Title: "Emotional depth",
      benefit1Text: "A quiet, sincere story for readers drawn to healing, memory, and resilience.",
      benefit2Title: "A true journey",
      benefit2Text: "Ground the page in the authenticity of a real life, told with care and honesty.",
      benefit3Title: "Hope after darkness",
      benefit3Text: "Invite readers into a narrative that moves from shadow toward light.",
      reviewsLabel: "Reviews",
      reviewsTitle: "What readers say",
      review1: "“A beautifully atmospheric and deeply human story.”",
      review1Name: "— Reader review",
      review2: "“Tender, honest, and filled with quiet hope.”",
      review2Name: "— Reader review",
      review3: "“The kind of book that stays with you after the final page.”",
      review3Name: "— Reader review",
      authorLabel: "About the author",
      authorText: "Replace this placeholder with your author biography. Add your mission, background, and why this story matters.",
      authorAlt: "Author photo placeholder",
      faqLabel: "FAQ",
      faqTitle: "Frequently asked questions",
      faq1Q: "Who is this book for?",
      faq1A: "For readers who connect with true stories about healing, childhood, memory, and hope.",
      faq2Q: "Where can I buy the book?",
      faq2A: "Replace the “Order now” links with your real purchase link.",
      faq3Q: "Can I change the text?",
      faq3A: "Yes. All copy is editable inside index.html and script.js.",
      ctaTitle: "Step into the story",
      ctaText: "Discover a true story of searching, silence, healing, and light.",
      copyright: "© 2026 Alder Stillbrook. All rights reserved.",
      privacy: "Privacy",
      contact: "Contact",
      social: "Social media"
    },
    es: {
      htmlLang: "es", pageTitle: "Donde Sanan las Sombras — Página oficial del libro", metaDescription: "Descubre Donde Sanan las Sombras, una historia real sobre búsqueda, silencio, sanación y luz.", buyLink: "https://example.com/es/buy", cover: "assets/covers/cover-es.webp", fallbackCover: "assets/covers/cover-en.webp",
      skip: "Saltar al contenido", navBook: "Libro", navReviews: "Reseñas", navFaq: "FAQ", buyNow: "Comprar ahora", buyNowHero: "Comprar ahora", buyNowCta: "Comprar ahora", learnMore: "Leer más", eyebrow: "Una historia real", heroTitle: "Donde Sanan las Sombras", heroSubtitle: "Un niño que buscaba respuestas en el cielo. Un alma que nunca dejó de buscar.", heroDescription: "Una memoria literaria conmovedora sobre la memoria, el silencio, la sanación y la luz frágil que aún puede encontrarse después de la oscuridad.", bookAlt: "Portada del libro Where Shadows Heal de Alder Stillbrook", aboutLabel: "Sobre el libro", aboutTitle: "Una historia sobre buscar luz cuando la vida se vuelve sombra", aboutText: "Sustituye este texto por la descripción oficial del libro. Enfatiza la promesa emocional, el carácter real de la historia y la transformación que pueden esperar los lectores.", benefitsLabel: "Por qué leerlo", benefitsTitle: "Lo que los lectores se llevarán", benefit1Title: "Profundidad emocional", benefit1Text: "Una historia tranquila y sincera para lectores atraídos por la sanación, la memoria y la resiliencia.", benefit2Title: "Un viaje verdadero", benefit2Text: "Una vida real contada con cuidado, autenticidad y honestidad.", benefit3Title: "Esperanza después de la oscuridad", benefit3Text: "Una invitación a avanzar de la sombra hacia la luz.", reviewsLabel: "Reseñas", reviewsTitle: "Lo que dicen los lectores", review1: "“Una historia profundamente humana y bellamente atmosférica.”", review1Name: "— Reseña de lector", review2: "“Tierna, honesta y llena de esperanza tranquila.”", review2Name: "— Reseña de lector", review3: "“El tipo de libro que permanece contigo después de la última página.”", review3Name: "— Reseña de lector", authorLabel: "Sobre el autor", authorText: "Sustituye este texto por tu biografía de autor. Añade tu misión, tu trayectoria y por qué esta historia importa.", authorAlt: "Imagen de autor provisional", faqLabel: "FAQ", faqTitle: "Preguntas frecuentes", faq1Q: "¿Para quién es este libro?", faq1A: "Para lectores que conectan con historias reales sobre sanación, infancia, memoria y esperanza.", faq2Q: "¿Dónde puedo comprar el libro?", faq2A: "Sustituye los enlaces de “Comprar ahora” por tu enlace real de compra.", faq3Q: "¿Puedo cambiar el texto?", faq3A: "Sí. Todo el contenido se puede editar en index.html y script.js.", ctaTitle: "Entra en la historia", ctaText: "Descubre una historia real de búsqueda, silencio, sanación y luz.", copyright: "© 2026 Alder Stillbrook. Todos los derechos reservados.", privacy: "Privacidad", contact: "Contacto", social: "Redes sociales"
    },
    pt: {
      htmlLang: "pt", pageTitle: "Onde as Sombras Curam — Página oficial do livro", metaDescription: "Descubra Onde as Sombras Curam, uma história real sobre busca, silêncio, cura e luz.", buyLink: "https://example.com/pt/buy", cover: "assets/covers/cover-pt.webp", fallbackCover: "assets/covers/cover-en.webp",
      skip: "Ir para o conteúdo", navBook: "Livro", navReviews: "Avaliações", navFaq: "FAQ", buyNow: "Comprar agora", buyNowHero: "Comprar agora", buyNowCta: "Comprar agora", learnMore: "Ler mais", eyebrow: "Uma história real", heroTitle: "Onde as Sombras Curam", heroSubtitle: "Uma criança que procurava respostas no céu. Uma alma que nunca deixou de procurar.", heroDescription: "Um memorial literário comovente sobre memória, silêncio, cura e a luz frágil que ainda pode ser encontrada depois da escuridão.", bookAlt: "Capa do livro Where Shadows Heal de Alder Stillbrook", aboutLabel: "Sobre o livro", aboutTitle: "Uma história sobre procurar luz quando a vida se torna sombra", aboutText: "Substitua este texto pela descrição oficial do livro. Destaque a promessa emocional, o caráter real da história e a transformação que os leitores podem esperar.", benefitsLabel: "Por que ler", benefitsTitle: "O que os leitores levarão consigo", benefit1Title: "Profundidade emocional", benefit1Text: "Uma história tranquila e sincera para leitores atraídos por cura, memória e resiliência.", benefit2Title: "Uma jornada verdadeira", benefit2Text: "Uma vida real contada com cuidado, autenticidade e honestidade.", benefit3Title: "Esperança após a escuridão", benefit3Text: "Um convite para caminhar da sombra em direção à luz.", reviewsLabel: "Avaliações", reviewsTitle: "O que os leitores dizem", review1: "“Uma história lindamente atmosférica e profundamente humana.”", review1Name: "— Avaliação de leitor", review2: "“Terna, honesta e cheia de esperança silenciosa.”", review2Name: "— Avaliação de leitor", review3: "“O tipo de livro que fica com você depois da última página.”", review3Name: "— Avaliação de leitor", authorLabel: "Sobre o autor", authorText: "Substitua este texto pela sua biografia de autor. Acrescente sua missão, sua trajetória e por que esta história importa.", authorAlt: "Imagem provisória do autor", faqLabel: "FAQ", faqTitle: "Perguntas frequentes", faq1Q: "Para quem é este livro?", faq1A: "Para leitores que se conectam com histórias reais sobre cura, infância, memória e esperança.", faq2Q: "Onde posso comprar o livro?", faq2A: "Substitua os links “Comprar agora” pelo seu link real de compra.", faq3Q: "Posso alterar o texto?", faq3A: "Sim. Todo o conteúdo pode ser editado em index.html e script.js.", ctaTitle: "Entre na história", ctaText: "Descubra uma história real de busca, silêncio, cura e luz.", copyright: "© 2026 Alder Stillbrook. Todos os direitos reservados.", privacy: "Privacidade", contact: "Contato", social: "Redes sociais"
    },
    de: {
      htmlLang: "de", pageTitle: "Wo Schatten Heilen — Offizielle Buchseite", metaDescription: "Entdecke Wo Schatten Heilen, eine wahre Geschichte über Suche, Stille, Heilung und Licht.", buyLink: "https://example.com/de/buy", cover: "assets/covers/cover-de.webp", fallbackCover: "assets/covers/cover-en.webp",
      skip: "Zum Inhalt springen", navBook: "Buch", navReviews: "Rezensionen", navFaq: "FAQ", buyNow: "Jetzt bestellen", buyNowHero: "Jetzt bestellen", buyNowCta: "Jetzt bestellen", learnMore: "Mehr lesen", eyebrow: "Eine wahre Geschichte", heroTitle: "Wo Schatten Heilen", heroSubtitle: "Ein Kind, das den Himmel nach Antworten absuchte. Eine Seele, die nie aufhörte zu suchen.", heroDescription: "Eine bewegende literarische Memoir über Erinnerung, Schweigen, Heilung und das fragile Licht, das nach der Dunkelheit noch gefunden werden kann.", bookAlt: "Buchcover von Where Shadows Heal von Alder Stillbrook", aboutLabel: "Über das Buch", aboutTitle: "Eine Geschichte über die Suche nach Licht, wenn das Leben Schatten wird", aboutText: "Ersetze diesen Platzhalter durch deine offizielle Buchbeschreibung. Betone das emotionale Versprechen, den wahren Ursprung der Geschichte und die Veränderung, die Leser erwarten können.", benefitsLabel: "Warum lesen", benefitsTitle: "Was Leser mitnehmen", benefit1Title: "Emotionale Tiefe", benefit1Text: "Eine stille, ehrliche Geschichte für Leser, die sich von Heilung, Erinnerung und Widerstandskraft angezogen fühlen.", benefit2Title: "Eine wahre Reise", benefit2Text: "Ein echtes Leben, mit Sorgfalt, Authentizität und Ehrlichkeit erzählt.", benefit3Title: "Hoffnung nach der Dunkelheit", benefit3Text: "Eine Einladung, von den Schatten ins Licht zu gehen.", reviewsLabel: "Rezensionen", reviewsTitle: "Was Leser sagen", review1: "„Eine wunderschön atmosphärische und zutiefst menschliche Geschichte.“", review1Name: "— Leserrezension", review2: "„Zart, ehrlich und voller stiller Hoffnung.“", review2Name: "— Leserrezension", review3: "„Die Art von Buch, die nach der letzten Seite bleibt.“", review3Name: "— Leserrezension", authorLabel: "Über den Autor", authorText: "Ersetze diesen Platzhalter durch deine Autorenbiografie. Ergänze deine Mission, deinen Hintergrund und warum diese Geschichte wichtig ist.", authorAlt: "Platzhalter für Autorenfoto", faqLabel: "FAQ", faqTitle: "Häufig gestellte Fragen", faq1Q: "Für wen ist dieses Buch?", faq1A: "Für Leser, die sich mit wahren Geschichten über Heilung, Kindheit, Erinnerung und Hoffnung verbinden.", faq2Q: "Wo kann ich das Buch kaufen?", faq2A: "Ersetze die Links „Jetzt bestellen“ durch deinen echten Kauflink.", faq3Q: "Kann ich den Text ändern?", faq3A: "Ja. Alle Texte sind in index.html und script.js bearbeitbar.", ctaTitle: "Tritt in die Geschichte ein", ctaText: "Entdecke eine wahre Geschichte über Suche, Stille, Heilung und Licht.", copyright: "© 2026 Alder Stillbrook. Alle Rechte vorbehalten.", privacy: "Datenschutz", contact: "Kontakt", social: "Soziale Medien"
    },
    fr: {
      htmlLang: "fr", pageTitle: "Là où les Ombres Guérissent — Page officielle du livre", metaDescription: "Découvrez Là où les Ombres Guérissent, une histoire vraie de quête, de silence, de guérison et de lumière.", buyLink: "https://example.com/fr/buy", cover: "assets/covers/cover-fr.webp", fallbackCover: "assets/covers/cover-en.webp",
      skip: "Aller au contenu", navBook: "Livre", navReviews: "Avis", navFaq: "FAQ", buyNow: "Commander", buyNowHero: "Commander", buyNowCta: "Commander", learnMore: "Lire la suite", eyebrow: "Une histoire vraie", heroTitle: "Là où les Ombres Guérissent", heroSubtitle: "Un enfant qui cherchait des réponses dans le ciel. Une âme qui n’a jamais cessé de chercher.", heroDescription: "Un mémoire littéraire émouvant sur la mémoire, le silence, la guérison et la lumière fragile que l’on peut encore trouver après l’obscurité.", bookAlt: "Couverture du livre Where Shadows Heal d’Alder Stillbrook", aboutLabel: "À propos du livre", aboutTitle: "Une histoire sur la recherche de lumière lorsque la vie devient ombre", aboutText: "Remplacez ce texte par la description officielle du livre. Mettez l’accent sur la promesse émotionnelle, l’histoire vraie et la transformation attendue par les lecteurs.", benefitsLabel: "Pourquoi le lire", benefitsTitle: "Ce que les lecteurs en retireront", benefit1Title: "Profondeur émotionnelle", benefit1Text: "Une histoire calme et sincère pour les lecteurs attirés par la guérison, la mémoire et la résilience.", benefit2Title: "Un véritable voyage", benefit2Text: "Une vie réelle racontée avec soin, authenticité et honnêteté.", benefit3Title: "L’espoir après l’obscurité", benefit3Text: "Une invitation à passer de l’ombre à la lumière.", reviewsLabel: "Avis", reviewsTitle: "Ce que disent les lecteurs", review1: "« Une histoire magnifiquement atmosphérique et profondément humaine. »", review1Name: "— Avis de lecteur", review2: "« Tendre, honnête et remplie d’un espoir discret. »", review2Name: "— Avis de lecteur", review3: "« Le genre de livre qui reste avec vous après la dernière page. »", review3Name: "— Avis de lecteur", authorLabel: "À propos de l’auteur", authorText: "Remplacez ce texte par votre biographie d’auteur. Ajoutez votre mission, votre parcours et pourquoi cette histoire compte.", authorAlt: "Image provisoire de l’auteur", faqLabel: "FAQ", faqTitle: "Questions fréquentes", faq1Q: "À qui s’adresse ce livre ?", faq1A: "Aux lecteurs sensibles aux histoires vraies sur la guérison, l’enfance, la mémoire et l’espoir.", faq2Q: "Où puis-je acheter le livre ?", faq2A: "Remplacez les liens « Commander » par votre véritable lien d’achat.", faq3Q: "Puis-je modifier le texte ?", faq3A: "Oui. Tout le contenu est modifiable dans index.html et script.js.", ctaTitle: "Entrez dans l’histoire", ctaText: "Découvrez une histoire vraie de quête, de silence, de guérison et de lumière.", copyright: "© 2026 Alder Stillbrook. Tous droits réservés.", privacy: "Confidentialité", contact: "Contact", social: "Réseaux sociaux"
    },
    it: {
      htmlLang: "it", pageTitle: "Dove le Ombre Guariscono — Pagina ufficiale del libro", metaDescription: "Scopri Dove le Ombre Guariscono, una storia vera di ricerca, silenzio, guarigione e luce.", buyLink: "https://example.com/it/buy", cover: "assets/covers/cover-it.webp", fallbackCover: "assets/covers/cover-en.webp",
      skip: "Vai al contenuto", navBook: "Libro", navReviews: "Recensioni", navFaq: "FAQ", buyNow: "Ordina ora", buyNowHero: "Ordina ora", buyNowCta: "Ordina ora", learnMore: "Leggi di più", eyebrow: "Una storia vera", heroTitle: "Dove le Ombre Guariscono", heroSubtitle: "Un bambino che cercava risposte nel cielo. Un’anima che non ha mai smesso di cercare.", heroDescription: "Un memoir letterario commovente sulla memoria, il silenzio, la guarigione e la fragile luce che si può ancora trovare dopo l’oscurità.", bookAlt: "Copertina del libro Where Shadows Heal di Alder Stillbrook", aboutLabel: "Sul libro", aboutTitle: "Una storia sulla ricerca della luce quando la vita diventa ombra", aboutText: "Sostituisci questo testo con la descrizione ufficiale del libro. Metti in evidenza la promessa emotiva, la storia vera e la trasformazione che i lettori possono aspettarsi.", benefitsLabel: "Perché leggerlo", benefitsTitle: "Cosa porteranno con sé i lettori", benefit1Title: "Profondità emotiva", benefit1Text: "Una storia quieta e sincera per lettori attratti da guarigione, memoria e resilienza.", benefit2Title: "Un viaggio vero", benefit2Text: "Una vita reale raccontata con cura, autenticità e onestà.", benefit3Title: "Speranza dopo il buio", benefit3Text: "Un invito a muoversi dall’ombra verso la luce.", reviewsLabel: "Recensioni", reviewsTitle: "Cosa dicono i lettori", review1: "“Una storia magnificamente atmosferica e profondamente umana.”", review1Name: "— Recensione di un lettore", review2: "“Tenera, onesta e piena di quieta speranza.”", review2Name: "— Recensione di un lettore", review3: "“Il tipo di libro che resta con te dopo l’ultima pagina.”", review3Name: "— Recensione di un lettore", authorLabel: "Sull’autore", authorText: "Sostituisci questo testo con la tua biografia autore. Aggiungi la tua missione, il tuo percorso e perché questa storia conta.", authorAlt: "Immagine autore provvisoria", faqLabel: "FAQ", faqTitle: "Domande frequenti", faq1Q: "A chi è rivolto questo libro?", faq1A: "Ai lettori che si connettono con storie vere di guarigione, infanzia, memoria e speranza.", faq2Q: "Dove posso acquistare il libro?", faq2A: "Sostituisci i link “Ordina ora” con il tuo vero link di acquisto.", faq3Q: "Posso modificare il testo?", faq3A: "Sì. Tutti i contenuti sono modificabili in index.html e script.js.", ctaTitle: "Entra nella storia", ctaText: "Scopri una storia vera di ricerca, silenzio, guarigione e luce.", copyright: "© 2026 Alder Stillbrook. Tutti i diritti riservati.", privacy: "Privacy", contact: "Contatto", social: "Social media"
    }
  };

  function setMeta(name, value) {
    const meta = document.querySelector(name);
    if (meta) {
      meta.setAttribute("content", value);
    }
  }

  function applyLanguage(language) {
    const selected = languages[language] || languages[fallbackLanguage];

    document.documentElement.lang = selected.htmlLang;
    document.title = selected.pageTitle;
    setMeta('meta[name="description"]', selected.metaDescription);
    setMeta('meta[property="og:title"]', selected.pageTitle);
    setMeta('meta[property="og:description"]', selected.metaDescription);
    setMeta('meta[name="twitter:title"]', selected.pageTitle);
    setMeta('meta[name="twitter:description"]', selected.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(selected, key)) {
        element.textContent = selected[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
      const key = element.getAttribute("data-i18n-alt");
      if (Object.prototype.hasOwnProperty.call(selected, key)) {
        element.setAttribute("alt", selected[key]);
      }
    });

    document.querySelectorAll("[data-buy-link]").forEach(function (link) {
      link.setAttribute("href", selected.buyLink);
    });

    const cover = document.getElementById("book-cover");
    if (cover) {
      cover.onerror = function () {
        if (cover.getAttribute("src") !== selected.fallbackCover) {
          cover.setAttribute("src", selected.fallbackCover);
        }
      };
      cover.setAttribute("src", selected.cover);
    }

    try {
      localStorage.setItem("preferredLanguage", language);
    } catch (error) {
      // Safe fallback when storage is unavailable.
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const switcher = document.getElementById("language-switcher");
    let preferred = fallbackLanguage;

    try {
      preferred = localStorage.getItem("preferredLanguage") || fallbackLanguage;
    } catch (error) {
      preferred = fallbackLanguage;
    }

    if (!languages[preferred]) {
      preferred = fallbackLanguage;
    }

    if (switcher) {
      switcher.value = preferred;
      switcher.addEventListener("change", function (event) {
        applyLanguage(event.target.value);
      });
    }

    applyLanguage(preferred);
  });
})();
