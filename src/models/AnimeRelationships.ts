import { Episode } from ".";

export default interface AnimeRelationships {
  episodes: {
    links: {
      self: string,
      related: string,
    }
    data?: Episode[],
  }
}
