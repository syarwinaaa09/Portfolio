import { type SchemaTypeDefinition } from 'sanity'

import experience from "./schemas/experience"
import skill from "./schemas/skill"
import pageInfo from './schemas/pageInfo'
import social from "./schemas/social"
import project from "./schemas/project"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, pageInfo, experience, social, project],
}
