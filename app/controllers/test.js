import { testService } from "../services";
import RESPONSE from "../middlewares/response";
import ERRORCODE from "../constants/errorCode";
import Logger from "../utils/logger";

const test = async (request, response, next) => {
  try {
    const { content } = request.body;
    const data = await testService.test(content);
    return RESPONSE.message(response, { ...ERRORCODE.SUCCESSFUL, data });
  } catch (error) {
    Logger.error("create new account error: ", error);
    return RESPONSE.message(response, ERRORCODE.ERROR_SERVER);
  }
};

export default {
  test
};