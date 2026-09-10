export type Place = {
  name: string;
  slug: string;
  districtSlug: string;
  category: string;
};

export type District = {
  name: string;
  slug: string;
  hq: string;
  places: string[];
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[()/&.,']/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const categoryOf = (name: string): string => {
  const n = name.toLowerCase();
  if (/(temple|swamy|matha|shrine|peetham|iskcon|masjid|stupa|buddhist|ghat|ashram|dham)/.test(n))
    return "Heritage & Spiritual";
  if (/(waterfall|cascade|jalatarangini|amruthadhara|matsyagundam)/.test(n)) return "Waterfalls";
  if (/(beach|coastal|harbor|harbour|port|island|lighthouse|salt pans)/.test(n)) return "Coast & Beaches";
  if (/(fort|palace|clock|jail|heritage|museum|tower|aqueduct|mounds)/.test(n)) return "History & Forts";
  if (/(hill|valley|viewpoint|peak|caves|trek|ridge)/.test(n)) return "Hills & Adventure";
  if (/(lake|reservoir|dam|wetland|backwater|river|sanctuary|forest|eco|park|mangrove|bird|creek)/.test(n))
    return "Nature & Wildlife";
  if (/(handloom|market|silk|craft|textile|nursery|orchard|plantation|farm|village|library|college|school|campus|hub|food)/.test(n))
    return "Culture & Local Life";
  return "Must Visit";
};

const raw: District[] = [
  {
    name: "Alluri Sitarama Raju (ASR)",
    hq: "Paderu",
    places: [
      "Araku Valley",
      "Borra Caves",
      "Katiki Waterfalls",
      "Chaparai Water Cascade",
      "Ananthagiri Hills",
      "Paderu Modakondamma Temple",
      "Lambasingi (Lammasingi)",
      "Kothapalli Waterfalls",
      "Maredumilli Eco Tourism",
      "Jalatarangini Waterfalls",
      "Amruthadhara Waterfalls",
      "Rampa Waterfalls",
      "Bhupathipalem Reservoir",
      "Gudisa Hill Station",
      "Tajangi Reservoir",
      "Matsyagundam",
      "Pedda Eru Waterfalls",
      "Sangda Waterfalls",
      "Dummuku Viewpoint",
      "Galikonda Viewpoint",
      "Rallagada Tribal Village",
      "Darakonda Temple",
    ],
  },
  {
    name: "Anakapalli",
    hq: "Anakapalli",
    places: [
      "Bojjannakonda Buddhist Site",
      "Lingalakonda",
      "Kotturu Dhanadibbalu",
      "Anakapalli Nookambika Ammavari Temple",
      "Panchadarla Dharmalingeswara Temple",
      "Kondakarla Ava Wetlands",
      "Lalam Kothauru Beach",
      "Upamaka Venkateswara Swamy Temple",
      "Gowri Parameswara Temple",
      "Rambilli Coastal Fort Ruins",
      "Satyadeva Nursery & Agricultural Hubs",
      "Appikonda Beach & Temple",
      "Chodavaram Swayambhu Shiva Temple",
      "Venkatanagaram Anjaneya Swamy Temple",
      "Atchutapuram Industrial Coastal Belt",
      "Sarada River Barrage",
      "Kasimkota Pedda Masjid",
      "Munagapaka Sri Rama Temple",
      "Kommadhi Eco Park Spot",
      "Veerabhadra Swamy Temple (Payakaraopeta)",
    ],
  },
  {
    name: "Ananthapuramu",
    hq: "Ananthapuramu",
    places: [
      "Lepakshi Veerabhadra Temple",
      "Lepakshi Monolithic Nandi",
      "Gooty Fort",
      "Penukonda Fort",
      "Tadipatri Chintala Venkataramana Temple",
      "Tadipatri Bugga Ramalingeswara Temple",
      "Aluru Kona Ranganatha Swamy Temple",
      "Ananthapuramu Clock Tower",
      "ISKCON Temple Anantapur",
      "Kasapuram Netanti Anjaneya Swamy Temple",
      "Gugudu Kullayappa Swamy Temple",
      "Singanamala Lake",
      "Rayadurgam Fort",
      "Prasanthi Nilayam Outskirts",
      "Hemavathi Siddheswara Temple",
      "Dharmavaram Silk Handloom Hub",
      "Uravakonda Karibasaveswara Swamy Matha",
      "Kalyandurg Fort Hill",
      "Mid Pennar Dam (MPD)",
      "Kamma Koti Peetham",
      "Yadiki Caves",
    ],
  },
  {
    name: "Annamayya",
    hq: "Rayachoti",
    places: [
      "Tallapaka",
      "Soumyanatha Swamy Temple (Nandalur)",
      "Veerabhadra Swamy Temple (Rayachoti)",
      "Horsley Hills",
      "Gurramkonda Fort",
      "Kaundinya Wildlife Sanctuary Border",
      "Attirala Parasurama Temple",
      "Gundala Waterfalls",
      "Madanapalle Rishi Valley School",
      "Bhaktha Kannappa Temple (Utukur)",
      "Rajampeta Eco Park",
      "Valmiki Puram Pattabhi Rama Temple",
      "Kalasapadu Anjaneya Temple",
      "Gathee Waterfalls",
      "Sanipaya Forest Trekking Zone",
      "Galiveedu Chennakesava Swamy Temple",
      "Lakkireddypalle Siddheswara Temple",
      "Pileru Eco Park & Hill Lookout",
    ],
  },
  {
    name: "Bapatla",
    hq: "Bapatla",
    places: [
      "Suryalanka Beach",
      "Bapatla Bhavarayani Swamy Temple",
      "Vodarevu Beach",
      "Chirala Textile & Handloom Market",
      "Chandavaram Buddhist Site",
      "Peda Gadelavaripalem Beach",
      "Nizampatnam Harbor & Mangroves",
      "Karakatta Beach Road Drive",
      "Mothupalli Heritage Port",
      "Pithani Satyanarayana Park",
      "Vetapalem Library",
      "Bapatla Agricultural College Campus",
      "Appikatla Chennakesava Temple",
      "Karlapalem Mangrove Creek",
      "Inkollu Anjaneya Swamy Temple",
      "Jilella Malleswara Swamy Temple",
      "Penumudi Bridge View Point",
      "Chinnaganjam Salt Pans",
      "Kavuru Venkateswara Swamy Temple",
      "Ramapuram Beach",
    ],
  },
  {
    name: "Chittoor",
    hq: "Chittoor",
    places: [
      "Kanipakam Varasiddhi Vinayaka Temple",
      "Chandragiri Fort & Palace",
      "Aragonda Ardhagiri Anjaneya Swamy Temple",
      "Mogili Mogileswara Swamy Temple",
      "Gudimallam Parasurameswara Temple",
      "Kailasakona Waterfalls",
      "Talakona Waterfalls (Border Zone)",
      "Palamaner Cattle Farm & Forest Sanctuary",
      "Bangarupalem Mango Orchards",
      "Kanganayanapalle Venkateswara Temple",
      "Boyerakonda Gangamma Temple",
      "Nagari Nose Hill Peak",
      "Srikalahasti Outskirts Mandapams",
      "Bugga Agastheswara Swamy Temple",
      "Koundinya Wildlife Sanctuary",
      "Somasila Backwaters (Chittoor Borders)",
      "Yadamari Venugopala Swamy Temple",
      "Santhipuram Eco Parks",
      "Chittoor Tower Clock & Heritage Square",
      "Karakambadi Forest Trails",
    ],
  },
  {
    name: "Dr. B.R. Ambedkar Konaseema",
    hq: "Amalapuram",
    places: [
      "Ainavilli Siddhi Vinayaka Temple",
      "Muramulla Veereswara Swamy Temple",
      "Antarvedi Sri Lakshmi Narasimha Swamy Temple",
      "Antarvedi Lighthouse & Beach",
      "Ryali Jaganmohini Kesava Swamy Temple",
      "Draksharamam Bhimeswara Swamy Temple (Border)",
      "Appanapalle Bala Balaji Temple",
      "Dindi Coconut County & Backwaters",
      "Aduru Buddhist Stupa",
      "Panchamukha Anjaneya Temple (Amalapuram)",
      "Pasarlapudi Plantations",
      "Palivela Kuppeswara Swamy Temple",
      "Ravulapalem Sugarcane & Fruit Markets",
      "Kothapalli Mangrove Creeks",
      "Bandarulanka Handloom Village",
      "Gannavaram Aqueduct",
      "Razole River Islets (Lanka Villages)",
      "Amalapuram Subrahmanya Swamy Temple",
      "Peruru Heritage Village",
    ],
  },
  {
    name: "East Godavari",
    hq: "Rajahmundry",
    places: [
      "Godavari Arch Bridge & Rail Bridge",
      "Pushkar Ghat",
      "Kadiyam Flower Nurseries",
      "Korukonda Lakshmi Narasimha Swamy Temple",
      "Kotipalli Someswara Swamy Temple",
      "ISKCON Temple Rajahmundry",
      "Sir Arthur Cotton Museum (Dowleswaram)",
      "Dowleswaram Barrage",
      "Rajahmundry Rose Bungalow & Heritage Park",
      "Pattiseema Veerabhadra Swamy Temple (Border)",
      "Anaparthi Rural Heritage",
      "Maredumilli Jungle Road Gateway",
      "Kadiyapupulanka Botanical Walkways",
      "Rajahmundry Central Jail Heritage Structure",
      "Markandeya Swamy Temple",
      "Syamala Ammavari Temple",
      "Godavari River Sunset Cruise",
      "Gowthami Jiva Karunya Sangam Park",
      "Vemagiri Food Street & Atreyapuram Pootharekulu Hub",
      "Kateru River Island Park",
    ],
  },
  {
    name: "Eluru",
    hq: "Eluru",
    places: [
      "Kolleru Lake & Bird Sanctuary",
      "Dwaraka Tirumala (Chinna Tirupati)",
      "Guntupalli (Jilakaragudem) Buddhist Caves",
      "Pedavegi Archaeological Museum",
      "Pattiseema Sri Veerabhadra Swamy Temple",
      "Jangareddygudem Waterfalls",
      "Polavaram Dam Site & View Point",
      "Eluru Ashramam & Santhi Dham",
      "Gopannapalem Agricultural Hub",
      "Sanivarapupeta Woolen Carpet Center",
      "Chintalapudi Forest Reserve",
      "Mutyalammapatnam Eco Spot",
      "Tadikalapudi Swayambhu Shiva Temple",
      "Jangareddygudem Seven Hills Temple",
      "Asram Medical Campus Botanical Park",
      "Munduru Venkateswara Temple",
      "Tammileru River Park",
      "Denduluru Historical Mounds",
      "Koyyalagudem Handloom & Bamboo Crafts",
    ],
  },
  {
    name: "Guntur",
    hq: "Guntur",
    places: [
      "Amaravati Stupa & Archaeological Museum",
      "Amarama Amaralingeswara Swamy Temple",
      "Dhyana Buddha Statue (Amaravati)",
      "Kondaveedu Fort",
      "Mangalagiri Panakala Narasimha Swamy Temple",
      "Pedakakani Malleswara Swamy Temple",
      "Uppalapadu Bird Sanctuary",
      "Guntur Chilli Market Yard",
      "Jinnah Tower",
      "Chebrole Temples",
      "Tenali Art & Drama Cultural Hub",
      "Phatima Matha Shrine",
      "Gorantla Sai Baba Temple",
      "Agastheswara Swamy Temple (Narakodur)",
      "Kotappakonda / Yellamanda Heritage Trail",
      "Budampadu Eco Lake",
      "Sitanagaram Vedic University & Ghats",
      "Tenali Canal Park",
      "Tadikonda Venugopala Swamy Temple",
      "Namburu Kalpataru Eco Gardens",
    ],
  },
  {
    name: "Kakinada",
    hq: "Kakinada",
    places: [
      "Coringa Wildlife Sanctuary",
      "Hope Island",
      "Kakinada Beach & Promenade",
      "Pithapuram Sripada Srivallabha Temple",
      "Pithapuram Kukkuteswara Swamy Temple",
      "Samarlakota Kumararama Bhimeswara Temple",
      "Uppada Beach & Handloom Silk Village",
      "Adurru / Vakalapudi Coastal Belt",
      "Annavaram Ratnagiri Hill Temple",
      "Kakinada Deep Water Port & Harbor",
      "Bhavanarayana Swamy Temple (Sarpavaram)",
    ],
  },
  {
    name: "Prakasam",
    hq: "Ongole",
    places: [
      "Kothapatnam Beach (Ongole)",
      "Markapur Chennakesava Swamy Temple",
      "Singarayakonda Lakshmi Narasimha Temple",
      "Cumbum Lake (Cumbum Tank)",
      "Bhairavakonda Cave Temples",
      "Tripurantakam Tripurantakeswara Temple",
      "Motupalli Historic Port",
      "Ongole Bull Breeding Farms",
      "Pakala Beach",
      "Ramayapatnam Beach & Lighthouse",
      "Chirala / Vodarevu Coastal Drive",
      "Singarakonda Anjaneya Swamy Temple",
      "Kanigiri Hill Fort Ruins",
      "Giddalur Nallamala Forest Entry",
      "Podili Ramalingeswara Temple",
      "Tangutur Valluramma Temple",
      "Santhanuthalapadu Eco Park",
      "Gundlakamma River Reservoir",
      "Chimakurthi Black Granite Quarries",
      "Prakasam Town Heritage Clock Tower",
    ],
  },
  {
    name: "Visakhapatnam",
    hq: "Visakhapatnam",
    places: [
      "INS Kursura Submarine Museum",
      "TU-142M Aircraft Museum",
      "RK Beach (Ramakrishna Beach)",
      "Rushikonda Beach",
      "Kailasagiri Hill Park",
      "Simhachalam Varaha Lakshmi Narasimha Temple",
      "Yarada Beach",
      "Dolphin's Nose & Lighthouse",
      "Tenneti Park & Sea View Point",
      "Sea Harrier Museum",
      "Ross Hill, Dargah Konda & Sri Venkateswara Konda",
      "Visakha Museum",
      "VMRDA City Central Park",
      "Indira Gandhi Zoological Park",
      "Kambalakonda Wildlife Sanctuary",
      "Sagar Nagar Beach",
      "Bheemunipatnam (Bheemili) Beach & Dutch Ruins",
      "Red Sand Hills (Erra Matti Dibbalu)",
      "Gosthani River Confluence (Bheemili)",
      "Lawson's Bay Beach & Park",
    ],
  },
];

export const districts: (District & { slug: string })[] = raw.map((d) => ({
  ...d,
  slug: slugify(d.name),
}));

export const places: Place[] = districts.flatMap((d) =>
  d.places.map((name) => ({
    name,
    slug: slugify(name),
    districtSlug: d.slug,
    category: categoryOf(name),
  })),
);

export const getDistrict = (slug: string) => districts.find((d) => d.slug === slug);
export const getPlace = (slug: string) => places.find((p) => p.slug === slug);

export const categories = Array.from(new Set(places.map((p) => p.category))).sort();

/* ---------------- Rich verified profile data ---------------- */

export type TransportRow = {
  from: string;
  low: string;
  medium: string;
  high: string;
};

export type Stay = {
  tier: string;
  hotel: string;
  distance: string;
  price: string;
  food: string;
  rooms: string;
};

export type PlaceDetail = {
  history: string;
  famousFor: string[];
  transitHubs: { hub: string; detail: string }[];
  bestSeason: string;
  transport: TransportRow[];
  stays: Stay[];
};

export const placeDetails: Record<string, PlaceDetail> = {
  "araku-valley": {
    history:
      "Araku Valley sits in the Eastern Ghats, long known to tribal and pastoral communities before roads made the viewpoint accessible to travellers. Its present form owes most to the post-1956 Andhra state development period, when patronage, administration and local settlement patterns in Alluri Sitarama Raju (ASR) district gave the site the shape visitors see today. The climb rewards visitors with long views across ridges and valleys, and mist is common in the cooler months.",
    famousFor: [
      "Sweeping valley and ridge views",
      "Cool climate relative to the plains",
      "Sunrise and sunset viewpoints",
      "Trekking and short nature walks",
      "Coffee plantations, chilly climate and misty valleys",
    ],
    transitHubs: [
      { hub: "Nearest bus stand", detail: "Paderu bus stand — 6.2 km" },
      { hub: "Nearest railway station", detail: "Araku Valley Railway Station — 44.7 km" },
      { hub: "Nearest airport", detail: "Visakhapatnam International Airport — 123.7 km" },
    ],
    bestSeason: "October to February",
    transport: [
      {
        from: "Paderu bus stand (6.2 km)",
        low: "APSRTC local / shared auto · ~16 min · Rs 15–60",
        medium: "Ola/Uber or private auto · ~13 min · Rs 90–196",
        high: "Chauffeured sedan / hotel pickup · ~11 min · Rs 586–1,079",
      },
      {
        from: "Araku Valley Railway Station (44.7 km)",
        low: "Town bus + shared jeep · ~103 min · Rs 30–109",
        medium: "App cab / prepaid taxi · ~78 min · Rs 775–1,144",
        high: "Innova Crysta with driver · ~67 min · Rs 1,672–2,719",
      },
      {
        from: "Visakhapatnam International Airport (123.7 km)",
        low: "Airport bus to city + RTC bus · ~325 min · Rs 257–416",
        medium: "App cab (outstation rate) · ~176 min · Rs 2,155–3,221",
        high: "Luxury sedan / SUV transfer · ~154 min · Rs 4,663–7,148",
      },
    ],
    stays: [
      {
        tier: "Budget",
        hotel: "Paderu Rest House",
        distance: "0.4 km away",
        price: "Rs 800–1,800",
        food: "Attached South Indian mess; meals plate served",
        rooms: "Basic AC rooms, TV, 24-hour check-in",
      },
      {
        tier: "Budget",
        hotel: "Paderu Deluxe Lodge",
        distance: "8.1 km away",
        price: "Rs 1,500–2,700",
        food: "Complimentary tea; dhabas within walking distance",
        rooms: "Clean twin rooms, fan/AC option, attached bath",
      },
      {
        tier: "Budget",
        hotel: "Alluri Deluxe Lodge",
        distance: "8.3 km away",
        price: "Rs 1,400–2,300",
        food: "No restaurant; room service snacks and tea only",
        rooms: "AC rooms, Wi-Fi in lobby, parking",
      },
      {
        tier: "Budget",
        hotel: "Araku Tourist Home",
        distance: "7.3 km away",
        price: "Rs 800–1,800",
        food: "Basic veg mess on site; tiffin from 7 am",
        rooms: "AC rooms, Wi-Fi in lobby, parking",
      },
    ],
  },
};
