import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repository/UsersRepository"



class UsersService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string) {

        // Verificar se o usuário existe...
        const userExist = await this.usersRepository.findOne({
            email
        })
        
        // Se existir, retorne user...
        if (userExist) {
            return userExist
        }

        // Se não existir salvar no BD...
        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user)

        return user
        
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
    
        return user;
    }
    
}

export { UsersService }