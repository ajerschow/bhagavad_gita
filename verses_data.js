// decide whether should make it into json format (could not hurt)
// read through 10.21 - 10.38 for among the ... I am 

// add uvaacha
// 2-26
// 2-38
// 2-40: no harm if not achieved
// 2-42: those only interested in rituals
// 2-43: more rituals, less knowledge
// 2-48: equanimity in success and failure
// 2-49: wisdom from renunciation of fruit
// 2-50: steady mind from knowledge
// 2-51: wise not affected by good/bad, complete liberation
// 2-61: senses as enemies
// 2-69: wise not disturbed by desires
// Om sri paramatmane namah


const versesData = [
{
  "type": "Invocation (Mangalacharan)",
  "verseIndex": "Common Invocation",
  "fullTransliteration": "Oṃ Śrī Paramātmane Namaḥ ||",
  "fullTranslation": "Om, Salutations to the Glorious Supreme Self.",
  "words": [
    {
      "text": "ॐ",
      "transliteration": "oṃ",
      "translation": "Om",
      "hindi": "ॐ",
      "etym": "The Pranava (A-U-M).",
      "note": "The primordial sound representing the Absolute."
    },
    {
      "text": "श्री",
      "transliteration": "śrī",
      "translation": "Glorious / Holy",
      "hindi": "श्री (आदरणीय)",
      "etym": "Noun/Honorific prefix.",
      "note": "Denotes auspiciousness, radiance, or reverence."
    },
    {
      "text": "परमात्मने",
      "transliteration": "paramātmane",
      "translation": "To the Supreme Self",
      "hindi": "परमात्मा को",
      "etym": "parama (supreme) + ātman (self). Grammar: Dative Singular.",
      "note": "The dative case ending ('-e') is used because 'Namaha' requires the object of salutation to be in the dative ('to' someone)."
    },
    {
      "text": "नमः",
      "transliteration": "namaḥ",
      "translation": "Salutations / Homage",
      "hindi": "नमन / नमस्कार",
      "etym": "Root: nam (to bow/bend).",
      "note": "Implies surrender or bowing down."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Title / Invocation",
  "verseIndex": "Title",
  "fullTransliteration": "Atha Śrīmadbhagavadgītā",
  "fullTranslation": "Now begins the glorious Bhagavad Gita.",
  "words": [
    {
      "text": "अथ",
      "transliteration": "atha",
      "translation": "Now / Here Begins",
      "hindi": "अब (आरंभ)",
      "etym": "Indeclinable Particle.",
      "note": "An auspicious word (Mangala) indicating the start of a sacred text."
    },
    {
      "text": "श्रीमद्भगवद्गीता",
      "transliteration": "śrīmadbhagavadgītā",
      "translation": "The Glorious Song of God",
      "hindi": "श्रीमद्भगवद्गीता",
      "etym": "Compound: śrīmat (glorious) + bhagavat (divine/God) + gītā (song).",
      "note": "The full title of the scripture."
    }
  ]
},
{
  "type": "Shloka",
  "verseIndex": "BG 2.20",
  "fullTransliteration": "Na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ | Ajo nityaḥ śāśvato'yaṃ purāṇo na hanyate hanyamāne śarīre ||",
  "fullTranslation": "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing and primeval. It is not slain when the body is slain.",
  "words": [
    {
      "text": "न",
      "transliteration": "na",
      "translation": "Not",
      "hindi": "नहीं",
      "etym": "Negative particle.",
      "note": "-"
    },
    {
      "text": "जायते",
      "transliteration": "jāyate",
      "translation": "Is Born",
      "hindi": "जन्म लेता है",
      "etym": "Root: jan (to be born). Grammar: Present Indicative (Lat), 3rd Person Singular (Atmanepada).",
      "note": "Denies birth."
    },
    {
      "text": "म्रियते",
      "transliteration": "mriyate",
      "translation": "Dies",
      "hindi": "मरता है",
      "etym": "Root: mṛ (to die). Grammar: Present Indicative, 3rd Person Singular.",
      "note": "Denies death."
    },
    {
      "text": "वा",
      "transliteration": "vā",
      "translation": "Or",
      "hindi": "या",
      "etym": "Conjunction.",
      "note": "-"
    },
    {
      "text": "कदाचित्",
      "transliteration": "kadācit",
      "translation": "At Any Time",
      "hindi": "कभी भी",
      "etym": "kadā (when) + cit (indefinite particle).",
      "note": "-"
    },
    {
      "text": "|",
      "transliteration": "|"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "नायं",
      "transliteration": "nāyaṃ",
      "translation": "Not This (Soul)",
      "hindi": "यह (आत्मा) नहीं",
      "etym": "Sandhi: na (not) + ayam (this).",
      "note": "-"
    },
    {
      "text": "भूत्वा",
      "transliteration": "bhūtvā",
      "translation": "Having Come into Being",
      "hindi": "होकर",
      "etym": "Root: bhū. Grammar: Gerund (Ktva Pratyaya).",
      "note": "It has no beginning."
    },
    {
      "text": "भविता",
      "transliteration": "bhavitā",
      "translation": "Will Be",
      "hindi": "बनेगा / होगा",
      "etym": "Root: bhū. Grammar: Periphrastic Future (Lut), 3rd Person Singular.",
      "note": "-"
    },
    {
      "text": "वा",
      "transliteration": "vā",
      "translation": "Or",
      "hindi": "या",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "न",
      "transliteration": "na",
      "translation": "Not",
      "hindi": "नहीं",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "भूयः",
      "transliteration": "bhūyaḥ",
      "translation": "Again",
      "hindi": "फिर",
      "etym": "Adverb.",
      "note": "-"
    },
    {
      "text": "|",
      "transliteration": "|"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "अजो",
      "transliteration": "ajo",
      "translation": "Unborn",
      "hindi": "अजन्मा",
      "etym": "Sandhi: ajaḥ. a (not) + ja (born).",
      "note": "-"
    },
    {
      "text": "नित्यः",
      "transliteration": "nityaḥ",
      "translation": "Eternal",
      "hindi": "नित्य (शाश्वत)",
      "etym": "Adjective.",
      "note": "Existing at all times."
    },
    {
      "text": "शाश्वतोऽयं",
      "transliteration": "śāśvato'yaṃ",
      "translation": "Ever-Existing This",
      "hindi": "यह सनातन है",
      "etym": "Sandhi: śāśvataḥ + ayam.",
      "note": "-"
    },
    {
      "text": "पुराणो",
      "transliteration": "purāṇo",
      "translation": "Primeval/Ancient",
      "hindi": "पुरातन",
      "etym": "Sandhi: purāṇaḥ.",
      "note": "Although ancient, it is ever new."
    },
    {
      "text": "न",
      "transliteration": "na",
      "translation": "Not",
      "hindi": "नहीं",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "हन्यते",
      "transliteration": "hanyate",
      "translation": "Is Killed",
      "hindi": "मारा जाता है",
      "etym": "Root: han (to kill). Grammar: Passive Present, 3rd Person Singular.",
      "note": "-"
    },
    {
      "text": "हन्यमाने",
      "transliteration": "hanyamāne",
      "translation": "Being Killed",
      "hindi": "मारे जाने पर",
      "etym": "Root: han. Grammar: Passive Present Participle, Locative Singular.",
      "note": "Locative Absolute construction."
    },
    {
      "text": "शरीरे",
      "transliteration": "śarīre",
      "translation": "In the Body",
      "hindi": "शरीर में",
      "etym": "Noun: śarīra. Grammar: Locative Singular.",
      "note": "The body dies, not the soul."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Shloka",
  "verseIndex": "BG 2.47",
  "fullTransliteration": "Karmaṇyevādhikāraste mā phaleṣu kadācana | Mā karmaphalaheturbhūr mā te saṅgo'stvakarmani ||",
  "fullTranslation": "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor be attached to inaction.",
  "words": [
    {
      "text": "कर्मण्येवाधिकारस्ते",
      "transliteration": "karmaṇy-evādhikāras-te",
      "translation": "Your Right is Only in Action",
      "hindi": "कर्म में ही तुम्हारा अधिकार है",
      "etym": "Sandhi: karmaṇi (in action/duty) + eva (only) + adhikāraḥ (right/authority) + te (your). 'i' becomes 'y' (Yan Sandhi). Visarga 'ḥ' becomes 's'.",
      "note": "Locative case (karmaṇi) indicates the sphere of influence."
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Not",
      "hindi": "नहीं",
      "etym": "Prohibitive particle.",
      "note": "Used to forbid an action or expectation."
    },
    {
      "text": "फलेषु",
      "transliteration": "phaleṣu",
      "translation": "In the Fruits/Results",
      "hindi": "फलों में",
      "etym": "Noun: phala. Grammar: Locative Plural Neuter.",
      "note": "Refers to the outcomes (success/failure) of the work."
    },
    {
      "text": "कदाचन",
      "transliteration": "kadācana",
      "translation": "At Any Time/Ever",
      "hindi": "कभी भी",
      "etym": "Indeclinable: kadā (when) + cana (indefinite suffix).",
      "note": "Reinforces the permanence of this law."
    },
    {
      "text": "|",
      "transliteration": "|"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Do Not",
      "hindi": "मत",
      "etym": "Prohibitive particle.",
      "note": "-"
    },
    {
      "text": "कर्मफलहेतुर्भूर्",
      "transliteration": "karmaphala-hetur-bhūr",
      "translation": "Be the Cause of Results",
      "hindi": "कर्मफलों का हेतु (कारण) बनो",
      "etym": "Sandhi: karma-phala (fruit of action) + hetuḥ (cause) + bhūḥ (be). Visarga becomes 'r' (Rutva Sandhi). Grammar: bhūḥ is Aorist (Lung) 2nd Person Singular used prohibitory.",
      "note": "Meaning: Do not be motivated solely by the result, nor think 'I created this result'."
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Not",
      "hindi": "नहीं",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "ते",
      "transliteration": "te",
      "translation": "Your",
      "hindi": "तुम्हारी",
      "etym": "Pronoun: yuṣmad. Grammar: Genitive Singular.",
      "note": "-"
    },
    {
      "text": "सङ्गोऽस्त्वकर्मणि",
      "transliteration": "saṅgo'stv-akarmaṇi",
      "translation": "Attachment to Inaction",
      "hindi": "अकर्मण्यता (काम न करने) में आसक्ति हो",
      "etym": "Sandhi: saṅgaḥ (attachment) + astu (let there be) + akarmaṇi (in inaction). Visarga -> 'o' (Utva). 'u' -> 'v' (Yan). Grammar: saṅgaḥ (Nom Sg), akarmaṇi (Loc Sg).",
      "note": "Warning against laziness or renouncing duty out of fear of results."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Shloka",
  "verseIndex": "BG 18.47",
  "fullTransliteration": "Śreyān svadharmo viguṇaḥ paradharmāt svanuṣṭhitāt | Svabhāvniyataṃ karma kurvan nāpnoti kilbiṣam ||",
  "fullTranslation": "It is better to engage in one's own occupation, even though one may perform it imperfectly, than to accept another's occupation and perform it perfectly. Duties prescribed according to one's nature are never affected by sinful reactions.",
  "words": [
    {
      "text": "श्रेयान्",
      "transliteration": "śreyān",
      "translation": "Better",
      "hindi": "श्रेष्ठ",
      "etym": "Comparative Adjective.",
      "note": "-"
    },
    {
      "text": "स्वधर्मो",
      "transliteration": "svadharmo",
      "translation": "Own Duty",
      "hindi": "अपना धर्म",
      "etym": "Sandhi: svadharmaḥ.",
      "note": "Duty aligned with one's nature (Varna)."
    },
    {
      "text": "विगुणः",
      "transliteration": "viguṇaḥ",
      "translation": "Imperfect/Faulty",
      "hindi": "गुणरहित (दोषयुक्त)",
      "etym": "vi (without) + guṇa (quality).",
      "note": "-"
    },
    {
      "text": "परधर्मात्",
      "transliteration": "paradharmāt",
      "translation": "Than Another's Duty",
      "hindi": "दूसरे के धर्म से",
      "etym": "Ablative Singular (Comparison).",
      "note": "-"
    },
    {
      "text": "स्वनुष्ठितात्",
      "transliteration": "svanuṣṭhitāt",
      "translation": "Perfectly Done",
      "hindi": "अच्छी तरह किए हुए",
      "etym": "su (good) + anuṣṭhitāt (performed).",
      "note": "-"
    },
    {
      "text": "|",
      "transliteration": "|"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "स्वभावनियतं",
      "transliteration": "svabhāva-niyataṃ",
      "translation": "Ordained by Nature",
      "hindi": "स्वभाव से नियत",
      "etym": "svabhāva (own nature) + niyatam (controlled/prescribed).",
      "note": "-"
    },
    {
      "text": "कर्म",
      "transliteration": "karma",
      "translation": "Action/Work",
      "hindi": "कर्म",
      "etym": "Accusative Singular.",
      "note": "-"
    },
    {
      "text": "कुर्वन्",
      "transliteration": "kurvan",
      "translation": "Doing/Performing",
      "hindi": "करते हुए",
      "etym": "Present Participle.",
      "note": "-"
    },
    {
      "text": "नाप्नोति",
      "transliteration": "nāpnoti",
      "translation": "Does Not Incur",
      "hindi": "प्राप्त नहीं करता",
      "etym": "na + āpnoti (gets).",
      "note": "-"
    },
    {
      "text": "किल्बिषम्",
      "transliteration": "kilbiṣam",
      "translation": "Sin",
      "hindi": "पाप",
      "etym": "Accusative Singular.",
      "note": "Bad karma."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
},
{
  "type": "Shloka",
  "verseIndex": "BG 18.66",
  "fullTransliteration": "Sarvadharmān parityajya māmekaṃ śaraṇaṃ vraja | Ahaṃ tvā sarvapāpebhyo mokṣayiṣyāmi mā śucaḥ ||",
  "fullTranslation": "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
  "words": [
    {
      "text": "सर्वधर्मान्",
      "transliteration": "sarva-dharmān",
      "translation": "All Duties/Religions",
      "hindi": "सभी धर्मों को",
      "etym": "Accusative Plural.",
      "note": "Refers to social, ritual, and ethical obligations."
    },
    {
      "text": "परित्यज्य",
      "transliteration": "parityajya",
      "translation": "Abandoning Completely",
      "hindi": "परित्याग करके",
      "etym": "pari + tyaj. Gerund.",
      "note": "-"
    },
    {
      "text": "मामेकं",
      "transliteration": "mām-ekam",
      "translation": "Me Alone",
      "hindi": "मुझ एक की",
      "etym": "mām (Me - Acc) + ekam (One/Alone).",
      "note": "-"
    },
    {
      "text": "शरणं",
      "transliteration": "śaraṇaṃ",
      "translation": "Shelter/Surrender",
      "hindi": "शरण",
      "etym": "Accusative Singular.",
      "note": "-"
    },
    {
      "text": "व्रज",
      "transliteration": "vraja",
      "translation": "Go/Take",
      "hindi": "जाओ (लो)",
      "etym": "Root: vraj. Imperative.",
      "note": "-"
    },
    {
      "text": "|",
      "transliteration": "|"
    },
    {
      "text": "<br>",
      "transliteration": "<br>"
    },
    {
      "text": "अहं",
      "transliteration": "ahaṃ",
      "translation": "I",
      "hindi": "मैं",
      "etym": "-",
      "note": "-"
    },
    {
      "text": "त्वा",
      "transliteration": "tvā",
      "translation": "You",
      "hindi": "तुमको",
      "etym": "Accusative Singular.",
      "note": "-"
    },
    {
      "text": "सर्वपापेभ्यो",
      "transliteration": "sarva-pāpebhyo",
      "translation": "From All Sins",
      "hindi": "सभी पापों से",
      "etym": "Ablative Plural.",
      "note": "-"
    },
    {
      "text": "मोक्षयिष्यामि",
      "transliteration": "mokṣayiṣyāmi",
      "translation": "I Shall Liberate",
      "hindi": "मुक्त कर दूँगा",
      "etym": "Root: mokṣ. Future Tense (Lrt), 1st Person Singular.",
      "note": "-"
    },
    {
      "text": "मा",
      "transliteration": "mā",
      "translation": "Do Not",
      "hindi": "मत",
      "etym": "Prohibitive.",
      "note": "-"
    },
    {
      "text": "शुचः",
      "transliteration": "śucaḥ",
      "translation": "Grieve/Worry",
      "hindi": "शोक करो",
      "etym": "Root: śuc. Aorist (Lung) used as Imperative.",
      "note": "Final assurance: 'Don't worry'."
    },
    {
      "text": "||",
      "transliteration": "||"
    }
  ]
}
]