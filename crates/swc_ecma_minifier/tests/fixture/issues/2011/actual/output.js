var ClassB, obj, value;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw TypeError("Cannot call a class as a function");
}
module.exports = (obj = ClassB = function() {
    "use strict";
    function ClassB() {
        _classCallCheck(this, ClassB);
    }
    return function(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }(ClassB.prototype, [
        {
            key: "it",
            value: function() {
                this.bb = new ClassB.MyA();
            }
        }
    ]), ClassB;
}(), value = function ClassA() {
    "use strict";
    _classCallCheck(this, ClassA);
}, "MyA" in obj ? Object.defineProperty(obj, "MyA", {
    value: value,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : obj.MyA = value, ClassB);
