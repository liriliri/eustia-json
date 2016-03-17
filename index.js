module.exports = function ()
{
    return function (src, modName)
    {
        return modName + ' = ' + JSON.stringify(JSON.parse(src)) + ';';
    };
};