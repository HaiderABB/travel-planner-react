import ServerInstance from '../Config/ServerInstance';

export const UserlogIn = async (ReqBody) => {

  try {
    const axiosObject = await ServerInstance.post('/Authentication', ReqBody)
    return {
      email: axiosObject.data.email, password: axiosObject.data.password
    }
  }
  catch (err) {
    return {
      email: err.response.data.email, password: err.response.data.password
    }
  }
}