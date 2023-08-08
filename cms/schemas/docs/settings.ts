import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'settings',
  type: 'document',
  title: 'Settings',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'internationalizedArrayText',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title?.[0]?.value,
      }
    },
  },
})
