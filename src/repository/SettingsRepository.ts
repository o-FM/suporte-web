import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";


@EntityRepository(Setting)
class SettingsRepositories extends Repository<Setting> {}

export { SettingsRepositories }