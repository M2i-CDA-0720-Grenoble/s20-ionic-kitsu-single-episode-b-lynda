import { EntityAttributes, Titles } from ".";

export default interface EpisodeAttributes extends EntityAttributes {
  airdate: string,
  canonicalTitle: string,
  description: string,
  length: number,
  number: number,
  relativeNumber: number,
  seasonNumnber: number,
  synopsis: string,
  thumbnail?: string,
  titles: Titles,
}
