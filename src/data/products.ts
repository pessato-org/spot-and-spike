// Product data for Spot and Spike

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // in cents AUD
  category: 'lead' | 'charm-pack';
  image: string;
  images: string[];
  color?: string;
  colorHex?: string;
  charms?: string[];
  inStock: boolean;
  featured: boolean;
}

// Dog Leads - 3 Colors
export const leads: Product[] = [
  {
    id: 'lead-midnight-black',
    slug: 'lead-midnight-black',
    name: 'Midnight Black Lead',
    description: 'Our signature premium dog lead in classic midnight black. Made from durable, weather-resistant material with reinforced stitching. Features our patented charm slots for endless customization.',
    price: 4000, // $40 AUD
    category: 'lead',
    image: '/images/leads/black-lead.jpg',
    images: ['/images/leads/black-lead.jpg', '/images/leads/black-lead-detail.jpg'],
    color: 'Midnight Black',
    colorHex: '#1a1a1a',
    inStock: true,
    featured: true,
  },
  {
    id: 'lead-ocean-blue',
    slug: 'lead-ocean-blue',
    name: 'Ocean Blue Lead',
    description: 'A stunning deep ocean blue lead that stands out at the park. Made from durable, weather-resistant material with reinforced stitching. Features our patented charm slots for endless customization.',
    price: 4000, // $40 AUD
    category: 'lead',
    image: '/images/leads/blue-lead.jpg',
    images: ['/images/leads/blue-lead.jpg', '/images/leads/blue-lead-detail.jpg'],
    color: 'Ocean Blue',
    colorHex: '#1e3a5f',
    inStock: true,
    featured: true,
  },
  {
    id: 'lead-sage-green',
    slug: 'lead-sage-green',
    name: 'Sage Green Lead',
    description: 'An earthy sage green lead perfect for nature lovers. Made from durable, weather-resistant material with reinforced stitching. Features our patented charm slots for endless customization.',
    price: 4000, // $40 AUD
    category: 'lead',
    image: '/images/leads/green-lead.jpg',
    images: ['/images/leads/green-lead.jpg', '/images/leads/green-lead-detail.jpg'],
    color: 'Sage Green',
    colorHex: '#7d8471',
    inStock: true,
    featured: true,
  },
];

