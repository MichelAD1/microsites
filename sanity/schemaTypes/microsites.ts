import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'microsite',
  title: 'Microsite',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'description', type: 'text'}),
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string'},
        {name: 'subheading', type: 'text'},
        {name: 'image', type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            {name: 'heading', type: 'string'},
            {name: 'body', type: 'array', of: [{type: 'block'}]}, // Portable Text
            {name: 'icon', type: 'image'},
          ],
        },
        {
          type: 'object',
          name: 'faq',
          title: 'FAQ Item',
          fields: [
            {name: 'q', type: 'string'},
            {name: 'a', type: 'array', of: [{type: 'block'}]},
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'href', type: 'url'},
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', type: 'string'},
        {name: 'metaDescription', type: 'text'},
        {name: 'ogImage', type: 'image'},
      ],
    }),
  ],
})
