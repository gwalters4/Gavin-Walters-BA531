const express = require('express');
const router = express.Router();
const widgetController = require('../controllers/widgets');
router.get('/', widgetController.getWidgets);
router.get('/', widgetController.getWidget);
router.get('/', widgetController.createWidget);
router.get('/', widgetController.updagteWidget);
router.get('/', widgetController.deleteWidget);