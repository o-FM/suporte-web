import { response } from "express"
import { getCustomRepository, Repository } from "typeorm"
import { Connection } from "../entities/Connection"
import { ConnectionRepository } from "../repository/ConnectionRepository"

interface IConnectionCreate {

    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}

class ConnectionService {

    private connectionRepository: Repository<Connection>

    constructor() {
        this.connectionRepository = getCustomRepository(ConnectionRepository)
    }

    async create({socket_id, user_id, admin_id, id}: IConnectionCreate) {

        try {
            const connection = this.connectionRepository.create({
                socket_id,
                user_id,
                admin_id,
                id
            })
    
            await this.connectionRepository.save(connection)
    
            return connection

        } catch (error) {

            return response.status(400).json({
                message: error.menssage
            })
            
        }
    }

}

export { ConnectionService }