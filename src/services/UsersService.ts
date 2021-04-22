import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repository/UsersRepository"



class UsersService {

    async create(email: string) {

        const usersRepository = getCustomRepository(UsersRepository)

        // Verificar se o usuário existe...
        const userExist = await usersRepository.findOne({
            email
        })
        
        // Se existir, retorne user...
        if (userExist) {
            return userExist
        }

        // Se não existir salvar no BD...
        const user = usersRepository.create({
            email
        })

        await usersRepository.save(user)

        return user
        
    }
}

export { UsersService }