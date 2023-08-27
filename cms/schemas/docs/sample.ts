import {defineType, defineField} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

export default defineType({
  name: 'sample',
  type: 'document',
  title: 'Samples',
  icon: DocumentsIcon,
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
    defineField({
      name: 'preview',
      type: 'file',
      title: 'Preview',
    }),
    defineField({
      title: 'Samples',
      name: 'samples',
      type: 'array',
      of: [{type: 'sampleComponent'}],
      options: {
        sortable: true,
      },
    }),
    defineField({
      title: 'Type',
      name: 'mediatype',
      type: 'reference',
      to: [{type: 'mediatype'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'mediatype.name',
    },
  },
})
