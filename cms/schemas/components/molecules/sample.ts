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
    {
      name: 'resolution',
      type: 'string',
      title: 'Resolution',
      validation: (Rule) => [Rule.required()],
      options: {
        list: [
          {value: 'sd', title: 'SD'},
          {value: 'hd', title: 'HD'},
          {value: '4k', title: '4K'},
        ].map(({title, value}) => ({title, value})),
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      title: 'format',
      media: 'media',
      subtitle: 'resolution',
    },
  },
})
