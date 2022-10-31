import API from '../service/api.js'

const fetchProducs = async () => {
  const response = await fetch(API).catch((error) => {
    console.log(error)
    if (response) {
      return response.json()
    }
    return response
  })
}
export default fetchProducs
