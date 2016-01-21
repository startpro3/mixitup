/**
 * @constructor
 * @memberof    mixitup
 * @private
 * @since       2.0.0
 */

mixitup.ClickTracker = function() {
    this.execAction('constructor', 0);

    this.filterToggle   = {};
    this.multiMix       = {};
    this.filter         = {};
    this.sort           = {};

    this.execAction('constructor', 1);

    h.seal(this);
};

mixitup.ClickTracker.prototype = new mixitup.BasePrototype();