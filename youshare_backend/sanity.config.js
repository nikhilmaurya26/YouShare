import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import user from './schemas/user'
import save from './schemas/save'
import pin from './schemas/pin'
import comment from './schemas/comment'
import postedBy from './schemas/postedBy'



export default defineConfig({
  name: 'default',
  title: 'youshare_jsm',

  projectId: 'pwpcdb91',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [...schemaTypes, user, pin, comment, postedBy,save]
  },
})
