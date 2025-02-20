const text = [
    {
        text: "you're my best friend. just you. dont tell anyone",
        weight: 3
    },
    {
        text: "hungry",
        weight: 15
    },
    {
        text: "shovel them in there",
        weight: 8
    },
    {
        text: "hey",
        weight: 15
    },
    {
        text: "what?",
        weight: 15
    },
    {
        text: "the commissioner is doing a great job",
        weight: 4
    },
    {
        text: "sibr is doing a great job",
        weight: 4
    },
    {
        text: "where's jaylen?",
        weight: 15
    },
    {
        text: "it's pronounced sibr",
        weight: 4
    },
    {
        text: "these eggs are yum",
        weight: 15
    },
    {
        text: "you look like a snack",
        weight: 12
    },
    {
        text: "*cronch*",
        weight: 15
    },
    {
        text: "are you holding out on me",
        weight: 10
    },
    {
        text: "pretzels got wet",
        weight: 10
    },
    {
        text: "Blaseball is a mess.",
        weight: 10
    },
    {
        text: "also who are the data witches",
        weight: 10
    },
];

const hats = {
  'chef': {
    src: 'squid-hat.png',
    alt: "A giant squid, adorned with a chef's hat, floating ominously on the page",
    title: "The Monitor from Blaseball.com",
	contentType: 'squid'
  },
  'fedora': {
    src: 'fedora-squid.svg',
    alt: "A giant squid, adorned with a fedora, floating ominously on the page",
    title: "Giant Squid by Delapouite, Fedora by Lorc; game-icons.net",
	contentType: 'squid'
  },
  'default': {
    src: 'giant-squid.svg',
    alt: "A giant squid, floating ominously on the page",
    title: "Giant Squid by Delapouite at game-icons.net",
	contentType: 'squid'
  },
  'ballclark': {
    src: 'ballclark.png',
    alt: 'An angry bbaseball, floating ominously on the page',
    title: "Ball Clark by Quinns at People Make Games",
	contentType: 'squid'
  },
  'sunglasses': {
    src: 'sunglasses-squid.png',
    alt: 'A giant squid, adorned with sunglasses, floating ominously on the page',
    title: "The Monitor with sunglasses from Blaseball.com",
	contentType: 'squid'
  },
  'coin': {
	contentType: 'coin'
  },
  'scattered': {
	contentType: 'scattered'  
  },
  'shelled-one': {
    src: 'peanut.svg',
    alt: 'A giant peanut, spinning ominously on the page',
    title: 'Peanut by rihlsul at game-icons.net',
	contentType: 'shelled-one'
  },
  'shelled-two': {
    src: 'peanut.png',
    alt: 'Spinning peanut',
    title: 'Peanut from Blaseball.com',
	contentType: 'shelled-two'
  },
  'tutorial': {
    src: 'peanut.png',
    alt: 'Spinning peanut',
    title: 'Peanut from Blaseball.com',
	contentType: 'tutorial'
  },
};

const textArray = text.map(saying => Array(saying.weight).fill(saying.text)).flat();

function onLoad() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || params.get('hat') || 'default';
	const hat = hats[type] || hats['default'];
	const floaty = document.querySelector(".floaty");
	document.querySelector(".content").className = "content " + hat.contentType;
	
    if (hat.src && !floaty.src.includes(hat.src)) {
        floaty.src = hat.src;
        floaty.alt = hat.alt;
        floaty.title = hat.title;
    }
	if (type === 'shelled-two' || type === 'tutorial'){
		document.querySelector(".Overlay-Text-Line").className = "Overlay-Text-Line text"
    }

    const text = params.get('text');
    if (text) {
        document.querySelector(".text").textContent = text;
    } else {
        setText();
    }
}

function setText() {
    // console.log("Set Text");
    document.querySelector(".text").textContent = textArray[
        Math.floor(Math.random() * textArray.length)
    ];
    const rand = (Math.floor(Math.random() * 180) + 30) * 1000;
    // console.log(rand);
    setTimeout(setText, rand);
}
