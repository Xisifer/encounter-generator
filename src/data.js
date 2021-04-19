const matchType = [
  {
    text: "Skirmish",
    weight: 5,

    description: "(A direct no-frills fight between two parties)",
  },
  {
    text: "Duel",
    weight: 4,

    description:
      "(A fight pairing individuals of similar skill to duke it out)",
  },
  {
    text: "Horde",
    weight: 4,

    description:
      "(A battle in which a constant wave of reinforcements assaults a small group)",
  },
  {
    text: "Hunt",
    weight: 4,

    description: "(The objective is simple: Identify and eliminate the target)",
  },
  {
    text: "Capture",
    weight: 4,

    description: "(Identify and take the target down, but alive)",
  },
  {
    text: "Dogfight",
    weight: 3,

    description: "(A straight-up skirmish with vehicles against vehicles)",
  },
  {
    text: "Tournament",
    weight: 3,

    description:
      "(An elimination-style procession of matches, either one-on-one or team-on-team",
  },
  {
    text: "Battle",
    weight: 3,

    description:
      "(A full-scale mass battle with at least two armies clashing against each other)",
  },
  {
    text: "Mission",
    weight: 3,

    description: "(Achieve the objectives at any cost)",
  },
  {
    text: "Social",
    weight: 2,

    description:
      "(An event such as a ball or party where your aim is to achieve your goal using only social interactions)",
  },
  {
    text: "Huttball",
    weight: 2,

    description:
      "(Two teams, chosen by random draw! One ball, slippery as a greased Hutt! Weapons, name-calling, and cheating are all encouraged! Let's play Huttball!)",
  },
  {
    text: "Foot Race",
    weight: 2,

    description: "(A race between multiple contestants on foot)",
  },
  {
    text: "Planetary Race",
    weight: 2,

    description: "(A race between multiple contestants in planetary vehicles)",
  },
  {
    text: "Space Race",
    weight: 2,

    description:
      "(A race between multiple contestants in starships and space vehicles)",
  },
  {
    text: "Raid Boss",
    weight: 1,

    description: "(One overpowering enemy against a team)",
  },
  {
    text: "Jailbreak",
    weight: 1,

    description: "(Break yourselves out of a sticky situation behind bars)",
  },
  {
    text: "Heist",
    weight: 1,

    description:
      "(Someone has something somebody else wants, and you're going to get it for them)",
  },
  {
    text: "Fucking Run",
    weight: 1,

    description:
      "(There's no possible way to defeat the overwhelming forces arrayed against you, so just fucking run!)",
  },
  {
    text: "Module",
    weight: 1,

    description:
      "(With this option you actually get to play through a pre-recorded mission)",
  },
];
const matchLocation = [
  {
    text: "Stoval Outpost",
    weight: 1,

    description:
      ":cat: Stoval Outpost (Small outpost surrounded by open plains, Huge size)",
  },
  {
    text: "Abandoned Warehouse",
    weight: 1,
    description:
      ":open_file_folder: Abandoned Warehouse (Mostly-empty warehouse, Moderate size)",
  },
  {
    text: "Desert Ruins",
    weight: 1,

    description:
      ":hourglass_flowing_sand: Desert Ruins (Ruins with a ring of pillars, Large size)",
  },
  {
    text: "Star Destroyer",
    weight: 1,

    description: ":ship: Star Destroyer (Catwalks and pits, Large size)",
  },
  {
    text: "Mos Espa Cantina",
    weight: 1,

    description:
      ":beers: Mos Espa Cantina (Standard bars and booths, Moderate size)",
  },
  {
    text: "Geonosis Arena",
    weight: 1,

    description:
      ":bug: Geonosis Arena (Arena with varied environments, Large size)",
  },
  {
    text: "Cliffside Landing Platform",
    weight: 1,

    description:
      ":mount_fuji: Cliffside Landing Platform (Small compound with attached landing pad, Moderate size)",
  },
  {
    text: "Ilum Wastes",
    weight: 1,

    description:
      ":ice_cube: Ilum Wastes (Open ground in frozen plain, Huge size)",
  },
  {
    text: "Subway Control Station",
    weight: 1,

    description:
      ":train2: Subway Control Station (Multi-room interior, Moderate size)",
  },
  {
    text: "Mining Colony 72",
    weight: 1,

    description:
      ":pick: Mining Colony 72 (Maze-like interior corridors, Large size)",
  },
  {
    text: "Mos Shuuta",
    weight: 1,

    description:
      ":mosque: Mos Shuuta (Large town of alleys and streets, Huge size)",
  },
  {
    text: "Tatooine Spaceport",
    weight: 1,

    description:
      ":hourglass_flowing_sand: Tatooine Spaceport (Circular spaceport landing pad, Moderate size)",
  },
  {
    text: "The Retreat",
    weight: 1,

    description: ":beach: The Retreat (Improvised jungle village, Large size)",
  },
  {
    text: "Forest Moon Landing",
    weight: 1,

    description:
      ":evergreen_tree: Forest Moon Landing (Large open landing pad, Moderate size)",
  },
  {
    text: "The Base",
    weight: 1,

    description:
      ":shield: The Base (Landing pad and small interior, Large size)",
  },
  {
    text: "Valley of the Dark Lords",
    weight: 1,

    description:
      ":sithwarrior: Valley of the Dark Lords (Sandy canyon and cliffs, Large size)",
  },
  {
    text: "Zeffo Landing Pad",
    weight: 1,

    description:
      ":zebra: Zeffo Landing Pad (Landing pad with drops, Moderate size)",
  },
  {
    text: "Badlands Outpost",
    weight: 1,

    description:
      ":cactus: Badlands Outpost (Single building with machinery, Small size)",
  },
  {
    text: "Ilum Cliffs",
    weight: 1,

    description:
      ":mountain_snow: Ilum Cliffs (Frozen open ground with drop, Moderate size)",
  },
  {
    text: "Subway Platform",
    weight: 1,

    description:
      ":bullettrain_front: Subway Platform (Platform turned base, Moderate size)",
  },
];
const matchEnemy = [
  {
    text: "Galactic Empire",
    weight: 1,

    description: "",
  },
  {
    text: "Imperial Army",
    weight: 1,

    description: "",
  },
  {
    text: "Imperial Intelligence",
    weight: 1,

    description: "",
  },
  {
    text: "Inquisitorius",
    weight: 1,

    description: "",
  },
  {
    text: "Imperial Remnant",
    weight: 1,

    description: "",
  },
  {
    text: "Imperial Remnant (Thrawn/Gideon)",
    weight: 1,

    description: "",
  },
  {
    text: "Imperial Remnant (Desann)",
    weight: 1,

    description: "",
  },
  {
    text: "Imperial Knights",
    weight: 1,

    description: "",
  },
  {
    text: "Separatists",
    weight: 1,

    description: "",
  },
  {
    text: "Rebel Alliance",
    weight: 1,

    description: "",
  },
  {
    text: "Galactic Republic",
    weight: 1,

    description: "",
  },
  {
    text: "Jedi Order",
    weight: 1,

    description: "",
  },
  {
    text: "Jedi Praxeum",
    weight: 1,

    description: "",
  },
  {
    text: "Sith Order",
    weight: 1,

    description: "",
  },
  {
    text: "Disciples of Ragnos",
    weight: 1,

    description: "",
  },
  {
    text: "The Seven",
    weight: 1,

    description: "",
  },
  {
    text: "Old Republic",
    weight: 1,

    description: "",
  },
  {
    text: "Sith Empire",
    weight: 1,

    description: "",
  },
  {
    text: "First Order",
    weight: 1,

    description: "",
  },
  {
    text: "The Resistance",
    weight: 1,

    description: "",
  },
  {
    text: "Scum and Villainy",
    weight: 1,

    description: "",
  },
  {
    text: "Slavers",
    weight: 1,

    description: "",
  },
  {
    text: "Yiyar Clan",
    weight: 1,

    description: "",
  },
  {
    text: "Hatchet Men",
    weight: 1,

    description: "",
  },
  {
    text: "Bloodstalkers",
    weight: 1,

    description: "",
  },
  {
    text: "Nar Shadows",
    weight: 1,

    description: "",
  },
  {
    text: "Crimson Dawn",
    weight: 1,

    description: "",
  },
  {
    text: "Pyke Syndicate",
    weight: 1,

    description: "",
  },
  {
    text: "Corusca Syndicate",
    weight: 1,

    description: "",
  },
  {
    text: "Law Enforcement",
    weight: 1,

    description: "",
  },
  {
    text: "CorSec",
    weight: 1,

    description: "",
  },
  {
    text: "ADVENT",
    weight: 1,

    description: "",
  },
  {
    text: "Creatures",
    weight: 1,

    description: "",
  },
  {
    text: "Large Creatures",
    weight: 1,

    description: "",
  },
  {
    text: "Zillo Beast",
    weight: 1,

    description: "",
  },
  {
    text: "Pirates",
    weight: 1,

    description: "",
  },
  {
    text: "Jas'Quai Pirates",
    weight: 1,

    description: "",
  },
  {
    text: "Ohnaka Pirates",
    weight: 1,

    description: "",
  },
  {
    text: "Black Sun",
    weight: 1,

    description: "",
  },
  {
    text: "Zann Consortium",
    weight: 1,

    description: "",
  },
  {
    text: "Mercenaries",
    weight: 1,

    description: "",
  },
  {
    text: "Bounty Hunters",
    weight: 1,

    description: "",
  },
  {
    text: "Chrome Bones PMC",
    weight: 1,

    description: "",
  },
  {
    text: "Mandalorian Loyalists",
    weight: 1,

    description: "",
  },
  {
    text: "Death Watch",
    weight: 1,

    description: "",
  },
  {
    text: "Force Users",
    weight: 1,

    description: "",
  },
  {
    text: "Spectre Cell",
    weight: 1,

    description: "",
  },
  {
    text: "Adamite Paladins",
    weight: 1,

    description: "",
  },
  {
    text: "Skyholme Astromancers",
    weight: 1,

    description: "",
  },
  {
    text: "Nightsisters",
    weight: 1,

    description: "",
  },
  {
    text: "Zeison Sha",
    weight: 1,

    description: "",
  },
  {
    text: "Jensaarai",
    weight: 1,

    description: "",
  },
  {
    text: "Sathari Militants",
    weight: 1,

    description: "",
  },
  {
    text: "Zillo' the Crafter",
    weight: 1,

    description: "",
  },
  {
    text: "Will Nunes Randoms",
    weight: 1,

    description: "",
  },
  {
    text: "Iconic Characters",
    weight: 1,

    description: "",
  },
  {
    text: "ISDT Corp",
    weight: 1,

    description: "",
  },
  {
    text: "Stormhawks",
    weight: 1,

    description: "",
  },
  {
    text: "Karabastards",
    weight: 1,

    description: "Includes Nitro",
  },
  {
    text: "Blue Milk Boys",
    weight: 1,

    description:
      "Includes Stitches, Milone Lass, Ezo Riss, and that Red Twi'lek",
  },
  {
    text: "Starseekers",
    weight: 1,

    description: "",
  },
];
const matchRules = [
  {
    text: "None",
    weight: 5,

    description: ":no_entry_sign: None",
  },
  {
    text: "Side Objective",
    weight: 1,

    description:
      ":grey_exclamation: Side Objective (A secondary objective that provides extra CS when completed)",
  },
  {
    text: "Use Two Special Rules",
    weight: 1,

    description:
      ":sod2_two: Use Two Special Rules (As name implies, does not count this choice)",
  },
  {
    text: "Use Two Equipment Rules",
    weight: 1,

    description: ":two: Use Two Equipment Rules (As name implies)",
  },
  {
    text: "Climactic Destiny",
    weight: 1,

    description:
      ":swtriumph: Climactic Destiny (May spend 2 Destiny Points at a time)",
  },
  {
    text: "Mild Darkness",
    weight: 3,

    description:
      ":first_quarter_moon: Mild Darkness (All Ranged combat checks suffer :setback:)",
  },
  {
    text: "Deep Darkness",
    weight: 2,

    description:
      ":new_moon: Deep Darkness (Ranged attacks suffer :setback: :setback: while melee attacks suffer :setback:)",
  },
  {
    text: "Blinding Light",
    weight: 2,

    description:
      ":sunrise: Blinding Light (All Melee combat checks suffer :setback: :setback:)",
  },
  {
    text: "Light Drizzle",
    weight: 2,

    description:
      ":white_sun_rain_cloud: Light Drizzle (Every 2 rounds the weather will randomly improve or worsen)",
  },
  {
    text: "Downpour",
    weight: 2,

    description:
      ":white_sun_rain_cloud: Downpour (Reduce visibility to Medium, :setback: :setback: on ranged combat checks, reduce :swadv:/:swthreat: cost to knock prone by 1)",
  },
  {
    text: "Thunder and Lightning",
    weight: 1,

    description:
      ":cloud_lightning: Thunder and Lightning (Imposes :setback: on all outdoor checks, zaps a random target each turn)",
  },
  {
    text: "Sandstorm",
    weight: 1,

    description:
      ":desert: Sandstorm (Reduce visibility to Short range, :setback: :setback: on melee combat checks)",
  },
  {
    text: "Frigid Cold",
    weight: 1,

    description:
      ":ice_cube: Frigid Cold (Characters suffer 2 Strain each round and :setback: :setback: on ranged combat checks unless properly clothed)",
  },
  {
    text: "Blistering Heat",
    weight: 1,

    description:
      ":fire: Blistering Heat (Characters suffer 2 Strain each round and :setback: :setback: on melee combat checks unless properly clothed)",
  },
  {
    text: "Close Combat",
    weight: 2,

    description:
      ":dagger: Close Combat (May only use Brawl, Melee, and Lightsaber weapons)",
  },
  {
    text: "Stealth Insertion",
    weight: 2,

    description:
      ":ninja~1: Stealth Insertion (Start in Stealth, use Cool for Initiative)",
  },
  {
    text: "Ambushed",
    weight: 2,

    description:
      ":ninja~1: Ambushed (Enemy Initiative goes off Cool, Allies go off Vigilance, Enemies have better positioning, Good Rewards)",
  },
  {
    text: "Allied Forces",
    weight: 1,

    description:
      ":fist: Allied Forces (Each player gains Minion Squad to command)",
  },
  {
    text: "Iconic Opponent",
    weight: 1,

    description:
      ":Vader: Iconic Opponent (A high-value target impedes the mission, Extra Rewards on elimination)",
  },
  {
    text: "Fisticuffs",
    weight: 2,

    description: ":fist: Fisticuffs (Enemies focus on Brawl attacks)",
  },
  {
    text: "Light and Agile",
    weight: 2,

    description:
      ":feather: Light and Agile (Must be under 1/2 Max Encumbrance with Armor under 2 Soak)",
  },
  {
    text: "Heavy and Durable",
    weight: 2,

    description:
      ":muscle: Heavy and Durable (Must be over 1/2 Max Encumbrance with Armor above 1 Soak)",
  },
  {
    text: "Light Vergence",
    weight: 1,

    description: ":lightSide: Light Vergence (Light Destiny counts as 2 each)",
  },
  {
    text: "Dark Vergence",
    weight: 1,

    description:
      ":darkSide: Dark Vergence (Dark Destiny counts as 2 each, Good Rewards)",
  },
  {
    text: "Fucking Portals",
    weight: 1,

    description:
      ":magic_wand: Fucking Portals (Reinforcements appear at beginning of every round, randomly placed, randomly allies or enemies, bypasses Enemy Type)",
  },
];
const matchGear = [
  {
    text: "Bring Your Own",
    weight: 5,

    description:
      ":shopping_bags: Bring Your Own (Bring all your own gear, however much or little you want)",
  },
  {
    text: "Diminishing Choices",
    weight: 1,

    description:
      ":cloud: Diminishing Choices (A selection of unique kits are available before the match)",
  },
  {
    text: "Budgeted",
    weight: 1,

    description:
      ":moneybag: Budgeted (Receive a budget of credits each for Weapons, Armor, and Items)",
  },
  {
    text: "Deployable Cover",
    weight: 1,

    description:
      ":rock: Deployable Cover (Choose the placement of 1d6 pieces of advanced cover, which grant double bonuses)",
  },
  {
    text: "One of Each",
    weight: 1,

    description:
      ":bone: One of Each (Bring 1 item for each of Weapons, Armor, and Gear)",
  },
  {
    text: "Take It Home",
    weight: 1,

    description:
      ":house: Take It Home (Keep gear looted from match with restrictions, Bad Rewards)",
  },
  {
    text: "Self-Crafted",
    weight: 1,

    description:
      ":tools: Self-Crafted (Craft your own gear to use with restrictions, but keep it after the match)",
  },
  {
    text: "Duelist's Arms",
    weight: 1,

    description:
      ":Swords: Duelist's Arms (Cannot wear armor, choose 1 of Vibrorapier or Dueling Pistol, Great Rewards)",
  },
  {
    text: "Emplacements",
    weight: 1,

    description:
      ":european_castle: Emplacements (Each team places emplaced weapons from a random list)",
  },
  {
    text: "Stashes",
    weight: 1,

    description:
      ":inbox_tray: Stashes (Turning in equipment and bodies translates to increased rewards)",
  },
  {
    text: "On-Site Procurement",
    weight: 1,

    description:
      ":Handgun: On-Site Procurement (Start with no gear, find gear littered around match area, Great Rewards)",
  },
];
const matchDifficulty = [
  {
    text: "Very Easy",
    weight: 2,

    description: "Recommended XP: 150+",
  },
  {
    text: "Easy",
    weight: 3,

    description: "Recommended XP: 300+",
  },
  {
    text: "Moderate",
    weight: 4,

    description: "Recommended XP: 450+",
  },
  {
    text: "Hard",
    weight: 3,

    description: "Recommended XP: 600+",
  },
  {
    text: "Very Hard",
    weight: 2,

    description: "Recommended XP: 750+",
  },
  {
    text: "Legendary",
    weight: 1,

    description: "Recommended XP: 900+",
  },
];
const matchIconics = [
  {
    text: "Darth Vader",
    weight: 1,

    description: "This will be a day long remembered.",
  },
  {
    text: "Emperor Palpatine",
    weight: 1,

    description: "DEW ITT",
  },
  {
    text: "Luke Skywalker",
    weight: 1,

    description: "I am a Jedi, like my father before me.",
  },
  {
    text: "Din Djarin",
    weight: 1,

    description: "I can bring you in warm, or I can bring you in cold.",
  },
  {
    text: "Ahsoka Tano",
    weight: 1,

    description: "I am no Jedi.",
  },
  {
    text: "Boba Fett",
    weight: 1,

    description: "I'm just a simple man making my way through the universe.",
  },
  {
    text: "FN-2187 'Finn'",
    weight: 1,

    description: "REEYYYYYY!!!",
  },
  {
    text: "Fennec Shand",
    weight: 1,

    description: "Make the best deal for yourself and survive.",
  },
  {
    text: "Bossk",
    weight: 1,

    description: "You're just another target.",
  },
  {
    text: "Obi-Wan Kenobi",
    weight: 1,

    description:
      "If you define yourself by the power to take life, the desire to dominate, to possess... then you have nothing.",
  },
  {
    text: "Maul",
    weight: 1,

    description:
      "You cannot imagine the depths I would go to to stay alive, fueled by my singular hatred... for you!",
  },
  {
    text: "Count Dooku",
    weight: 1,

    description: "Do control your insolence.",
  },
  {
    text: "Yoda",
    weight: 1,

    description: "My ally is the Force, and a powerful ally it is.",
  },
  {
    text: "Han Solo",
    weight: 1,

    description: "I prefer a straight fight to all this sneakin' around.",
  },
  {
    text: "Princess Leia",
    weight: 1,

    description: "Why, you stuck up, half-witted, scruffy-looking Nerf-herder!",
  },
  {
    text: "Hondo Ohnaka",
    weight: 1,

    description:
      "Insolence? We are pirates! We don’t even know what that means!",
  },
  {
    text: "Anakin Skywalker",
    weight: 1,

    description: "Hey, when I show off, it IS instructive. And inspiring.",
  },
  {
    text: "Asajj Ventress",
    weight: 1,

    description:
      "It's only the likes of me, with nothing to lose, who'll really be prepared to tear the galaxy down and start over.",
  },
  {
    text: "General Grievous",
    weight: 1,

    description: "I will grant you a warrior’s death. Prepare!”",
  },
  {
    text: "Darth Revan",
    weight: 1,

    description: "Honor is a fool's prize. Glory is of no use to the dead.",
  },
  {
    text: "Cal Kestis",
    weight: 1,
    description: "I had a bad feeling I'd see you here.",
  },
  {
    text: "Inquisitor Kestis",
    weight: 1,
    description: "Like you said... I'm persistent.",
  },
];
export {
  matchType,
  matchLocation,
  matchEnemy,
  matchGear,
  matchDifficulty,
  matchIconics,
  matchRules,
};
