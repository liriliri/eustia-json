module.exports = function ()
{
    return function (src)
    {
        return 'exports = ' + JSON.stringify(JSON.parse(src)) + ';';
    };
};
