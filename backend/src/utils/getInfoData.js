import _ from 'lodash'
const getInfoData = (object = {}, filed = []) => {
    return _.pick(object, filed)
}
export default getInfoData