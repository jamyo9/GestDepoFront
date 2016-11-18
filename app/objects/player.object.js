System.register(['./user.object'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var user_object_1;
    var Player;
    return {
        setters:[
            function (user_object_1_1) {
                user_object_1 = user_object_1_1;
            }],
        execute: function() {
            Player = (function (_super) {
                __extends(Player, _super);
                function Player() {
                    _super.apply(this, arguments);
                }
                return Player;
            }(user_object_1.User));
            exports_1("Player", Player);
        }
    }
});
//# sourceMappingURL=player.object.js.map