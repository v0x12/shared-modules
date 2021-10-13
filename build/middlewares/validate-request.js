"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
var express_validator_1 = require("express-validator");
var validation_error_1 = require("../errors/validation-error");
var validateRequest = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req).array();
    if (errors.length > 0) {
        throw new validation_error_1.ExpressValidatorError(errors);
    }
    next();
};
exports.validateRequest = validateRequest;
