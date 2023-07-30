// define the time limit
let TIME_LIMIT = [15, 30, 60, 120, 180];
let diff = ["Easy", "Medium", "Hard"];

// define quotes to be used
let quotes_array = [
  "Push yourself, because no one else is going to do it for you.",
  "Failure is the condiment that gives success its flavor.",
  "Wake up with determination. Go to bed with satisfaction.",
  "It's going to be hard, but hard does not mean impossible.",
  "Learning never exhausts the mind.",
  "The only way to do great work is to love what you do.",
];

// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");
let end = document.querySelector(".end");
let diff_text = document.querySelector(".diff_text");

let c = 0;
let d = 0;
let timeLeft = TIME_LIMIT[c % 5];
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;
let difficult = diff[d % 3];
let running = 0;
const easy = [
  "Where",
  "is",
  "the",
  "Life",
  "we",
  "have",
  "lost",
  "in",
  "living?",
  "wisdom",
  "I",
  "was",
  "thrown",
  "out",
  "of",
  "college",
  "for",
  "cheating",
  "on",
  "exam;",
  "looked",
  "into",
  "soul",
  "boy",
  "sitting",
  "next",
  "to",
  "me.",
  "If",
  "you",
  "accept",
  "others,",
  "negative",
  "ones,",
  "then",
  "never",
  "will",
  "change",
  "outcome.",
  "The",
  "calmed",
  "say",
  "that",
  "what",
  "best;",
  "second,",
  "one",
  "should",
  "right,",
  "not",
  "third,",
  "what's",
  "pleasing,",
  "fourth,",
  "true,",
  "false.",
  "Should",
  "a",
  "person",
  "do",
  "good,",
  "let",
  "him",
  "it",
  "again",
  "and",
  "again.",
  "Let",
  "find",
  "pleasure",
  "therein,",
  "blissful",
  "good.",
  "Radiate",
  "love",
  "towards",
  "entire",
  "world",
  "—",
  "above,",
  "below,",
  "across",
  "without",
  "ill",
  "will,",
  "enmity.",
  "Character",
  "like",
  "tree",
  "reputation",
  "shadow.",
  "shadow",
  "think",
  "it;",
  "real",
  "thing.",
  "As",
  "our",
  "must",
  "forget",
  "highest",
  "utter",
  "words,",
  "but",
  "live",
  "by",
  "them.",
  "had",
  "no",
  "winter,",
  "spring",
  "would",
  "be",
  "so",
  "pleasant;",
  "if",
  "did",
  "sometimes",
  "taste",
  "adversity,",
  "welcome.",
  "You",
  "are",
  "given",
  "wish",
  "also",
  "being",
  "power",
  "make",
  "come",
  "true.",
  "may",
  "work",
  "it,",
  "however.",
  "become",
  "good",
  "trying",
  "finding",
  "goodness",
  "already",
  "within",
  "you.",
  "don't",
  "turn",
  "greeting",
  "cards",
  "advice,",
  "they",
  "fine",
  "reflection",
  "general",
  "drift",
  "culture.",
  "am",
  "falling",
  "star",
  "who",
  "has",
  "finally",
  "found",
  "her",
  "place",
  "another",
  "lovely",
  "where",
  "sparkle",
  "heavens",
  "forever.",
  "In",
  "romance,",
  "feel",
  "need",
  "zoom",
  "expound",
  "foibles",
  "intimate",
  "detail;",
  "tend",
  "opposite,",
  "avoiding",
  "through",
  "fear,",
  "lethargy",
  "or",
  "both.",
  "All",
  "difficult",
  "things",
  "their",
  "origin",
  "which",
  "easy,",
  "great",
  "small.",
  "A",
  "lot",
  "times",
  "people",
  "look",
  "at",
  "side",
  "can't",
  "do.",
  "always",
  "positive",
  "can",
  "single",
  "man",
  "plant",
  "himself",
  "his",
  "instincts,",
  "there",
  "abide,",
  "huge",
  "round",
  "him.",
  "makes",
  "success",
  "living",
  "see",
  "goal",
  "steadily",
  "aims",
  "unswervingly.",
  "That",
  "dedication.",
  "Back",
  "Base",
  "Behaviour",
  "Belief",
  "Birth",
  "Answer",
  "Approval",
  "Bread",
  "Breath",
  "Brother",
  "Building",
  "Burn",
  "Business",
  "Butter",
  "Current",
  "Damage",
  "Danger",
  "Daughter",
  "Day",
  "Death",
  "Decision",
  "Detail",
  "Development",
  "Direction",
  "Comparison",
  "Competition",
  "Connection",
  "Cook",
  "Country",
  "Cover",
  "Credit",
  "Cry",
  "Care",
  "Cause",
  "Chance",
  "Change",
  "Cloth",
  "Colour",
  "Comfort",
  "Company",
  "Art",
  "Attack",
  "Attention",
  "Blood",
  "Blow",
  "Body",
  "Account",
  "Air",
  "Amount",
  "Animal",
];

