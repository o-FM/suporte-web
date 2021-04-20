import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../database/repositories/SettingsRepositories";


class SettingsController {

    async create(request: Request, response: Response) {

        const { chat, username } = request.body

        const settingsRepositories = getCustomRepository(SettingsRepositories)

        const settings = settingsRepositories.create({
            chat,
            username
        })

        await settingsRepositories.save(settings)

        return response.json(settings)

    }

}

export { SettingsController }