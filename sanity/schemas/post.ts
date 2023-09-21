export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'overview',
        type: 'string',
        title: 'Overview'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'slug',
        options:{source:'title'}
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of:[{type:'block'},
            {
                type:'image',
                fields:[{type:'text',name:'alt',title:'Alternative text'}]
            }
        ]
      },
      {
        title: 'cover',
        name: 'cover',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      }
    ]
  }