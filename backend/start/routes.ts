/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

Route.resource('test', 'testsController').apiOnly()

Route.post('/file', async ({ request }) => {
  try {
    const uploadedFile = request.file('file_upload')
    if (uploadedFile) {
      await uploadedFile.move(Application.tmpPath('uploads'))
    }
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }

})
