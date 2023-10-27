"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stripe_1 = __importDefault(require("stripe"));
var Stripe = new stripe_1.default(process.env.STRIPE_APIKEY);
var Charge = /** @class */ (function () {
    function Charge() {
    }
    Charge.create = function (cb) {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, amount, currency, source, description, charge, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, amount = _a.amount, currency = _a.currency, source = _a.source, description = _a.description;
                        return [4 /*yield*/, Stripe.charges.create({
                                amount: amount,
                                currency: currency,
                                source: source,
                                description: description,
                            })];
                    case 1:
                        charge = _b.sent();
                        if (cb) {
                            cb(null, charge);
                        }
                        res.status(200).json({ message: 'Charge created successfully', charge: charge });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        if (cb) {
                            cb(error_1, null);
                        }
                        res.status(500).json({ error: 'Internal server error' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
    Charge.retrieve = function (cb) {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var chargeId, charge, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        chargeId = req.params.chargeId;
                        return [4 /*yield*/, Stripe.charges.retrieve(chargeId)];
                    case 1:
                        charge = _a.sent();
                        if (cb) {
                            cb(null, charge);
                        }
                        res.status(200).json({ charge: charge });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        if (cb) {
                            cb(error_2, null);
                        }
                        res.status(500).json({ error: 'Internal server error' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
    Charge.update = function (cb) {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, chargeId, metadata, charge, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, chargeId = _a.chargeId, metadata = _a.metadata;
                        return [4 /*yield*/, Stripe.charges.update(chargeId, {
                                metadata: metadata,
                            })];
                    case 1:
                        charge = _b.sent();
                        if (cb) {
                            cb(null, charge);
                        }
                        res.status(200).json({ message: 'Charge updated successfully', charge: charge });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        if (cb) {
                            cb(error_3, null);
                        }
                        res.status(500).json({ error: 'Internal server error' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
    Charge.refund = function (cb) {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var chargeId, refund, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        chargeId = req.params.chargeId;
                        return [4 /*yield*/, Stripe.refunds.create({
                                charge: chargeId,
                            })];
                    case 1:
                        refund = _a.sent();
                        if (cb) {
                            cb(null, refund);
                        }
                        res
                            .status(200)
                            .json({ message: 'Charge refunded successfully', refund: refund });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        if (cb) {
                            cb(error_4, null);
                        }
                        res.status(500).json({ error: 'Internal server error' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
    return Charge;
}());
exports.default = Charge;