// Charm Packs - 20 different packs with 5 charms each
export const charmPacks: Product[] = [
  {
    id: 'charm-pack-adventure',
    slug: 'charm-pack-adventure',
    name: 'Adventure Pack',
    description: 'For the explorers. 5 adventure-themed charms including a compass, mountain, tent, campfire, and hiking boot.',
    price: 2000, // $20 AUD
    category: 'charm-pack',
    image: '/images/charms/adventure-pack.jpg',
    images: ['/images/charms/adventure-pack.jpg'],
    charms: ['Compass', 'Mountain', 'Tent', 'Campfire', 'Hiking Boot'],
    inStock: true,
    featured: true,
  },
  {
    id: 'charm-pack-foodie',
    slug: 'charm-pack-foodie',
    name: 'Foodie Pack',
    description: 'For the treat lovers. 5 food-themed charms including a bone, pizza slice, donut, ice cream, and burger.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/foodie-pack.jpg',
    images: ['/images/charms/foodie-pack.jpg'],
    charms: ['Bone', 'Pizza Slice', 'Donut', 'Ice Cream', 'Burger'],
    inStock: true,
    featured: true,
  },
  {
    id: 'charm-pack-sporty',
    slug: 'charm-pack-sporty',
    name: 'Sporty Pack',
    description: 'For the athletic pups. 5 sports-themed charms including a tennis ball, frisbee, soccer ball, basketball, and trophy.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/sporty-pack.jpg',
    images: ['/images/charms/sporty-pack.jpg'],
    charms: ['Tennis Ball', 'Frisbee', 'Soccer Ball', 'Basketball', 'Trophy'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-beach',
    slug: 'charm-pack-beach',
    name: 'Beach Bum Pack',
    description: 'For the water dogs. 5 beach-themed charms including a surfboard, palm tree, sun, seashell, and beach ball.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/beach-pack.jpg',
    images: ['/images/charms/beach-pack.jpg'],
    charms: ['Surfboard', 'Palm Tree', 'Sun', 'Seashell', 'Beach Ball'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-cosmic',
    slug: 'charm-pack-cosmic',
    name: 'Cosmic Pack',
    description: 'For the stargazers. 5 space-themed charms including a rocket, moon, star, planet, and astronaut helmet.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/cosmic-pack.jpg',
    images: ['/images/charms/cosmic-pack.jpg'],
    charms: ['Rocket', 'Moon', 'Star', 'Planet', 'Astronaut Helmet'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-garden',
    slug: 'charm-pack-garden',
    name: 'Garden Pack',
    description: 'For the nature pups. 5 garden-themed charms including a flower, butterfly, ladybug, bee, and mushroom.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/garden-pack.jpg',
    images: ['/images/charms/garden-pack.jpg'],
    charms: ['Flower', 'Butterfly', 'Ladybug', 'Bee', 'Mushroom'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-music',
    slug: 'charm-pack-music',
    name: 'Music Lover Pack',
    description: 'For the melodic mutts. 5 music-themed charms including a guitar, music note, headphones, microphone, and vinyl record.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/music-pack.jpg',
    images: ['/images/charms/music-pack.jpg'],
    charms: ['Guitar', 'Music Note', 'Headphones', 'Microphone', 'Vinyl Record'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-gaming',
    slug: 'charm-pack-gaming',
    name: 'Gamer Pack',
    description: 'For the player pups. 5 gaming-themed charms including a controller, dice, joystick, pixel heart, and game cartridge.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/gaming-pack.jpg',
    images: ['/images/charms/gaming-pack.jpg'],
    charms: ['Controller', 'Dice', 'Joystick', 'Pixel Heart', 'Game Cartridge'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-holidays',
    slug: 'charm-pack-holidays',
    name: 'Holiday Pack',
    description: 'For the festive furballs. 5 holiday-themed charms including a Christmas tree, pumpkin, heart, shamrock, and firework.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/holidays-pack.jpg',
    images: ['/images/charms/holidays-pack.jpg'],
    charms: ['Christmas Tree', 'Pumpkin', 'Heart', 'Shamrock', 'Firework'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-aussie',
    slug: 'charm-pack-aussie',
    name: 'Aussie Pack',
    description: 'For the true blue pups. 5 Australian-themed charms including a kangaroo, koala, surfboard, Uluru, and boomerang.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/aussie-pack.jpg',
    images: ['/images/charms/aussie-pack.jpg'],
    charms: ['Kangaroo', 'Koala', 'Surfboard', 'Uluru', 'Boomerang'],
    inStock: true,
    featured: true,
  },
  {
    id: 'charm-pack-spooky',
    slug: 'charm-pack-spooky',
    name: 'Spooky Pack',
    description: 'For the Halloween hounds. 5 spooky-themed charms including a ghost, skull, bat, spider, and witch hat.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/spooky-pack.jpg',
    images: ['/images/charms/spooky-pack.jpg'],
    charms: ['Ghost', 'Skull', 'Bat', 'Spider', 'Witch Hat'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-royal',
    slug: 'charm-pack-royal',
    name: 'Royal Pack',
    description: 'For the regal rovers. 5 royal-themed charms including a crown, gem, castle, throne, and scepter.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/royal-pack.jpg',
    images: ['/images/charms/royal-pack.jpg'],
    charms: ['Crown', 'Gem', 'Castle', 'Throne', 'Scepter'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-tropical',
    slug: 'charm-pack-tropical',
    name: 'Tropical Pack',
    description: 'For the island pups. 5 tropical-themed charms including a pineapple, flamingo, hibiscus, toucan, and coconut.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/tropical-pack.jpg',
    images: ['/images/charms/tropical-pack.jpg'],
    charms: ['Pineapple', 'Flamingo', 'Hibiscus', 'Toucan', 'Coconut'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-retro',
    slug: 'charm-pack-retro',
    name: 'Retro Pack',
    description: 'For the vintage vibes. 5 retro-themed charms including a cassette tape, roller skate, boombox, peace sign, and lava lamp.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/retro-pack.jpg',
    images: ['/images/charms/retro-pack.jpg'],
    charms: ['Cassette Tape', 'Roller Skate', 'Boombox', 'Peace Sign', 'Lava Lamp'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-sweet',
    slug: 'charm-pack-sweet',
    name: 'Sweet Tooth Pack',
    description: 'For the candy lovers. 5 sweet-themed charms including a cupcake, lollipop, candy cane, gummy bear, and cookie.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/sweet-pack.jpg',
    images: ['/images/charms/sweet-pack.jpg'],
    charms: ['Cupcake', 'Lollipop', 'Candy Cane', 'Gummy Bear', 'Cookie'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-emoji',
    slug: 'charm-pack-emoji',
    name: 'Emoji Pack',
    description: 'Express yourself! 5 emoji-themed charms including a smiley face, heart eyes, laughing face, sunglasses, and fire.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/emoji-pack.jpg',
    images: ['/images/charms/emoji-pack.jpg'],
    charms: ['Smiley Face', 'Heart Eyes', 'Laughing Face', 'Sunglasses', 'Fire'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-paw-prints',
    slug: 'charm-pack-paw-prints',
    name: 'Paw Prints Pack',
    description: 'Classic canine style. 5 paw-themed charms including a paw print, bone, dog house, fire hydrant, and collar tag.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/paw-prints-pack.jpg',
    images: ['/images/charms/paw-prints-pack.jpg'],
    charms: ['Paw Print', 'Bone', 'Dog House', 'Fire Hydrant', 'Collar Tag'],
    inStock: true,
    featured: true,
  },
  {
    id: 'charm-pack-rainbow',
    slug: 'charm-pack-rainbow',
    name: 'Rainbow Pack',
    description: 'All the colors! 5 colorful charms in red, orange, yellow, green, and blue hearts.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/rainbow-pack.jpg',
    images: ['/images/charms/rainbow-pack.jpg'],
    charms: ['Red Heart', 'Orange Heart', 'Yellow Heart', 'Green Heart', 'Blue Heart'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-minimalist',
    slug: 'charm-pack-minimalist',
    name: 'Minimalist Pack',
    description: 'Clean and simple. 5 minimalist charms including a circle, square, triangle, line, and dot.',
    price: 2000,
    category: 'charm-pack',
    image: '/images/charms/minimalist-pack.jpg',
    images: ['/images/charms/minimalist-pack.jpg'],
    charms: ['Circle', 'Square', 'Triangle', 'Line', 'Dot'],
    inStock: true,
    featured: false,
  },
  {
    id: 'charm-pack-luxe',
    slug: 'charm-pack-luxe',
    name: 'Luxe Pack',
    description: 'Premium elegance. 5 luxe-themed charms including a diamond, gold bar, champagne, bow tie, and rose.',
    price: 2500, // $25 AUD - premium pack
    category: 'charm-pack',
    image: '/images/charms/luxe-pack.jpg',
    images: ['/images/charms/luxe-pack.jpg'],
    charms: ['Diamond', 'Gold Bar', 'Champagne', 'Bow Tie', 'Rose'],
    inStock: true,
    featured: true,
  },
];

// All products combined
export const allProducts: Product[] = [...leads, ...charmPacks];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return allProducts.filter((p) => p.featured);
}

export function getProductsByCategory(category: 'lead' | 'charm-pack'): Product[] {
  return allProducts.filter((p) => p.category === category);
}
