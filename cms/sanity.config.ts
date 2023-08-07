import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {media} from 'sanity-plugin-media'
import {CogIcon, DocumentsIcon, MenuIcon, SchemaIcon} from '@sanity/icons'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {documentInternationalization} from '@sanity/document-internationalization'

const devOnlyPlugins = [getStartedPlugin()]
export const languages = [
  {id: 'en', title: 'English', flag: '🇬🇧'},
  {id: 'it', title: 'Italiano', flag: '🇮🇹'},
]

export default defineConfig({
  name: 'default',
  title: 'samples',

  projectId: 'r1xxsojg',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(
            // List all document types except "siteSettings"
            S.documentTypeListItems()
          )
          .items([
            S.listItem().title('Samples').icon(DocumentsIcon).child(S.documentTypeList('sample')),
            S.listItem()
              .title('Media types')
              .icon(SchemaIcon)
              .child(S.documentTypeList('mediatype')),
            S.divider(),
            S.listItem()
              .title('Settings')
              .icon(CogIcon)
              .id('settings')
              .child(S.document().schemaType('settings').documentId('settings')),
            S.listItem().title('Menu').icon(MenuIcon).child(S.documentTypeList('menu')),
          ]),
    }),
    visionTool(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
    internationalizedArray({
      languages: languages,
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text', 'menuItem'],
    }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: languages,
      schemaTypes: ['menu'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
