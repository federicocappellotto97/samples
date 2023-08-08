import {defineConfig, isDev, isKeySegment} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {media} from 'sanity-plugin-media'
import {CogIcon, DocumentsIcon, MenuIcon, SchemaIcon} from '@sanity/icons'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {documentInternationalization} from '@sanity/document-internationalization'
import {languageFilter} from '@sanity/language-filter'

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
    languageFilter({
      supportedLanguages: languages,
      // Select Norwegian (Bokmål) by default
      defaultLanguages: ['en'],
      // Only show language filter for document type `page` (schemaType.name)
      documentTypes: ['settings'],
      filterField: (enclosingType, member, selectedLanguageIds) => {
        // Filter internationalized arrays
        if (
          enclosingType.jsonType === 'object' &&
          enclosingType.name.startsWith('internationalizedArray') &&
          'kind' in member
        ) {
          // Get last two segments of the field's path
          const pathEnd = member.field.path.slice(-2)
          // If the second-last segment is a _key, and the last segment is `value`,
          // It's an internationalized array value
          // And the array _key is the language of the field
          const language =
            pathEnd[1] === 'value' && isKeySegment(pathEnd[0]) ? pathEnd[0]._key : null

          return language ? selectedLanguageIds.includes(language) : false
        }

        // Filter internationalized objects if you have them
        // `localeString` must be registered as a custom schema type
        if (enclosingType.jsonType === 'object' && enclosingType.name.startsWith('locale')) {
          return selectedLanguageIds.includes(member.name)
        }

        return true
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