const medium = [
  "especially",
  "expectations",
  "knowledge?",
  "knowledge",
  "information?",
  "metaphysics",
  "well-spoken",
  "unrighteous;",
  "displeasing;",
  "accumulation",
  "boundless",
  "unhindered,",
  "express",
  "gratitude,",
  "appreciation",
  "prosperity",
  "constellation,",
  "partner's",
  "friendship,",
  "indomitably",
  "absence",
  "accommodate",
  "accommodation",
  "achieve",
  "across",
  "aggressive",
  "apparently",
  "appearance",
  "argument",
  "assassination",
  "basically",
  "beginning",
  "believe",
  "business",
  "calendar",
  "Caribbean",
  "category",
  "colleague",
  "coming",
  "committee",
  "completely",
  "conscience",
  "conscious",
  "copyright",
  "curiosity",
  "definitely",
  "disappear",
  "disappoint",
  "ecstasy",
  "embarrass",
  "environment",
  "existence",
  "familiar",
  "finally",
  "fluorescent",
  "foreign",
  "forty",
  "forward",
  "friend",
  "further",
  "glamorous",
  "government",
  "grammar",
  "gauge",
  "grateful",
  "guard",
  "happened",
  "harass",
  "harassment",
  "honorary",
  "humorous",
  "immediately",
  "incidentallyindependent",
  "interrupt",
  "irresistible",
  "lightning",
  "medicine",
  "millennium",
  "millennia",
  "misspell",
  "necessary",
  "noticeable",
  "occasion",
  "occurred",
  "occurring",
  "occurrence",
  "parallel",
  "preferred",
  "preferring",
  "privilege",
  "pronunciation",
  "publicly",
  "really",
  "receive",
  "referred",
  "referring",
  "religious",
  "remember",
  "resistance",
  "sense",
  "separate",
  "successful",
  "surprise",
  "tendency",
  "tongue",
  "truly",
  "unforeseen",
  "unfortunately",
  "until",
  "vicious",
  "weird",
  "wherever",
  "weather",
  "whether",
  "which",
];

