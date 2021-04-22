import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepositories } from "../repository/SettingsRepository";


interface ISettingsCreate {
    chat: boolean;
    username: string;
    // id: string;
}

class SettingsService {

    private settingsRepositories: Repository<Setting>

    constructor() {
        this.settingsRepositories = getCustomRepository(SettingsRepositories)
    }

    async create({ chat, username}: ISettingsCreate) {

        // SELECT * FROM settings WHERER username = "username" limit 1;
        const userAlreadExists = await this.settingsRepositories.findOne({
            username
        })

        if (userAlreadExists) {
            throw new Error("Usuário já cadastrado no sistema")
        }

        const settings = this.settingsRepositories.create({
            chat,
            username
        })

        await this.settingsRepositories.save(settings)
    }

    async listBySettings(id: string) {

        const list = this.settingsRepositories.find({
            id
        })

        return list
    }
}

export { SettingsService }