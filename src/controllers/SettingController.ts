import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsServices";


class SettingsController {

    async create(request: Request, response: Response) {

        const { chat, username } = request.body

        const settingsService = new SettingsService()

        try {
            const settings = await settingsService.create({ chat, username })

            return response.json(settings)

        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }

    }

    // Lista nossos settings...
    async showBySttings(request: Request, response: Response) {

        const{ id } = request.params

        const settingsService = new SettingsService()

        try {
            const list = await settingsService.listBySettings(id)

            return response.json(list)
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }

    }

}

export { SettingsController }