const hard = [
  "Abnegation",
  "Aggrandize",
  "Alacrity",
  "Anachronistic",
  "Archetypal",
  "Ascetic",
  "Beguile",
  "Blandishment",
  "Cajole",
  "Callous",
  "Camaraderie",
  "Circumlocution",
  "Clamour",
  "Cognizant",
  "Construe",
  "Convivial",
  "Demagogue",
  "Denigrate",
  "Didactic",
  "Disparate",
  "Eclectic",
  "Egregious",
  "Embezzlement",
  "Enervate",
  "Ephemeral",
  "Equanimity",
  "Fatuous",
  "Gratuitous",
  "Iconoclast",
  "Idiosyncratic",
  "Incumbent",
  "Inveterate",
  "Libertarian",
  "Licentious",
  "Largess",
  "Multifarious",
  "Obdurate",
  "Ostracism",
  "Pejorative",
  "Pertinacious",
  "Phlegmatic",
  "Promulgate",
  "Quotidian",
  "Recalcitrant",
  "Sanctimonious",
  "Solipsism",
  "Travesty",
  "Ubiquitous",
  "Vicissitude",
  "Vociferous",
  "Abject",
  "Abscond",
  "Bereft",
  "Capitulate",
  "Umbrage",
  "Emollient",
  "Dirge",
  "Dispel",
  "Epistolary",
  "Epistolary",
  "Exacerbate",
  "Forbearance",
  "Gourmand",
  "Heterogeneous",
  "Impecunious",
  "Pellucid",
  "Philanthropic",
  "Protean",
  "Spurious",
  "Milieu",
  "Smaragdine",
  "Soubrette",
  "Albumen",
  "Eudaemonic",
  "Chiaroscurist",
  "Autochthonous",
  "Insouciant",
  "Staphylococci",
  "Foulard",
  "Conscientious",
  "Mlechchha",
  "Woebegoneness",
  "Milquetoast",
  "Eudaemonic",
  "Chauffeur",
  "Staphylococci",
  "Cymotrichous",
  "Paraphernalia",
  "Crystallographer",
  "Pince-nez",
  "Crustaceology",
  "Odontalgia",
  "Surveillance",
  "Idiosyncrasy",
  "Acquiesce",
  "Feldenkrais",
  "Neutercane",
  "Xenarthra",
  "Wednesday",
  "Bologna",
  "Playwright",
  "Minuscule",
  "Sacrilegious",
  "Psoriasis",
  "Narcissistic",
  "Entrepreneur",
  "Lightning",
  "Handkerchief",
];

const updateQuote = () => {
  current_quote = "";
  difficult = diff[d % 3];
  for (let i = 0; i < 30; ++i) {
    if (difficult === "Easy") {
      current_quote += easy[Math.trunc(Math.random() * easy.length)] + " ";
    } else if (difficult === "Medium") {
      current_quote += medium[Math.trunc(Math.random() * medium.length)] + " ";
    } else {
      current_quote += hard[Math.trunc(Math.random() * hard.length)] + " ";
    }
  }
  //   current_quote.split(-1);
  //Fetch contents from url
  quote_text.textContent = null;
  //   const response = await fetch(quoteApiUrl);
  //   //Store response
  //   let data = await response.json();
  //   //Access quote
  //   current_quote = data.content;
  //   console.log(...current_quote.split(" "));

  //   words.push(...current_quote.split(" "));
  //   console.log(words);
  current_quote = current_quote.toLowerCase();
  current_quote.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.style.fontSize = "24px";
    charSpan.style.fontWeight = "400";
    charSpan.style.fontFamily = "'Lexend Deca', sans-serif";
    charSpan.classList.add("no");
    charSpan.innerText = char;
    quote_text.appendChild(charSpan);
  });
  quote_text.style.wordSpacing = "10px";
};

// function updateQuote() {
// //   current_quote = quotes_array[quoteNo];

//   // separate each character and make an element
//   // out of each of them to individually style them

//   // roll over to the first quote
//   if (quoteNo < quotes_array.length - 1) quoteNo++;
//   else quoteNo = 0;
// }

function processCurrentText() {
  // get current input text and split it
  curr_input = input_area.value;
  curr_input_array = curr_input.split("");

  // increment total characters typed
  characterTyped++;

  errors = 0;

  quoteSpanArray = quote_text.querySelectorAll("span");
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index];

    // character not currently typed
    if (typedChar == null) {
      char.classList.add("no");
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");

      // correct character
    } else if (typedChar === char.innerText) {
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
      char.classList.remove("no");

      // incorrect character
    } else {
      char.classList.remove("no");

      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");

      // increment number of errors
      errors++;
    }
  });

  // display the number of errors
  error_text.textContent = total_errors + errors;

  // update accuracy text
  let correctCharacters = characterTyped - (total_errors + errors);
  let accuracyVal = (correctCharacters / characterTyped) * 100;
  accuracy_text.textContent = Math.round(accuracyVal);

  // if current text is completely typed
  // irrespective of errors
  if (curr_input.length == current_quote.length) {
    updateQuote();

    // update total errors
    total_errors += errors;

    // clear the input area
    input_area.value = "";
  }
}

