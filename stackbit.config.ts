import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'react',
  nodeVersion: '18',
  contentSources: [
    {
      name: 'local',
      type: 'files',
      rootPath: './src/content',
      assetsPath: './public',
      badgeLabel: 'local'
    }
  ],
  modelExtensions: [
    {
      name: 'page',
      type: 'page',
      urlPath: '/{slug}',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true
        },
        {
          name: 'slug',
          type: 'slug',
          required: true
        },
        {
          name: 'sections',
          type: 'list',
          items: {
            type: 'model',
            models: ['hero', 'features', 'gallery', 'calendar', 'staff', 'content']
          }
        }
      ]
    },
    {
      name: 'hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true
        },
        {
          name: 'subtitle',
          type: 'text'
        },
        {
          name: 'backgroundImage',
          type: 'image'
        },
        {
          name: 'ctaText',
          type: 'string'
        },
        {
          name: 'ctaUrl',
          type: 'string'
        }
      ]
    },
    {
      name: 'staff',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true
        },
        {
          name: 'members',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              {
                name: 'name',
                type: 'string',
                required: true
              },
              {
                name: 'role',
                type: 'string'
              },
              {
                name: 'bio',
                type: 'text'
              },
              {
                name: 'image',
                type: 'image'
              },
              {
                name: 'email',
                type: 'string'
              },
              {
                name: 'logo',
                type: 'image'
              },
              {
                name: 'highlights',
                type: 'list',
                items: {
                  type: 'string'
                }
              }
            ]
          }
        }
      ]
    },
    {
      name: 'gallery',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true
        },
        {
          name: 'images',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              {
                name: 'src',
                type: 'image',
                required: true
              },
              {
                name: 'alt',
                type: 'string'
              },
              {
                name: 'caption',
                type: 'string'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'calendar',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true
        },
        {
          name: 'events',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                required: true
              },
              {
                name: 'date',
                type: 'datetime',
                required: true
              },
              {
                name: 'description',
                type: 'text'
              },
              {
                name: 'location',
                type: 'string'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'students',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true
        },
        {
          name: 'campaignInfo',
          type: 'object',
          fields: [
            {
              name: 'totalRaised',
              type: 'string'
            },
            {
              name: 'goalAmount', 
              type: 'string'
            },
            {
              name: 'progressPercentage',
              type: 'number'
            },
            {
              name: 'averagePerStudent',
              type: 'string'
            },
            {
              name: 'participatingStudents',
              type: 'number'
            }
          ]
        },
        {
          name: 'quickLinks',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string'
              },
              {
                name: 'description',
                type: 'text'
              },
              {
                name: 'link',
                type: 'string'
              }
            ]
          }
        }
      ]
    }
  ]
});