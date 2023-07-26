import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import user from './schemas/user'

export default defineConfig({
  name: 'default',
  title: 'youshare_jsm',

  projectId: 'pwpcdb91',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [...schemaTypes,user]
  },
})