function startGame() {
  document.querySelector(".first").classList.add("hidden");

  resetValues();
  updateQuote();
  error_group.classList.remove("hidden");
  accuracy_group.classList.remove("hidden");
  end.classList.remove("hidden");
  running = 1;

  // clear old and start a new timer
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function resetValues() {
  end.classList.add("hidden");
  error_group.classList.add("hidden");
  accuracy_group.classList.add("hidden");
  timeLeft = TIME_LIMIT[c % 5];
  running = 0;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNo = 0;
  input_area.disabled = false;
  document.querySelector(".input_area").value = "";
  quote_text.textContent = "Click here to start.";

  //   quote_text.textContent = "";

  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft + "s";
  error_text.textContent = 0;
  restart_btn.style.display = "none";
  cpm_group.style.display = "none";
  wpm_group.style.display = "none";
}

function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;

    // increase the time elapsed
    timeElapsed++;

    // update the timer text
    timer_text.textContent = timeLeft + "s";
  } else {
    // finish the game
    finishGame();
  }
}

function finishGame() {
  // stop the timer
  clearInterval(timer);

  // disable the input area
  input_area.disabled = true;
  timer_text.textContent = `${TIME_LIMIT[c % 5] - timeLeft}`;

  // show finishing text
  //   document.querySelector(".first").classList.remove("hidden");
  document.querySelector(".input_area").value = "Reset please";
  // display restart button
  quote_text.textContent = "Reset Please";
  restart_btn.style.display = "block";

  // calculate cpm and wpm
  cpm = Math.round((characterTyped / timeElapsed) * 60);
  wpm = Math.round((characterTyped / 5 / timeElapsed) * 60);

  // update cpm and wpm text
  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;

  // display the cpm and wpm
  cpm_group.style.display = "block";
  wpm_group.style.display = "block";
}

const rows = [
  [
    "Escape",
    "F1",
    "F2",
    "F3",
    "F4",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
  ],
  [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Insert",
    "Numpad7",
    "PageUp",
  ],
  [
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Delete",
    "End",
    "PageDown",
  ],
  [
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
  ],
  [
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
    "ArrowUp",
  ],
  [
    "ControlLeft",
    "AltLeft",
    "AltRight",
    "ControlRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
  ],
];

document.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    // console.log(e.code);
    const btn = document.querySelector(`.${e.code}-`);
    btn.classList.add("active-class");
    for (let i = 0; i < 6; ++i) {
      if (rows[i].includes(e.code)) {
        const audio = document.querySelector(`audio[data-key="row${i}"]`);
        audio.play();
        return;
      }
    }
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);

    // if (!audio) return; // stop the execution
    audio.play(); // play the audio
  }
});

document.addEventListener("keyup", (e) => {
  const btn = document.querySelector(`.${e.code}-`);
  btn.classList.remove("active-class");

  for (let i = 0; i < 6; ++i) {
    if (rows[i].includes(e.code)) {
      const audio = document.querySelector(`audio[data-key="rowR"]`);
      audio.play();
      return;
    }
  }
  const audio = document.querySelector(`audio[data-key="${e.code}R"]`);
  //   if (!audio) return;
  audio.play();
});

document.querySelector(".timer").addEventListener("click", () => {
  if (!running) {
    c++;
    timer_text.textContent = `${TIME_LIMIT[c % 5]}s`;
  }
});

document.querySelector(".difficulty").addEventListener("click", () => {
  if (!running) {
    d++;
    diff_text.textContent = `${diff[d % 3]}`;
  }
});

document.querySelector(".end").addEventListener("click", () => {
  if (running) {
    finishGame();
  }
});

document.querySelectorAll(".btn-in").forEach((btn) => {
  btn.addEventListener("click", () => {
    const audio = document.querySelector(
      `audio[data-key="${btn.classList[0]}"]`
    );
    audio.play();
    // console.log(audio);
  });
});
