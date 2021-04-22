import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../repository/SettingsRepository";


interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {

    async create({ chat, username}: ISettingsCreate) {

        const settingsRepositories = getCustomRepository(SettingsRepositories)

        // SELECT * FROM settings WHERER username = "username" limit 1;
        const userAlreadExists = await settingsRepositories.findOne({
            username
        })

        if (userAlreadExists) {
            throw new Error("Usuário já cadastrado no sistema")
        }

        const settings = settingsRepositories.create({
            chat,
            username
        })

        await settingsRepositories.save(settings)
    }
}

export { SettingsService }