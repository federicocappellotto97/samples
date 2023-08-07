import {defineField, defineType} from 'sanity'

const menuItem = defineType({
  name: 'menuItem',
  type: 'object',
  title: 'Menu Item',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
    defineField({
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [{type: 'menuItem'}],
    }),
  ],
  preview: {
    select: {
      title: 'link.label',
      subtitle: 'children',
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: Array.isArray(subtitle)
          ? subtitle.length + ` ${subtitle.length == 1 ? 'child' : 'children'}`
          : '0 children',
      }
    },
  },
})

export default menuItem
