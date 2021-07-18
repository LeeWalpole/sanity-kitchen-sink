export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f45a127a18c6b92f54e0b9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6t67rc8n',
                  apiId: 'f6210fb5-2585-485f-b985-db9b7a74d7bc'
                },
                {
                  buildHookId: '60f45a12f4d13be6f277f40f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-furgubnc',
                  apiId: '0f0da0ec-8c3d-4ee6-bf96-4d2ebff43c4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LeeWalpole/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-furgubnc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
