import { Database } from '@vuex-orm/core'
import Role from '../models/Role'
import User from '../models/User'

const database = new Database()

database.register(User)
database.register(Role)

export default database
