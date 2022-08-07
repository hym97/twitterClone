//create users to test
const psyduck = {avatar:`https://www.pngitem.com/pimgs/m/177-1772639_psyduck-pokemon-character-vector-art-pokemon-png-psyduck.png`,
    userName:{userId:"Psyduck#0054", userDisplayedName:"Psyduck"}, certified:true, time:"4 hours ago",promoted:true,
    link:"#", desc:"this is a psyduck"};

const persian = {avatar: `https://archives.bulbagarden.net/media/upload/1/13/053Persian.png`,
    userName:{userId:"Persian#0053", userDisplayedName: "Persian"}, certified: false, time: "Yesterday", promoted: false,
    link:"#"};

const rowlet = {avatar: `https://archives.bulbagarden.net/media/upload/7/74/722Rowlet.png`,
    userName:{userId:"Rowlet#0722", userDisplayedName: "Rowlet"}, certified: false, time: "10 hours ago", promoted: false,
    link:"#"};

const meltan = {avatar: `https://archives.bulbagarden.net/media/upload/d/d1/808Meltan.png`,
    userName:{userId:"Meltan#0808", userDisplayedName: "Meltan"}, certified: false, time: "10 hours ago", promoted: false,
    link:"#"};

const content54 = "Psyduck is a yellow Pokémon resembling a duck or a bipedal platypus. " +
    "On top of its head are three thick strands of black hair, and it has a wide, flat cream-colored beak." +
    " Psyduck's eyes seem vacant and have tiny pupils. Its legs and tail are stubby, and it has cream-colored webbed feet. " +
    "There are three claws on each of its hands..";

const content53 = "Persian is a large, quadrupedal, feline Pokémon. Its fur is pale tan with the exception of its black-rimmed ears." +
    "It has a short muzzle with a small, black nose, red eyes with slit pupils, rounded ears, " +
    "a pair of pointed teeth in its upper jaw, and three whiskers on either side of its face."

const content722 = "Rowlet is a small, avian Pokémon resembling a young owl with a round body and short legs. " +
    "Its plumage is primarily beige with a white underside and facial disc. The facial disc itself is in the shape of two overlapping circles. " +
    "It has large black eyes and a stubby beak."

const content808 = "Meltan is a small Pokémon with a silvery body of liquid metal." +
    " Its head is hard and resembles a golden hexagonal nut, with a small black sphere floating inside. " +
    "This sphere serves as its eye. It has a red tail that resembles an electrical wire with two tiny protrusions at the " +
    "end."


//create meta data
const metaRowlet = "https://www.nicepng.com/png/full/166-1665983_rowlet-png-pokmon.png"
const metaPsyduck = "https://www.serebii.net/newpokemonsnap/photodex/star/psyduck4.jpg"
const metaPersian = "https://archives.bulbagarden.net/media/upload/thumb/f/f2/Persian_anime.png/250px-Persian_anime.png"
const metaMeltan = "https://archives.bulbagarden.net/media/upload/thumb/9/98/Meltan_headless.png/1200px-Meltan_headless.png"

const trendings1 = {prefix:"Trendings",suffix:""};
const trendings2 = {prefix:"Trendings", suffix: "in Maryland"}

const footer1 = {content:"1,234 tweets"}
const footer2 = {content:"7,578 tweets"}

const firstPart = [{header:{user:psyduck}, content:content54, footer:null, meta:metaPsyduck},
    {header:{user:rowlet}, content:content722, footer:null, meta:metaRowlet}
,{header:{trendings:trendings1}, content:"Delicious Sandwiches", footer:footer1, meta:null},
    {header: {trendings:trendings2}, content: "Raining", footer: footer2, meta:null}]

const secondPart = [{user:psyduck},{user:meltan},{user:rowlet}]
const footerInfo = [{name:"Terms of Service", link:"#"}, {name:"Privacy Policy", link:"#"},
    {name:"Cookie Policy", link:"#"},{name:"Accessibility", link:"#"}, {name:"Ads info", link:"#"},{name:"More", link:"#"}]
export {firstPart,secondPart, footerInfo}