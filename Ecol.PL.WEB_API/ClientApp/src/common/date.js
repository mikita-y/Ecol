import moment from "moment"
import 'moment/locale/ru'

moment.locale('ru')

export default function getDate(dateString){
    return moment.utc(dateString).format('D MMMM YYYY hh:mm:ss');
}