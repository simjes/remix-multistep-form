export interface Boat {
  id: number
  name: string
  height: string
  length: string
  crew: string
}

export const boats: Boat[] = [
  {
    id: 1,
    name: 'Thousand Sunny',
    height: '56m',
    length: '39m',
    crew: 'Straw Hat Pirates',
  },
  {
    id: 2,
    name: 'Sanjuan Wolf — Colossal Battleship',
    height: '180m',
    length: 'Unknown',
    crew: 'Blackbeard Pirates',
  },
  {
    id: 3,
    name: 'Thriller Bark',
    height: 'Unknown',
    length: '1953m',
    crew: 'Thriller Bark Pirates',
  },
]
