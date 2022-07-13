import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {
  public async index(_ctx: HttpContextContract) {
    return { message: 'Returned index' }
  }

  public async store({ request }: HttpContextContract) {
    return { requestReceived: request.body() }
  }

  public async show({ params }: HttpContextContract) {
    return { message: 'GET ID ' + params.id }
  }

  public async update({ params }: HttpContextContract) {
    return { message: 'PUT/PATCH ' + params.id }
  }

  public async destroy({ params }: HttpContextContract) {
    return { message: 'DELETE' + params.id }
  }
}
