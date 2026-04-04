// ===== Conjugation Reference Data =====
// Full conjugation tables for Spanish and French

const CONJUGATION_DATA = {
    spanish: {
        title: "Conjugaciones Espa\u00f1olas",
        titleEn: "Spanish Conjugations",
        groups: [
            {
                name: "Primera conjugaci\u00f3n (-AR)",
                nameEn: "First conjugation (-AR)",
                ending: "-AR",
                model: "hablar (to speak)",
                color: "#e74c3c",
                description: "The largest group. Most new verbs entering Spanish are -AR verbs.",
                descriptionEn: "The largest group. Most new Spanish verbs are -AR verbs."
            },
            {
                name: "Segunda conjugaci\u00f3n (-ER)",
                nameEn: "Second conjugation (-ER)",
                ending: "-ER",
                model: "comer (to eat)",
                color: "#3498db",
                description: "The second group. Includes many common everyday verbs.",
                descriptionEn: "The second group. Includes many common everyday verbs."
            },
            {
                name: "Tercera conjugaci\u00f3n (-IR)",
                nameEn: "Third conjugation (-IR)",
                ending: "-IR",
                model: "vivir (to live)",
                color: "#2ecc71",
                description: "Very similar to -ER verbs. Only differs in nosotros/vosotros forms.",
                descriptionEn: "Very similar to -ER verbs. Only differs in nosotros/vosotros forms."
            }
        ],
        tenses: [
            {
                name: "Presente",
                nameEn: "Present",
                whenToUse: "Everyday actions, habits, general truths, what's happening now.",
                whenToUseEs: "Acciones cotidianas, h\u00e1bitos, verdades generales, lo que pasa ahora.",
                example: { es: "Yo hablo espa\u00f1ol todos los d\u00edas.", en: "I speak Spanish every day." },
                conjugations: {
                    "-AR (hablar)": { "yo": "-o", "t\u00fa": "-as", "el/ella": "-a", "nosotros": "-amos", "vosotros": "-\u00e1is", "ellos": "-an" },
                    "-ER (comer)": { "yo": "-o", "t\u00fa": "-es", "el/ella": "-e", "nosotros": "-emos", "vosotros": "-\u00e9is", "ellos": "-en" },
                    "-IR (vivir)": { "yo": "-o", "t\u00fa": "-es", "el/ella": "-e", "nosotros": "-imos", "vosotros": "-\u00eds", "ellos": "-en" }
                },
                fullExamples: {
                    "-AR": { "yo": "hablo", "t\u00fa": "hablas", "el/ella": "habla", "nosotros": "hablamos", "vosotros": "habl\u00e1is", "ellos": "hablan" },
                    "-ER": { "yo": "como", "t\u00fa": "comes", "el/ella": "come", "nosotros": "comemos", "vosotros": "com\u00e9is", "ellos": "comen" },
                    "-IR": { "yo": "vivo", "t\u00fa": "vives", "el/ella": "vive", "nosotros": "vivimos", "vosotros": "viv\u00eds", "ellos": "viven" }
                }
            },
            {
                name: "Pret\u00e9rito Indefinido",
                nameEn: "Simple Past (Preterite)",
                whenToUse: "Completed actions in the past with a clear endpoint. 'I spoke', 'I ate'.",
                whenToUseEs: "Acciones completadas en el pasado con un final claro.",
                example: { es: "Ayer habl\u00e9 con mi madre.", en: "Yesterday I spoke with my mother." },
                conjugations: {
                    "-AR (hablar)": { "yo": "-\u00e9", "t\u00fa": "-aste", "el/ella": "-\u00f3", "nosotros": "-amos", "vosotros": "-asteis", "ellos": "-aron" },
                    "-ER (comer)": { "yo": "-\u00ed", "t\u00fa": "-iste", "el/ella": "-i\u00f3", "nosotros": "-imos", "vosotros": "-isteis", "ellos": "-ieron" },
                    "-IR (vivir)": { "yo": "-\u00ed", "t\u00fa": "-iste", "el/ella": "-i\u00f3", "nosotros": "-imos", "vosotros": "-isteis", "ellos": "-ieron" }
                },
                fullExamples: {
                    "-AR": { "yo": "habl\u00e9", "t\u00fa": "hablaste", "el/ella": "habl\u00f3", "nosotros": "hablamos", "vosotros": "hablasteis", "ellos": "hablaron" },
                    "-ER": { "yo": "com\u00ed", "t\u00fa": "comiste", "el/ella": "comi\u00f3", "nosotros": "comimos", "vosotros": "comisteis", "ellos": "comieron" },
                    "-IR": { "yo": "viv\u00ed", "t\u00fa": "viviste", "el/ella": "vivi\u00f3", "nosotros": "vivimos", "vosotros": "vivisteis", "ellos": "vivieron" }
                }
            },
            {
                name: "Pret\u00e9rito Imperfecto",
                nameEn: "Imperfect (Ongoing Past)",
                whenToUse: "Habitual or ongoing actions in the past. Descriptions, background. 'I used to speak', 'I was eating'.",
                whenToUseEs: "Acciones habituales o continuas en el pasado. Descripciones.",
                example: { es: "Cuando era ni\u00f1o, hablaba mucho.", en: "When I was a child, I used to talk a lot." },
                conjugations: {
                    "-AR (hablar)": { "yo": "-aba", "t\u00fa": "-abas", "el/ella": "-aba", "nosotros": "-\u00e1bamos", "vosotros": "-abais", "ellos": "-aban" },
                    "-ER (comer)": { "yo": "-\u00eda", "t\u00fa": "-\u00edas", "el/ella": "-\u00eda", "nosotros": "-\u00edamos", "vosotros": "-\u00edais", "ellos": "-\u00edan" },
                    "-IR (vivir)": { "yo": "-\u00eda", "t\u00fa": "-\u00edas", "el/ella": "-\u00eda", "nosotros": "-\u00edamos", "vosotros": "-\u00edais", "ellos": "-\u00edan" }
                },
                fullExamples: {
                    "-AR": { "yo": "hablaba", "t\u00fa": "hablabas", "el/ella": "hablaba", "nosotros": "habl\u00e1bamos", "vosotros": "hablabais", "ellos": "hablaban" },
                    "-ER": { "yo": "com\u00eda", "t\u00fa": "com\u00edas", "el/ella": "com\u00eda", "nosotros": "com\u00edamos", "vosotros": "com\u00edais", "ellos": "com\u00edan" },
                    "-IR": { "yo": "viv\u00eda", "t\u00fa": "viv\u00edas", "el/ella": "viv\u00eda", "nosotros": "viv\u00edamos", "vosotros": "viv\u00edais", "ellos": "viv\u00edan" }
                }
            },
            {
                name: "Futuro Simple",
                nameEn: "Simple Future",
                whenToUse: "Actions that will happen. Predictions, promises, plans. Same endings for all 3 groups!",
                whenToUseEs: "Acciones futuras, predicciones, promesas. \u00a1Las mismas terminaciones para los 3 grupos!",
                example: { es: "Ma\u00f1ana hablar\u00e9 con el profesor.", en: "Tomorrow I will speak with the professor." },
                conjugations: {
                    "-AR (hablar)": { "yo": "-\u00e9", "t\u00fa": "-\u00e1s", "el/ella": "-\u00e1", "nosotros": "-emos", "vosotros": "-\u00e9is", "ellos": "-\u00e1n" },
                    "-ER (comer)": { "yo": "-\u00e9", "t\u00fa": "-\u00e1s", "el/ella": "-\u00e1", "nosotros": "-emos", "vosotros": "-\u00e9is", "ellos": "-\u00e1n" },
                    "-IR (vivir)": { "yo": "-\u00e9", "t\u00fa": "-\u00e1s", "el/ella": "-\u00e1", "nosotros": "-emos", "vosotros": "-\u00e9is", "ellos": "-\u00e1n" }
                },
                fullExamples: {
                    "-AR": { "yo": "hablar\u00e9", "t\u00fa": "hablar\u00e1s", "el/ella": "hablar\u00e1", "nosotros": "hablaremos", "vosotros": "hablar\u00e9is", "ellos": "hablar\u00e1n" },
                    "-ER": { "yo": "comer\u00e9", "t\u00fa": "comer\u00e1s", "el/ella": "comer\u00e1", "nosotros": "comeremos", "vosotros": "comer\u00e9is", "ellos": "comer\u00e1n" },
                    "-IR": { "yo": "vivir\u00e9", "t\u00fa": "vivir\u00e1s", "el/ella": "vivir\u00e1", "nosotros": "viviremos", "vosotros": "vivir\u00e9is", "ellos": "vivir\u00e1n" }
                },
                note: "For the future tense, add the endings to the FULL infinitive (hablar + \u00e9 = hablar\u00e9), not just the stem."
            },
            {
                name: "Condicional",
                nameEn: "Conditional",
                whenToUse: "Hypothetical situations, polite requests, what 'would' happen. Same endings for all 3 groups!",
                whenToUseEs: "Situaciones hipot\u00e9ticas, peticiones educadas. \u00a1Mismas terminaciones para los 3 grupos!",
                example: { es: "Yo hablar\u00eda con \u00e9l, pero no est\u00e1.", en: "I would speak with him, but he's not here." },
                conjugations: {
                    "-AR (hablar)": { "yo": "-\u00eda", "t\u00fa": "-\u00edas", "el/ella": "-\u00eda", "nosotros": "-\u00edamos", "vosotros": "-\u00edais", "ellos": "-\u00edan" },
                    "-ER (comer)": { "yo": "-\u00eda", "t\u00fa": "-\u00edas", "el/ella": "-\u00eda", "nosotros": "-\u00edamos", "vosotros": "-\u00edais", "ellos": "-\u00edan" },
                    "-IR (vivir)": { "yo": "-\u00eda", "t\u00fa": "-\u00edas", "el/ella": "-\u00eda", "nosotros": "-\u00edamos", "vosotros": "-\u00edais", "ellos": "-\u00edan" }
                },
                fullExamples: {
                    "-AR": { "yo": "hablar\u00eda", "t\u00fa": "hablar\u00edas", "el/ella": "hablar\u00eda", "nosotros": "hablar\u00edamos", "vosotros": "hablar\u00edais", "ellos": "hablar\u00edan" },
                    "-ER": { "yo": "comer\u00eda", "t\u00fa": "comer\u00edas", "el/ella": "comer\u00eda", "nosotros": "comer\u00edamos", "vosotros": "comer\u00edais", "ellos": "comer\u00edan" },
                    "-IR": { "yo": "vivir\u00eda", "t\u00fa": "vivir\u00edas", "el/ella": "vivir\u00eda", "nosotros": "vivir\u00edamos", "vosotros": "vivir\u00edais", "ellos": "vivir\u00edan" }
                },
                note: "Like the future, add endings to the FULL infinitive. The conditional endings are the same as the imperfect -ER/-IR endings!"
            },
            {
                name: "Subjuntivo Presente",
                nameEn: "Present Subjunctive",
                whenToUse: "Wishes, emotions, doubt, recommendations, after 'que'. 'I hope that...', 'I want you to...'.",
                whenToUseEs: "Deseos, emociones, dudas, recomendaciones, despu\u00e9s de 'que'.",
                example: { es: "Quiero que hables m\u00e1s despacio.", en: "I want you to speak more slowly." },
                conjugations: {
                    "-AR (hablar)": { "yo": "-e", "t\u00fa": "-es", "el/ella": "-e", "nosotros": "-emos", "vosotros": "-\u00e9is", "ellos": "-en" },
                    "-ER (comer)": { "yo": "-a", "t\u00fa": "-as", "el/ella": "-a", "nosotros": "-amos", "vosotros": "-\u00e1is", "ellos": "-an" },
                    "-IR (vivir)": { "yo": "-a", "t\u00fa": "-as", "el/ella": "-a", "nosotros": "-amos", "vosotros": "-\u00e1is", "ellos": "-an" }
                },
                fullExamples: {
                    "-AR": { "yo": "hable", "t\u00fa": "hables", "el/ella": "hable", "nosotros": "hablemos", "vosotros": "habl\u00e9is", "ellos": "hablen" },
                    "-ER": { "yo": "coma", "t\u00fa": "comas", "el/ella": "coma", "nosotros": "comamos", "vosotros": "com\u00e1is", "ellos": "coman" },
                    "-IR": { "yo": "viva", "t\u00fa": "vivas", "el/ella": "viva", "nosotros": "vivamos", "vosotros": "viv\u00e1is", "ellos": "vivan" }
                },
                note: "The trick: -AR verbs use -ER endings, and -ER/-IR verbs use -AR endings! It's like they swap."
            }
        ],
        irregulars: [
            {
                verb: "ser", meaning: "to be (permanent)",
                presente: { "yo": "soy", "t\u00fa": "eres", "el/ella": "es", "nosotros": "somos", "vosotros": "sois", "ellos": "son" },
                preterito: { "yo": "fui", "t\u00fa": "fuiste", "el/ella": "fue", "nosotros": "fuimos", "vosotros": "fuisteis", "ellos": "fueron" },
                imperfecto: { "yo": "era", "t\u00fa": "eras", "el/ella": "era", "nosotros": "\u00e9ramos", "vosotros": "erais", "ellos": "eran" },
                futuro: { "yo": "ser\u00e9", "t\u00fa": "ser\u00e1s", "el/ella": "ser\u00e1", "nosotros": "seremos", "vosotros": "ser\u00e9is", "ellos": "ser\u00e1n" }
            },
            {
                verb: "estar", meaning: "to be (temp/location)",
                presente: { "yo": "estoy", "t\u00fa": "est\u00e1s", "el/ella": "est\u00e1", "nosotros": "estamos", "vosotros": "est\u00e1is", "ellos": "est\u00e1n" },
                preterito: { "yo": "estuve", "t\u00fa": "estuviste", "el/ella": "estuvo", "nosotros": "estuvimos", "vosotros": "estuvisteis", "ellos": "estuvieron" },
                imperfecto: { "yo": "estaba", "t\u00fa": "estabas", "el/ella": "estaba", "nosotros": "est\u00e1bamos", "vosotros": "estabais", "ellos": "estaban" },
                futuro: { "yo": "estar\u00e9", "t\u00fa": "estar\u00e1s", "el/ella": "estar\u00e1", "nosotros": "estaremos", "vosotros": "estar\u00e9is", "ellos": "estar\u00e1n" }
            },
            {
                verb: "ir", meaning: "to go",
                presente: { "yo": "voy", "t\u00fa": "vas", "el/ella": "va", "nosotros": "vamos", "vosotros": "vais", "ellos": "van" },
                preterito: { "yo": "fui", "t\u00fa": "fuiste", "el/ella": "fue", "nosotros": "fuimos", "vosotros": "fuisteis", "ellos": "fueron" },
                imperfecto: { "yo": "iba", "t\u00fa": "ibas", "el/ella": "iba", "nosotros": "\u00edbamos", "vosotros": "ibais", "ellos": "iban" },
                futuro: { "yo": "ir\u00e9", "t\u00fa": "ir\u00e1s", "el/ella": "ir\u00e1", "nosotros": "iremos", "vosotros": "ir\u00e9is", "ellos": "ir\u00e1n" }
            },
            {
                verb: "tener", meaning: "to have",
                presente: { "yo": "tengo", "t\u00fa": "tienes", "el/ella": "tiene", "nosotros": "tenemos", "vosotros": "ten\u00e9is", "ellos": "tienen" },
                preterito: { "yo": "tuve", "t\u00fa": "tuviste", "el/ella": "tuvo", "nosotros": "tuvimos", "vosotros": "tuvisteis", "ellos": "tuvieron" },
                imperfecto: { "yo": "ten\u00eda", "t\u00fa": "ten\u00edas", "el/ella": "ten\u00eda", "nosotros": "ten\u00edamos", "vosotros": "ten\u00edais", "ellos": "ten\u00edan" },
                futuro: { "yo": "tendr\u00e9", "t\u00fa": "tendr\u00e1s", "el/ella": "tendr\u00e1", "nosotros": "tendremos", "vosotros": "tendr\u00e9is", "ellos": "tendr\u00e1n" }
            },
            {
                verb: "hacer", meaning: "to do / to make",
                presente: { "yo": "hago", "t\u00fa": "haces", "el/ella": "hace", "nosotros": "hacemos", "vosotros": "hac\u00e9is", "ellos": "hacen" },
                preterito: { "yo": "hice", "t\u00fa": "hiciste", "el/ella": "hizo", "nosotros": "hicimos", "vosotros": "hicisteis", "ellos": "hicieron" },
                imperfecto: { "yo": "hac\u00eda", "t\u00fa": "hac\u00edas", "el/ella": "hac\u00eda", "nosotros": "hac\u00edamos", "vosotros": "hac\u00edais", "ellos": "hac\u00edan" },
                futuro: { "yo": "har\u00e9", "t\u00fa": "har\u00e1s", "el/ella": "har\u00e1", "nosotros": "haremos", "vosotros": "har\u00e9is", "ellos": "har\u00e1n" }
            },
            {
                verb: "decir", meaning: "to say / to tell",
                presente: { "yo": "digo", "t\u00fa": "dices", "el/ella": "dice", "nosotros": "decimos", "vosotros": "dec\u00eds", "ellos": "dicen" },
                preterito: { "yo": "dije", "t\u00fa": "dijiste", "el/ella": "dijo", "nosotros": "dijimos", "vosotros": "dijisteis", "ellos": "dijeron" },
                imperfecto: { "yo": "dec\u00eda", "t\u00fa": "dec\u00edas", "el/ella": "dec\u00eda", "nosotros": "dec\u00edamos", "vosotros": "dec\u00edais", "ellos": "dec\u00edan" },
                futuro: { "yo": "dir\u00e9", "t\u00fa": "dir\u00e1s", "el/ella": "dir\u00e1", "nosotros": "diremos", "vosotros": "dir\u00e9is", "ellos": "dir\u00e1n" }
            },
            {
                verb: "poder", meaning: "to be able to / can",
                presente: { "yo": "puedo", "t\u00fa": "puedes", "el/ella": "puede", "nosotros": "podemos", "vosotros": "pod\u00e9is", "ellos": "pueden" },
                preterito: { "yo": "pude", "t\u00fa": "pudiste", "el/ella": "pudo", "nosotros": "pudimos", "vosotros": "pudisteis", "ellos": "pudieron" },
                imperfecto: { "yo": "pod\u00eda", "t\u00fa": "pod\u00edas", "el/ella": "pod\u00eda", "nosotros": "pod\u00edamos", "vosotros": "pod\u00edais", "ellos": "pod\u00edan" },
                futuro: { "yo": "podr\u00e9", "t\u00fa": "podr\u00e1s", "el/ella": "podr\u00e1", "nosotros": "podremos", "vosotros": "podr\u00e9is", "ellos": "podr\u00e1n" }
            },
            {
                verb: "querer", meaning: "to want / to love",
                presente: { "yo": "quiero", "t\u00fa": "quieres", "el/ella": "quiere", "nosotros": "queremos", "vosotros": "quer\u00e9is", "ellos": "quieren" },
                preterito: { "yo": "quise", "t\u00fa": "quisiste", "el/ella": "quiso", "nosotros": "quisimos", "vosotros": "quisisteis", "ellos": "quisieron" },
                imperfecto: { "yo": "quer\u00eda", "t\u00fa": "quer\u00edas", "el/ella": "quer\u00eda", "nosotros": "quer\u00edamos", "vosotros": "quer\u00edais", "ellos": "quer\u00edan" },
                futuro: { "yo": "querr\u00e9", "t\u00fa": "querr\u00e1s", "el/ella": "querr\u00e1", "nosotros": "querremos", "vosotros": "querr\u00e9is", "ellos": "querr\u00e1n" }
            },
            {
                verb: "saber", meaning: "to know (facts)",
                presente: { "yo": "s\u00e9", "t\u00fa": "sabes", "el/ella": "sabe", "nosotros": "sabemos", "vosotros": "sab\u00e9is", "ellos": "saben" },
                preterito: { "yo": "supe", "t\u00fa": "supiste", "el/ella": "supo", "nosotros": "supimos", "vosotros": "supisteis", "ellos": "supieron" },
                imperfecto: { "yo": "sab\u00eda", "t\u00fa": "sab\u00edas", "el/ella": "sab\u00eda", "nosotros": "sab\u00edamos", "vosotros": "sab\u00edais", "ellos": "sab\u00edan" },
                futuro: { "yo": "sabr\u00e9", "t\u00fa": "sabr\u00e1s", "el/ella": "sabr\u00e1", "nosotros": "sabremos", "vosotros": "sabr\u00e9is", "ellos": "sabr\u00e1n" }
            },
            {
                verb: "venir", meaning: "to come",
                presente: { "yo": "vengo", "t\u00fa": "vienes", "el/ella": "viene", "nosotros": "venimos", "vosotros": "ven\u00eds", "ellos": "vienen" },
                preterito: { "yo": "vine", "t\u00fa": "viniste", "el/ella": "vino", "nosotros": "vinimos", "vosotros": "vinisteis", "ellos": "vinieron" },
                imperfecto: { "yo": "ven\u00eda", "t\u00fa": "ven\u00edas", "el/ella": "ven\u00eda", "nosotros": "ven\u00edamos", "vosotros": "ven\u00edais", "ellos": "ven\u00edan" },
                futuro: { "yo": "vendr\u00e9", "t\u00fa": "vendr\u00e1s", "el/ella": "vendr\u00e1", "nosotros": "vendremos", "vosotros": "vendr\u00e9is", "ellos": "vendr\u00e1n" }
            }
        ]
    },
    french: {
        title: "Conjugaisons Fran\u00e7aises",
        titleEn: "French Conjugations",
        groups: [
            {
                name: "Premier groupe (-ER)",
                nameEn: "First group (-ER)",
                ending: "-ER",
                model: "parler (to speak)",
                color: "#e74c3c",
                description: "Le plus grand groupe. La majorit\u00e9 des verbes fran\u00e7ais sont des verbes en -ER.",
                descriptionEn: "The largest group. Most French verbs are -ER verbs."
            },
            {
                name: "Deuxi\u00e8me groupe (-IR)",
                nameEn: "Second group (-IR)",
                ending: "-IR",
                model: "finir (to finish)",
                color: "#3498db",
                description: "Verbes en -IR avec le participe pr\u00e9sent en -issant. Ex: finir \u2192 finissant.",
                descriptionEn: "Verbs ending in -IR with present participle in -issant. Ex: finir \u2192 finissant."
            },
            {
                name: "Troisi\u00e8me groupe (-RE / irregular)",
                nameEn: "Third group (-RE / irregular)",
                ending: "-RE",
                model: "vendre (to sell)",
                color: "#2ecc71",
                description: "Verbes en -RE et verbes irr\u00e9guliers. Le groupe le plus complexe.",
                descriptionEn: "Verbs ending in -RE and irregular verbs. The most complex group."
            }
        ],
        tenses: [
            {
                name: "Pr\u00e9sent",
                nameEn: "Present",
                whenToUse: "Everyday actions, habits, general truths, what's happening now.",
                whenToUseFr: "Actions quotidiennes, habitudes, v\u00e9rit\u00e9s g\u00e9n\u00e9rales.",
                example: { fr: "Je parle fran\u00e7ais tous les jours.", en: "I speak French every day." },
                conjugations: {
                    "-ER (parler)": { "je": "-e", "tu": "-es", "il/elle": "-e", "nous": "-ons", "vous": "-ez", "ils/elles": "-ent" },
                    "-IR (finir)": { "je": "-is", "tu": "-is", "il/elle": "-it", "nous": "-issons", "vous": "-issez", "ils/elles": "-issent" },
                    "-RE (vendre)": { "je": "-s", "tu": "-s", "il/elle": "-", "nous": "-ons", "vous": "-ez", "ils/elles": "-ent" }
                },
                fullExamples: {
                    "-ER": { "je": "parle", "tu": "parles", "il/elle": "parle", "nous": "parlons", "vous": "parlez", "ils/elles": "parlent" },
                    "-IR": { "je": "finis", "tu": "finis", "il/elle": "finit", "nous": "finissons", "vous": "finissez", "ils/elles": "finissent" },
                    "-RE": { "je": "vends", "tu": "vends", "il/elle": "vend", "nous": "vendons", "vous": "vendez", "ils/elles": "vendent" }
                }
            },
            {
                name: "Pass\u00e9 Compos\u00e9",
                nameEn: "Past Tense (Compound Past)",
                whenToUse: "Completed actions in the past. 'I spoke', 'I ate'. Uses avoir or \u00eatre + past participle.",
                whenToUseFr: "Actions compl\u00e8tes dans le pass\u00e9. Utilise avoir ou \u00eatre + participe pass\u00e9.",
                example: { fr: "J'ai parl\u00e9 avec ma m\u00e8re hier.", en: "I spoke with my mother yesterday." },
                conjugations: {
                    "-ER (parler)": { "j'": "ai parl\u00e9", "tu": "as parl\u00e9", "il/elle": "a parl\u00e9", "nous": "avons parl\u00e9", "vous": "avez parl\u00e9", "ils/elles": "ont parl\u00e9" },
                    "-IR (finir)": { "j'": "ai fini", "tu": "as fini", "il/elle": "a fini", "nous": "avons fini", "vous": "avez fini", "ils/elles": "ont fini" },
                    "-RE (vendre)": { "j'": "ai vendu", "tu": "as vendu", "il/elle": "a vendu", "nous": "avons vendu", "vous": "avez vendu", "ils/elles": "ont vendu" }
                },
                fullExamples: {
                    "-ER": { "j'": "ai parl\u00e9", "tu": "as parl\u00e9", "il/elle": "a parl\u00e9", "nous": "avons parl\u00e9", "vous": "avez parl\u00e9", "ils/elles": "ont parl\u00e9" },
                    "-IR": { "j'": "ai fini", "tu": "as fini", "il/elle": "a fini", "nous": "avons fini", "vous": "avez fini", "ils/elles": "ont fini" },
                    "-RE": { "j'": "ai vendu", "tu": "as vendu", "il/elle": "a vendu", "nous": "avons vendu", "vous": "avez vendu", "ils/elles": "ont vendu" }
                },
                note: "Past participles: -ER \u2192 -\u00e9 (parl\u00e9), -IR \u2192 -i (fini), -RE \u2192 -u (vendu). Some verbs use \u00eatre instead of avoir (aller, venir, etc.)."
            },
            {
                name: "Imparfait",
                nameEn: "Imperfect (Ongoing Past)",
                whenToUse: "Habitual or ongoing actions in the past. Descriptions. 'I used to speak', 'I was eating'.",
                whenToUseFr: "Actions habituelles ou continues dans le pass\u00e9. Descriptions.",
                example: { fr: "Quand j'\u00e9tais enfant, je parlais beaucoup.", en: "When I was a child, I used to talk a lot." },
                conjugations: {
                    "-ER (parler)": { "je": "-ais", "tu": "-ais", "il/elle": "-ait", "nous": "-ions", "vous": "-iez", "ils/elles": "-aient" },
                    "-IR (finir)": { "je": "-issais", "tu": "-issais", "il/elle": "-issait", "nous": "-issions", "vous": "-issiez", "ils/elles": "-issaient" },
                    "-RE (vendre)": { "je": "-ais", "tu": "-ais", "il/elle": "-ait", "nous": "-ions", "vous": "-iez", "ils/elles": "-aient" }
                },
                fullExamples: {
                    "-ER": { "je": "parlais", "tu": "parlais", "il/elle": "parlait", "nous": "parlions", "vous": "parliez", "ils/elles": "parlaient" },
                    "-IR": { "je": "finissais", "tu": "finissais", "il/elle": "finissait", "nous": "finissions", "vous": "finissiez", "ils/elles": "finissaient" },
                    "-RE": { "je": "vendais", "tu": "vendais", "il/elle": "vendait", "nous": "vendions", "vous": "vendiez", "ils/elles": "vendaient" }
                },
                note: "Take the nous form of the present (parl-ons, finiss-ons, vend-ons), drop -ons, and add imperfect endings."
            },
            {
                name: "Futur Simple",
                nameEn: "Simple Future",
                whenToUse: "Actions that will happen. Predictions, promises. Add endings to the infinitive!",
                whenToUseFr: "Actions futures, pr\u00e9dictions, promesses. Ajoutez les terminaisons \u00e0 l'infinitif!",
                example: { fr: "Demain je parlerai avec le professeur.", en: "Tomorrow I will speak with the professor." },
                conjugations: {
                    "-ER (parler)": { "je": "-ai", "tu": "-as", "il/elle": "-a", "nous": "-ons", "vous": "-ez", "ils/elles": "-ont" },
                    "-IR (finir)": { "je": "-ai", "tu": "-as", "il/elle": "-a", "nous": "-ons", "vous": "-ez", "ils/elles": "-ont" },
                    "-RE (vendre)": { "je": "-ai", "tu": "-as", "il/elle": "-a", "nous": "-ons", "vous": "-ez", "ils/elles": "-ont" }
                },
                fullExamples: {
                    "-ER": { "je": "parlerai", "tu": "parleras", "il/elle": "parlera", "nous": "parlerons", "vous": "parlerez", "ils/elles": "parleront" },
                    "-IR": { "je": "finirai", "tu": "finiras", "il/elle": "finira", "nous": "finirons", "vous": "finirez", "ils/elles": "finiront" },
                    "-RE": { "je": "vendrai", "tu": "vendras", "il/elle": "vendra", "nous": "vendrons", "vous": "vendrez", "ils/elles": "vendront" }
                },
                note: "For -RE verbs, drop the final -e before adding endings (vendr-ai). Same endings for all groups!"
            },
            {
                name: "Conditionnel",
                nameEn: "Conditional",
                whenToUse: "Hypothetical situations, polite requests, what 'would' happen.",
                whenToUseFr: "Situations hypoth\u00e9tiques, demandes polies.",
                example: { fr: "Je parlerais avec lui, mais il n'est pas l\u00e0.", en: "I would speak with him, but he's not here." },
                conjugations: {
                    "-ER (parler)": { "je": "-ais", "tu": "-ais", "il/elle": "-ait", "nous": "-ions", "vous": "-iez", "ils/elles": "-aient" },
                    "-IR (finir)": { "je": "-ais", "tu": "-ais", "il/elle": "-ait", "nous": "-ions", "vous": "-iez", "ils/elles": "-aient" },
                    "-RE (vendre)": { "je": "-ais", "tu": "-ais", "il/elle": "-ait", "nous": "-ions", "vous": "-iez", "ils/elles": "-aient" }
                },
                fullExamples: {
                    "-ER": { "je": "parlerais", "tu": "parlerais", "il/elle": "parlerait", "nous": "parlerions", "vous": "parleriez", "ils/elles": "parleraient" },
                    "-IR": { "je": "finirais", "tu": "finirais", "il/elle": "finirait", "nous": "finirions", "vous": "finiriez", "ils/elles": "finiraient" },
                    "-RE": { "je": "vendrais", "tu": "vendrais", "il/elle": "vendrait", "nous": "vendrions", "vous": "vendriez", "ils/elles": "vendraient" }
                },
                note: "Future stem + imperfect endings = conditional. The endings are the same as the imperfect!"
            },
            {
                name: "Subjonctif Pr\u00e9sent",
                nameEn: "Present Subjunctive",
                whenToUse: "After 'que' + wishes, emotions, doubt. 'I want that...', 'I'm afraid that...'.",
                whenToUseFr: "Apr\u00e8s 'que' + souhaits, \u00e9motions, doute.",
                example: { fr: "Je veux que tu parles fran\u00e7ais.", en: "I want you to speak French." },
                conjugations: {
                    "-ER (parler)": { "je": "-e", "tu": "-es", "il/elle": "-e", "nous": "-ions", "vous": "-iez", "ils/elles": "-ent" },
                    "-IR (finir)": { "je": "-isse", "tu": "-isses", "il/elle": "-isse", "nous": "-issions", "vous": "-issiez", "ils/elles": "-issent" },
                    "-RE (vendre)": { "je": "-e", "tu": "-es", "il/elle": "-e", "nous": "-ions", "vous": "-iez", "ils/elles": "-ent" }
                },
                fullExamples: {
                    "-ER": { "je": "parle", "tu": "parles", "il/elle": "parle", "nous": "parlions", "vous": "parliez", "ils/elles": "parlent" },
                    "-IR": { "je": "finisse", "tu": "finisses", "il/elle": "finisse", "nous": "finissions", "vous": "finissiez", "ils/elles": "finissent" },
                    "-RE": { "je": "vende", "tu": "vendes", "il/elle": "vende", "nous": "vendions", "vous": "vendiez", "ils/elles": "vendent" }
                },
                note: "Take the ils/elles form of the present, drop -ent, add subjunctive endings. Nous/vous forms look like the imperfect."
            }
        ],
        irregulars: [
            {
                verb: "\u00eatre", meaning: "to be",
                presente: { "je": "suis", "tu": "es", "il/elle": "est", "nous": "sommes", "vous": "\u00eates", "ils/elles": "sont" },
                passeCompose: { "j'": "ai \u00e9t\u00e9", "tu": "as \u00e9t\u00e9", "il/elle": "a \u00e9t\u00e9", "nous": "avons \u00e9t\u00e9", "vous": "avez \u00e9t\u00e9", "ils/elles": "ont \u00e9t\u00e9" },
                imparfait: { "j'": "\u00e9tais", "tu": "\u00e9tais", "il/elle": "\u00e9tait", "nous": "\u00e9tions", "vous": "\u00e9tiez", "ils/elles": "\u00e9taient" },
                futur: { "je": "serai", "tu": "seras", "il/elle": "sera", "nous": "serons", "vous": "serez", "ils/elles": "seront" }
            },
            {
                verb: "avoir", meaning: "to have",
                presente: { "j'": "ai", "tu": "as", "il/elle": "a", "nous": "avons", "vous": "avez", "ils/elles": "ont" },
                passeCompose: { "j'": "ai eu", "tu": "as eu", "il/elle": "a eu", "nous": "avons eu", "vous": "avez eu", "ils/elles": "ont eu" },
                imparfait: { "j'": "avais", "tu": "avais", "il/elle": "avait", "nous": "avions", "vous": "aviez", "ils/elles": "avaient" },
                futur: { "j'": "aurai", "tu": "auras", "il/elle": "aura", "nous": "aurons", "vous": "aurez", "ils/elles": "auront" }
            },
            {
                verb: "aller", meaning: "to go",
                presente: { "je": "vais", "tu": "vas", "il/elle": "va", "nous": "allons", "vous": "allez", "ils/elles": "vont" },
                passeCompose: { "je": "suis all\u00e9(e)", "tu": "es all\u00e9(e)", "il/elle": "est all\u00e9(e)", "nous": "sommes all\u00e9(e)s", "vous": "\u00eates all\u00e9(e)(s)", "ils/elles": "sont all\u00e9(e)s" },
                imparfait: { "j'": "allais", "tu": "allais", "il/elle": "allait", "nous": "allions", "vous": "alliez", "ils/elles": "allaient" },
                futur: { "j'": "irai", "tu": "iras", "il/elle": "ira", "nous": "irons", "vous": "irez", "ils/elles": "iront" }
            },
            {
                verb: "faire", meaning: "to do / to make",
                presente: { "je": "fais", "tu": "fais", "il/elle": "fait", "nous": "faisons", "vous": "faites", "ils/elles": "font" },
                passeCompose: { "j'": "ai fait", "tu": "as fait", "il/elle": "a fait", "nous": "avons fait", "vous": "avez fait", "ils/elles": "ont fait" },
                imparfait: { "je": "faisais", "tu": "faisais", "il/elle": "faisait", "nous": "faisions", "vous": "faisiez", "ils/elles": "faisaient" },
                futur: { "je": "ferai", "tu": "feras", "il/elle": "fera", "nous": "ferons", "vous": "ferez", "ils/elles": "feront" }
            },
            {
                verb: "pouvoir", meaning: "to be able to / can",
                presente: { "je": "peux", "tu": "peux", "il/elle": "peut", "nous": "pouvons", "vous": "pouvez", "ils/elles": "peuvent" },
                passeCompose: { "j'": "ai pu", "tu": "as pu", "il/elle": "a pu", "nous": "avons pu", "vous": "avez pu", "ils/elles": "ont pu" },
                imparfait: { "je": "pouvais", "tu": "pouvais", "il/elle": "pouvait", "nous": "pouvions", "vous": "pouviez", "ils/elles": "pouvaient" },
                futur: { "je": "pourrai", "tu": "pourras", "il/elle": "pourra", "nous": "pourrons", "vous": "pourrez", "ils/elles": "pourront" }
            },
            {
                verb: "vouloir", meaning: "to want",
                presente: { "je": "veux", "tu": "veux", "il/elle": "veut", "nous": "voulons", "vous": "voulez", "ils/elles": "veulent" },
                passeCompose: { "j'": "ai voulu", "tu": "as voulu", "il/elle": "a voulu", "nous": "avons voulu", "vous": "avez voulu", "ils/elles": "ont voulu" },
                imparfait: { "je": "voulais", "tu": "voulais", "il/elle": "voulait", "nous": "voulions", "vous": "vouliez", "ils/elles": "voulaient" },
                futur: { "je": "voudrai", "tu": "voudras", "il/elle": "voudra", "nous": "voudrons", "vous": "voudrez", "ils/elles": "voudront" }
            },
            {
                verb: "savoir", meaning: "to know (facts)",
                presente: { "je": "sais", "tu": "sais", "il/elle": "sait", "nous": "savons", "vous": "savez", "ils/elles": "savent" },
                passeCompose: { "j'": "ai su", "tu": "as su", "il/elle": "a su", "nous": "avons su", "vous": "avez su", "ils/elles": "ont su" },
                imparfait: { "je": "savais", "tu": "savais", "il/elle": "savait", "nous": "savions", "vous": "saviez", "ils/elles": "savaient" },
                futur: { "je": "saurai", "tu": "sauras", "il/elle": "saura", "nous": "saurons", "vous": "saurez", "ils/elles": "sauront" }
            },
            {
                verb: "venir", meaning: "to come",
                presente: { "je": "viens", "tu": "viens", "il/elle": "vient", "nous": "venons", "vous": "venez", "ils/elles": "viennent" },
                passeCompose: { "je": "suis venu(e)", "tu": "es venu(e)", "il/elle": "est venu(e)", "nous": "sommes venu(e)s", "vous": "\u00eates venu(e)(s)", "ils/elles": "sont venu(e)s" },
                imparfait: { "je": "venais", "tu": "venais", "il/elle": "venait", "nous": "venions", "vous": "veniez", "ils/elles": "venaient" },
                futur: { "je": "viendrai", "tu": "viendras", "il/elle": "viendra", "nous": "viendrons", "vous": "viendrez", "ils/elles": "viendront" }
            },
            {
                verb: "prendre", meaning: "to take",
                presente: { "je": "prends", "tu": "prends", "il/elle": "prend", "nous": "prenons", "vous": "prenez", "ils/elles": "prennent" },
                passeCompose: { "j'": "ai pris", "tu": "as pris", "il/elle": "a pris", "nous": "avons pris", "vous": "avez pris", "ils/elles": "ont pris" },
                imparfait: { "je": "prenais", "tu": "prenais", "il/elle": "prenait", "nous": "prenions", "vous": "preniez", "ils/elles": "prenaient" },
                futur: { "je": "prendrai", "tu": "prendras", "il/elle": "prendra", "nous": "prendrons", "vous": "prendrez", "ils/elles": "prendront" }
            },
            {
                verb: "devoir", meaning: "must / to have to",
                presente: { "je": "dois", "tu": "dois", "il/elle": "doit", "nous": "devons", "vous": "devez", "ils/elles": "doivent" },
                passeCompose: { "j'": "ai d\u00fb", "tu": "as d\u00fb", "il/elle": "a d\u00fb", "nous": "avons d\u00fb", "vous": "avez d\u00fb", "ils/elles": "ont d\u00fb" },
                imparfait: { "je": "devais", "tu": "devais", "il/elle": "devait", "nous": "devions", "vous": "deviez", "ils/elles": "devaient" },
                futur: { "je": "devrai", "tu": "devras", "il/elle": "devra", "nous": "devrons", "vous": "devrez", "ils/elles": "devront" }
            }
        ]
    }
};
