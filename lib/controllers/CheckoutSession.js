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
var CheckoutSession = /** @class */ (function () {
    function CheckoutSession() {
    }
    CheckoutSession.create = function (cb) {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, line_items, payment_method_types, mode, success_url, cancel_url, session, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, line_items = _a.line_items, payment_method_types = _a.payment_method_types, mode = _a.mode, success_url = _a.success_url, cancel_url = _a.cancel_url;
                        return [4 /*yield*/, Stripe.checkout.sessions.create({
                                payment_method_types: payment_method_types,
                                line_items: line_items,
                                mode: mode,
                                success_url: success_url,
                                cancel_url: cancel_url,
                            })];
                    case 1:
                        session = _b.sent();
                        if (cb) {
                            cb(null, session);
                        }
                        res
                            .status(200)
                            .json({ message: 'Checkout session created successfully', session: session });
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
    CheckoutSession.retrieve = function (cb) {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var sessionId, session, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sessionId = req.params.sessionId;
                        return [4 /*yield*/, Stripe.checkout.sessions.retrieve(sessionId)];
                    case 1:
                        session = _a.sent();
                        if (cb) {
                            cb(null, session);
                        }
                        res.status(200).json({ session: session });
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
    CheckoutSession.expired = function (cb) {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var sessionId, deletedSession, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sessionId = req.params.sessionId;
                        return [4 /*yield*/, Stripe.checkout.sessions.expire(sessionId)];
                    case 1:
                        deletedSession = _a.sent();
                        if (cb) {
                            cb(null, deletedSession);
                        }
                        res.status(200).json({
                            message: 'Checkout session expired successfully',
                            deletedSession: deletedSession,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
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
    return CheckoutSession;
}());
exports.default = CheckoutSession;
