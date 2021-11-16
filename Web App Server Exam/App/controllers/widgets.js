const logger = require('../../config/logger');
const Mongoose = require('mongoose');
const Customers = Mongoose.model('Widgets');
getWidgets = (req, res, next) => {
    logger.log('Getting all widgets', 'info');
    res.status(200).json('Widgets retrieved');
};