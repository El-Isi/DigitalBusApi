import { encryptData } from "../../config/cripto";

class ErrorResponse {
    constructor(error?: any) {
        this.error = error;
    }
    error?: any;
}

export default ErrorResponse;
