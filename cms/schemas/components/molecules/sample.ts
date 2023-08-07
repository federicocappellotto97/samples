import {defineType} from 'sanity'

export default defineType({
  name: 'sampleComponent',
  type: 'object',
  fields: [
    {
      name: 'media',
      type: 'file',
      title: 'Media',
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'format',
      type: 'string',
      title: 'Format',
      validation: (Rule) => [Rule.required()],
    },
  ],
  preview: {
    select: {
      title: 'format',
      media: 'media',
    },
  },
})
