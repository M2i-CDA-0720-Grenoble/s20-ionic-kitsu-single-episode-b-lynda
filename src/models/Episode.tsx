import { Entity, EpisodeAttributes } from ".";

export default interface Episode extends Entity {
  attributes: EpisodeAttributes,
}
