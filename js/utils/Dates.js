import Moment from 'moment';

module.exports = {
	formatDate: function(dateToFormat) {
		const dateTimeFormat = "MMMM Do YYYY, h:mm:ss a";
		return Moment(dateToFormat).format(dateTimeFormat);
	}
};