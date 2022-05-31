import * as l from './list'
import { getRandomId } from './utils'

const SERVER_ID = getRandomId()

const insert = (ram, list, value, left) => {
  const { insertedAt, sequence } = list
  const addressList = insertedAt[left] || []
  const seq =
    addressList.length > 0
      ? sequence[addressList[addressList.length - 1]] + 1
      : 0
  l.insert(ram, list, value, SERVER_ID, seq, left)
}
