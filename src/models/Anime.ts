import { AnimeAttributes, AnimeRelationships, Entity } from ".";

export default interface Anime extends Entity {
  attributes: AnimeAttributes,
  relationships: AnimeRelationships,
}
