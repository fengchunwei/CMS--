import http from "./http.js";

function getHotList() {
    const getHotList = `/mv/all`
    return http.get(getHotList);
}
function getMv(id) {
    const getMv = `/mv/url?id=${id}`
    return http.get(getMv);
}






export {
    getHotList,
    getMv
}