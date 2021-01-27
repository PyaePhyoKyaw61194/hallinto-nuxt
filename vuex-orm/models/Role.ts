import { Model } from '@vuex-orm/core'
import dayjs, { Dayjs } from 'dayjs'

// TODO: relation with Campaign, Products, Transactions
export default class Role extends Model {
  // module name
  static entity = 'roles'

  // module states
  static fields() {
    return {
      id: this.string(''),
      name: this.string(null),
      description: this.string(null).nullable(),
      createdAt: this.attr(dayjs()),
      updatedAt: this.attr(dayjs()),
      deletedAt: this.attr(null).nullable(),
    }
  }

  // states types
  id!: string
  name!: string
  description!: string | null
  createdAt!: Dayjs | any
  updatedAt!: Dayjs | any
  deletedAt!: Dayjs | any | null
}