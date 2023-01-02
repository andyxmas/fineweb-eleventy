export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '63b3351d238dde3eec34ab74',
                  title: 'Sanity Studio',
                  name: 'fineweb-eleventy-studio',
                  apiId: '4588d0a2-50af-4b1f-b858-6b7d958c1bdf'
                },
                {
                  buildHookId: '63b3351d3e9b156fbeda7fe5',
                  title: 'Blog Website',
                  name: 'fineweb-eleventy',
                  apiId: '1c43d526-987b-4ab2-8b36-5ffd2b1d279c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyxmas/fineweb-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fineweb-eleventy.netlify.app', category: 'apps'}
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
