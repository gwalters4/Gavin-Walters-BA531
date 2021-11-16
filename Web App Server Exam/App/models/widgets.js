const Mongoose = require('mongoose');
const Widgets = Mongoose.model('Widgets');

getWidgets = (req, res, next) => {
    logger.log('Getting all Widgets', 'info');
    const query = Widgets.find({}, (error, Widgets) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(Widgets);
        }
    })
};

getWidget = (req, res, next) => {
    logger.log('Getting Widget ' + req.params.id, 'info');
    const query = Widgets.findOne({ _id: req.params.id }, (error, Widget) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(Widget);
        }
    })
};

createWidget = (req, res, next) => {
    logger.log('Create Widget');
    let customer = new Widgets(req.body);
    customer.save().then(result => {
        res.status(200).json(result);
    });
}

updateWidget = (req, res, next) => {
    Widgets.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, safe: true, 
multi: false }, (error, Widget) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(Widget);
        }
    })
}

deleteWidget = (req, res, next) => {
    Customers.remove({ _id: req.params.id }, (error, customer) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(Widget);
        }
    });
}
module.exports = updateWidget, createWidget, getWidget, getWidgets, deleteWidget;