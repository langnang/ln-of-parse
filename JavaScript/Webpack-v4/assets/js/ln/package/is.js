export default {
    isArray: (obj = []) => {
        return typeof obj === "array" ? true : false;
    },
    isString: (obj = "") => {
        return typeof obj === "string" ? true : false;
    }
}