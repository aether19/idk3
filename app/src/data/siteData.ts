export const siteConfig = {
  name: 'Beaver Trap Outfitters',
  phone: '307.461.0655',
  location: 'Dayton, WY 82836',
  license: 'Wyoming Outfitter License #WO-2003-042',
  year: '2026',
  social: {
    instagram: 'https://instagram.com/beavertrapoutfitters',
    facebook: 'https://facebook.com/beavertrapoutfitters',
  },
};

export const navLinks = [
  { label: 'Hunts', path: '/hunts' },
  { label: 'Rates', path: '/rates' },
  { label: 'Hunt Camp', path: '/hunt-camp' },
  { label: 'Photos', path: '/photos' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export const speciesList = [
  {
    name: 'Elk Hunt',
    latin: 'Cervus canadensis',
    description: 'Trophy bull elk in the high country.',
    season: 'Fall Season',
    rate: '$6,500–$8,500',
    image: '/assets/species-elk.jpg',
    featured: true,
  },
  {
    name: 'Cow Elk Hunt',
    latin: 'Cervus canadensis',
    description: 'Quality meat hunts in accessible terrain.',
    season: 'Fall Season',
    rate: '$3,500–$4,500',
    image: '/assets/species-cow-elk.jpg',
    featured: false,
  },
  {
    name: 'Private Land Elk',
    latin: 'Cervus canadensis',
    description: 'Exclusive access. Higher success rates.',
    season: 'Fall Season',
    rate: '$7,500–$9,500',
    image: '/assets/species-private-elk.jpg',
    featured: false,
  },
  {
    name: 'Mule Deer',
    latin: 'Odocoileus hemionus',
    description: 'Big bucks in open sage and rimrock.',
    season: 'Fall Season',
    rate: '$5,500–$7,000',
    image: '/assets/species-mule-deer.jpg',
    featured: true,
  },
  {
    name: 'Whitetail Rut',
    latin: 'Odocoileus virginianus',
    description: 'Peak rut timing. River bottom hunts.',
    season: 'November',
    rate: '$4,500–$6,000',
    image: '/assets/species-whitetail.jpg',
    featured: false,
  },
  {
    name: 'Antelope',
    latin: 'Antilocapra americana',
    description: 'Fast, challenging, and uniquely Wyoming.',
    season: 'Fall Season',
    rate: '$2,500–$3,500',
    image: '/assets/species-antelope.jpg',
    featured: false,
  },
  {
    name: 'Shiras Moose',
    latin: 'Alces alces shirasi',
    description: "The trophy of a lifetime in alpine lakes country.",
    season: 'Fall Season',
    rate: 'Call for pricing',
    image: '/assets/species-moose.jpg',
    featured: true,
  },
  {
    name: 'Black Bear',
    latin: 'Ursus americanus',
    description: 'Spring spot-and-stalk in prime habitat.',
    season: 'Spring Season',
    rate: '$3,000–$4,000',
    image: '/assets/species-black-bear.jpg',
    featured: false,
  },
  {
    name: 'Mountain Lion',
    latin: 'Puma concolor',
    description: 'The most challenging hunt in the west.',
    season: 'Winter Season',
    rate: '$4,500–$6,000',
    image: '/assets/species-mountain-lion.jpg',
    featured: false,
  },
  {
    name: 'Turkey',
    latin: 'Meleagris gallopavo',
    description: "Spring Merriam's in the foothills.",
    season: 'Spring Season',
    rate: '$1,500–$2,000',
    image: '/assets/species-turkey.jpg',
    featured: false,
  },
  {
    name: 'Prairie Dog',
    latin: 'Cynomys ludovicianus',
    description: 'High-volume shooting on private land.',
    season: 'Summer Season',
    rate: '$500–$750/day',
    image: '/assets/species-prairie-dog.jpg',
    featured: false,
  },
];

export const testimonials = [
  {
    quote: "Ross put me on a 6x6 bull on day two. I've hunted with three outfitters across Wyoming. None of them come close to what Beaver Trap provides.",
    name: 'Mike D.',
    location: 'Dallas TX',
    hunt: 'Elk Hunt',
  },
  {
    quote: 'The Bighorns are unforgiving country. Ross knows every ridge, every draw, every drainage. We filled two tags in four days.',
    name: 'James W.',
    location: 'Denver CO',
    hunt: 'Mule Deer Hunt',
  },
  {
    quote: "Third year in a row booking with Ross. The horses, the camp, the food — all of it first class. The hunt is secondary to the experience at this point.",
    name: 'Tom R.',
    location: 'Phoenix AZ',
    hunt: 'Elk Hunt',
  },
  {
    quote: "Took my son on his first elk hunt. Ross made it something neither of us will ever forget. He's already asking about next year.",
    name: 'David H.',
    location: 'Houston TX',
    hunt: 'Elk Hunt',
  },
  {
    quote: "Got a Shiras moose on day three. I've waited 12 years for that tag. Ross put me in the right spot at the right time. Nothing else to say.",
    name: 'Gary M.',
    location: 'Salt Lake City UT',
    hunt: 'Moose Hunt',
  },
  {
    quote: "The mountain lion hunt was unlike anything I've ever done. Hard country, great guides, and we got the cat on the last morning.",
    name: 'Steve P.',
    location: 'Billings MT',
    hunt: 'Mountain Lion Hunt',
  },
  {
    quote: "I've hunted all over the west. Nobody runs a camp like Beaver Trap. Hot food, good horses, and guides who actually know the country.",
    name: 'Bill C.',
    location: 'Scottsdale AZ',
    hunt: 'Mule Deer Hunt',
  },
  {
    quote: "Antelope hunt was perfect for my wife's first Wyoming hunt. Ross's crew treated her like a veteran. She's hooked.",
    name: 'Kevin L.',
    location: 'Colorado Springs CO',
    hunt: 'Antelope Hunt',
  },
];

export const galleryImages = [
  { src: '/assets/gallery-1.jpg', caption: 'Bull Elk in Alpine Meadow' },
  { src: '/assets/gallery-2.jpg', caption: 'Bighorn Peaks at Sunrise' },
  { src: '/assets/gallery-3.jpg', caption: 'Mountain River Valley' },
  { src: '/assets/gallery-4.jpg', caption: 'Mule Deer in Sagebrush' },
  { src: '/assets/gallery-5.jpg', caption: 'Pronghorn on the Prairie' },
  { src: '/assets/gallery-6.jpg', caption: 'Guide in the Bighorns' },
  { src: '/assets/gallery-7.jpg', caption: 'Camp at Dusk' },
  { src: '/assets/gallery-8.jpg', caption: 'Wall Tents at Dawn' },
  { src: '/assets/gallery-9.jpg', caption: 'Mountain Meadow from Above' },
  { src: '/assets/gallery-10.jpg', caption: 'Pine Forest Light' },
  { src: '/assets/gallery-11.jpg', caption: 'Shiras Moose at Lake' },
  { src: '/assets/gallery-12.jpg', caption: 'Black Bear in the High Country' },
  { src: '/assets/gallery-13.jpg', caption: 'Mountain Lion on the Ridge' },
  { src: '/assets/gallery-14.jpg', caption: 'Wild Turkey in Spring' },
  { src: '/assets/gallery-15.jpg', caption: 'Prairie Dog Town' },
];

export const inclusions = [
  'Fully guided days in the field',
  'Horses and pack stock',
  'Camp meals and lodging',
  'Field preparation and care',
  'License application assistance',
  'Transportation from Dayton, WY',
  'Pre-hunt consultation',
  'Trophy care and packing',
];

export const notInclusions = [
  'Wyoming hunting license and tags',
  'Taxidermy and meat processing',
  'Guide gratuity (industry standard: 10-15%)',
  'Travel to Dayton, Wyoming',
  'Personal gear and weapons',
  'Trip insurance (recommended)',
];

export const campDetails = [
  {
    label: 'Lodging',
    description: 'Wall tents with wood stoves. Comfortable cots and bedding provided.',
  },
  {
    label: 'Meals',
    description: 'Three hot meals a day, prepared in camp. Coffee on before first light.',
  },
  {
    label: 'Horses',
    description: "All stock provided. Ross's guides know these horses and this terrain.",
  },
  {
    label: 'Field Prep',
    description: "Animals are field-dressed and cared for properly from the moment they're down.",
  },
];
