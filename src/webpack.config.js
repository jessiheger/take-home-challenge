const path = require('path');

// creates an alias for the components, so when I import one later, we can use this word instead of paths
module.exports = {
    resolve: {
        alias: {
            'components': path.resolve(_dirname, 'src/components')
        },
        exptensions: ['.jsx', '.js', '.scss', '.json']
    },
};