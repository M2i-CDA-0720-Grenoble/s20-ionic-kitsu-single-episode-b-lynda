import { EntityAttributes } from ".";

export default interface Entity {
  id: string,
  type: string,
  links: {
    self: string,
  },
  attributes: EntityAttributes,
  relationships: any,
}
