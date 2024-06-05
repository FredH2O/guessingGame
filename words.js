const words = [
    { word: "argentina", hint: "A South American country known for tango and beef." },
    { word: "australia", hint: "A country and continent known for the Outback and Sydney Opera House." },
    { word: "belgium", hint: "A European country famous for chocolate and waffles." },
    { word: "brazil", hint: "The largest country in South America, famous for Carnival and soccer." },
    { word: "canada", hint: "A North American country known for maple syrup and hockey." },
    { word: "china", hint: "The most populous country in the world, known for the Great Wall." },
    { word: "egypt", hint: "A North African country known for ancient pyramids and the Nile River." },
    { word: "france", hint: "A European country famous for wine, cheese, and the Eiffel Tower." },
    { word: "germany", hint: "A European country known for beer, sausages, and Oktoberfest." },
    { word: "greece", hint: "A European country known for ancient ruins and mythology." },
    { word: "india", hint: "A South Asian country known for Bollywood and the Taj Mahal." },
    { word: "indonesia", hint: "A Southeast Asian country made up of thousands of islands, known for Bali." },
    { word: "iran", hint: "A Middle Eastern country known for its rich history and Persian culture." },
    { word: "ireland", hint: "An island nation known for its green landscapes and St. Patrick's Day." },
    { word: "italy", hint: "A European country known for pasta, pizza, and the Colosseum." },
    { word: "japan", hint: "An East Asian country known for sushi, anime, and Mount Fuji." },
    { word: "kenya", hint: "An East African country known for its wildlife and safaris." },
    { word: "mexico", hint: "A North American country known for tacos, mariachi music, and Mayan ruins." },
    { word: "morocco", hint: "A North African country known for its spices, markets, and Sahara Desert." },
    { word: "netherlands", hint: "A European country known for windmills, tulips, and canals." },
    { word: "new zealand", hint: "An island nation known for its Maori culture and stunning landscapes." },
    { word: "nigeria", hint: "The most populous country in Africa, known for Nollywood and music." },
    { word: "norway", hint: "A Scandinavian country known for fjords and Viking history." },
    { word: "pakistan", hint: "A South Asian country known for its rich history and diverse culture." },
    { word: "peru", hint: "A South American country known for Machu Picchu and the Andes Mountains." },
    { word: "philippines", hint: "A Southeast Asian country known for its beaches and islands." },
    { word: "poland", hint: "A European country known for its history and medieval architecture." },
    { word: "portugal", hint: "A European country known for its explorers and port wine." },
    { word: "qatar", hint: "A Middle Eastern country known for its wealth and modern skyscrapers." },
    { word: "russia", hint: "The largest country in the world, known for its history and culture." },
    { word: "saudi arabia", hint: "A Middle Eastern country known for its oil and Mecca." },
    { word: "south africa", hint: "A country known for its diversity and Nelson Mandela." },
    { word: "south korea", hint: "An East Asian country known for K-pop and technology." },
    { word: "spain", hint: "A European country known for flamenco, bullfighting, and paella." },
    { word: "sweden", hint: "A Scandinavian country known for its design and meatballs." },
    { word: "switzerland", hint: "A European country known for its neutrality and chocolates." },
    { word: "thailand", hint: "A Southeast Asian country known for its beaches and cuisine." },
    { word: "turkey", hint: "A transcontinental country known for its history and Istanbul." },
    { word: "ukraine", hint: "A European country known for its rich history and cultural heritage." },
    { word: "united kingdom", hint: "A country known for its monarchy and the city of London." },
    { word: "united states", hint: "A North American country known for its diversity and Hollywood." },
    { word: "vietnam", hint: "A Southeast Asian country known for its cuisine and history." },
    { word: "venezuela", hint: "A South American country known for its oil reserves and Angel Falls." },
    { word: "zimbabwe", hint: "A country in Southern Africa known for Victoria Falls and diverse wildlife." },
    { word: "finland", hint: "A Northern European country known for its lakes and saunas." },
    { word: "denmark", hint: "A Scandinavian country known for its hygge and Legoland." },
    { word: "czech republic", hint: "A European country known for its beer and Prague's old town." },
    { word: "austria", hint: "A European country known for classical music and the Alps." },
    { word: "hungary", hint: "A European country known for its thermal baths and goulash." },
    { word: "chile", hint: "A South American country known for its long coastline and Andes Mountains." },
    { word: "colombia", hint: "A South American country known for coffee and the Andes." },
    { word: "ecuador", hint: "A South American country named after the equator, known for the Galápagos Islands." },
    { word: "malaysia", hint: "A Southeast Asian country known for its diverse culture and Kuala Lumpur." },
    { word: "singapore", hint: "A city-state in Southeast Asia known for its cleanliness and skyline." },
    { word: "sri lanka", hint: "An island nation in South Asia known for its tea and ancient ruins." },
    { word: "uganda", hint: "An East African country known for its wildlife and Lake Victoria." },
    { word: "algeria", hint: "The largest country in Africa, known for its desert landscapes." },
    { word: "bangladesh", hint: "A South Asian country known for its rivers and textiles." },
    { word: "cuba", hint: "An island nation in the Caribbean known for its music and cigars." },
    { word: "jamaica", hint: "An island nation in the Caribbean known for reggae music and Usain Bolt." },
    { word: "dog", hint: "Man's best friend" },
    { word: "cat", hint: "Likes to chase mice" },
    { word: "bird", hint: "Flies in the sky" },
    { word: "fish", hint: "Swims in water" },
    { word: "rabbit", hint: "Hops around and has long ears" },
    { word: "horse", hint: "Rides on a saddle" },
    { word: "turtle", hint: "Carries its house on its back" },
    { word: "lion", hint: "King of the jungle" },
    { word: "tiger", hint: "Has stripes and is a big cat" },
    { word: "elephant", hint: "Has a long trunk and big ears" },
    { word: "giraffe", hint: "Has a long neck and spots" },
    { word: "zebra", hint: "Has black and white stripes" },
    { word: "monkey", hint: "Swings from tree to tree" },
    { word: "penguin", hint: "Waddles and cannot fly" },
    { word: "bear", hint: "Big, furry mammal that hibernates" },
    { word: "kangaroo", hint: "Hops around and carries its baby in a pouch" },
    { word: "panda", hint: "Black and white bear that eats bamboo" },
    { word: "wolf", hint: "Howls at the moon" },
    { word: "cheetah", hint: "Fastest land animal" },
    { word: "fox", hint: "Has a bushy tail and is sly" },
    { word: "rhinoceros", hint: "Has a horn on its nose" },
    { word: "hippopotamus", hint: "Lives in water and is very large" },
    { word: "crocodile", hint: "Large reptile with sharp teeth" },
    { word: "shark", hint: "Predatory fish with sharp teeth" },
    { word: "octopus", hint: "Has eight tentacles" },
    { word: "snake", hint: "Slithers on the ground and can be poisonous" },
    { word: "camel", hint: "Has a hump and can go a long time without water" },
    { word: "koala", hint: "Cute, furry animal from Australia" },
    { word: "sloth", hint: "Very slow-moving mammal" },
    { word: "gazelle", hint: "Graceful antelope with long horns" },
    { word: "buffalo", hint: "Large mammal with horns and a shaggy coat" },
    { word: "deer", hint: "Male has antlers, often seen in forests" },
    { word: "panther", hint: "Sleek, black cat" },
    { word: "toucan", hint: "Has a large colorful beak" },
    { word: "leopard", hint: "Spotted big cat" },
    { word: "zebra", hint: "Has black and white stripes" },
    { word: "hyena", hint: "Laughter-like call, scavenger" },
    { word: "gorilla", hint: "Strong, intelligent primate" },
    { word: "mongoose", hint: "Eats snakes and is quick" },
    { word: "wombat", hint: "Australian marsupial, burrows underground" },
    { word: "armadillo", hint: "Has a hard shell" },
    { word: "chameleon", hint: "Changes color to blend in" },
    { word: "hedgehog", hint: "Has spines and curls into a ball" },
    { word: "platypus", hint: "Lays eggs, has a duck-like bill" },
    { word: "otter", hint: "Lives in water, playful mammal" },
    { word: "weasel", hint: "Small, agile predator" },
    { word: "beaver", hint: "Builds dams with wood" },
    { word: "dolphin", hint: "Intelligent marine mammal" },
    { word: "orca", hint: "Also known as a killer whale" },
    { word: "seal", hint: "Lives in water, has flippers" },
    { word: "walrus", hint: "Large mammal with tusks" },
    { word: "narwhal", hint: "Has a long, spiral tusk" },
    { word: "jaguar", hint: "Big cat found in the Americas" },
    { word: "mongoose", hint: "Eats snakes and is quick" },
    { word: "lemur", hint: "Found only in Madagascar" },
    { word: "meerkat", hint: "Small mammal that lives in groups" },
    { word: "emu", hint: "Flightless bird from Australia" },
    { word: "ostrich", hint: "Largest bird, cannot fly" },
    { word: "macaw", hint: "Colorful parrot" },
    { word: "cockatoo", hint: "Has a crest on its head" },
    { word: "flamingo", hint: "Tall bird with pink feathers" },
    { word: "pelican", hint: "Has a large bill for catching fish" },
    { word: "gibbon", hint: "Primate found in Asia" },
    { word: "bonobo", hint: "Close relative of the chimpanzee" },
    { word: "iguana", hint: "Lizard that can change color" },
    { word: "komodo dragon", hint: "Largest lizard, found in Indonesia" },
    { word: "mongoose", hint: "Eats snakes and is quick" },
    { word: "quokka", hint: "Happiest animal in the world" },
    { word: "salamander", hint: "Amphibian with a long tail" },
    { word: "sloth", hint: "Very slow-moving mammal" },
    { word: "squirrel", hint: "Collects nuts and has a bushy tail" },
    { word: "tapir", hint: "Large mammal with a short trunk" },
    { word: "tarantula", hint: "Large, hairy spider" },
    { word: "vulture", hint: "Scavenging bird with a bald head" },
    { word: "wallaby", hint: "Similar to a kangaroo, but smaller" },
    { word: "yak", hint: "Hairy animal found in mountainous regions" },
    { word: "wildebeest", hint: "Large antelope with curved horns" },
    { word: "bobcat", hint: "Wild cat found in North America" },
    { word: "chipmunk", hint: "Small, striped rodent" },
    { word: "cockroach", hint: "Insect that can survive almost anything" },
    { word: "cormorant", hint: "Dives for fish, has a long neck" },
    { word: "crab", hint: "Has claws and walks sideways" },
    { word: "dragonfly", hint: "Large insect with transparent wings" },
    { word: "haddock", hint: "Marine fish, commonly eaten" },
    { word: "lobster", hint: "Sea creature with claws" },
    { word: "newt", hint: "Amphibian with a long tail" },
    { word: "parrotfish", hint: "Colorful fish with a beak-like mouth" },
    { word: "penguin", hint: "Waddles and cannot fly" },
    { word: "platypus", hint: "Lays eggs, has a duck-like bill" },
    { word: "starfish", hint: "Marine animal with five arms" },
    { word: "stingray", hint: "Has a flat body and a long tail with a sting" },
    { word: "toad", hint: "Amphibian with dry, warty skin" },
    { word: "turkey", hint: "Commonly eaten bird during Thanksgiving" },
    { word: "urchin", hint: "Spiny sea creature" },
    { word: "wasp", hint: "Flying insect with a sting" },
    { word: "whale", hint: "Largest mammal, lives in the ocean" },
    { word: "yak", hint: "Hairy animal found in mountainous regions" },
    { word: "zebra", hint: "Has black and white stripes" }
];

export default words;