// Built by eustia.
(function(root, factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define([], factory);
    } else if (typeof module === 'object' && module.exports)
    {
        module.exports = factory();
    } else { root._ = factory() }
}(this, function ()
{
        var _ = {};

    if (typeof window === 'object' && window._) _ = window._;

    /* ------------------------------ data ------------------------------ */

    var data = _.data = (function (exports)
    {
        exports = {"test":1,"data":true};

        return exports;
    })({});

    return _;
}));