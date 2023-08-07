import {defineType, defineField} from 'sanity'
import {SchemaIcon} from '@sanity/icons'

export default defineType({
  name: 'mediatype',
  type: 'document',
  title: 'Media Types',
  icon: SchemaIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    }),
  ],
})
