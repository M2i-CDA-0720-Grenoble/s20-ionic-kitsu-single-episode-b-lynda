import { EntityAttributes, Image, Titles } from ".";

export default interface AnimeAttributes extends EntityAttributes {
  synopsis: string,
  coverImageTopOffset: number,
  titles: Titles,
  canonicalTitle: string,
  coverImage?: Image,
  abbreviatedTitles: string[],
  averageRating: string,
  userCount: number,
  favoritesCount: number,
  startDate: string,
  endDate: string,
  popularityRank: number,
  posterImage?: Image,
  ratingRank: number,
  ageRatingGuide: string,
  tba: string,
  episodeCount: number,
  episodeLength: number,
  youtubeVideoId: string,
}
