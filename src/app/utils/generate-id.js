import { v4 } from 'uuid'

function GenerateId () {
  const id = v4()
  return id
}

export default GenerateId
