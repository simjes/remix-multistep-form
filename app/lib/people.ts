export const names = [
  'Trafalgar Law',
  'Shanks',
  'Boa',
  'Kaido',
  'Buggy',
  'Linlin',
]

export interface Person {
  id: number
  name: string
}

export const people: Person[] = names.map((name, index) => ({
  id: index + 1,
  name,
}))
