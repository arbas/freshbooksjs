/*
 *
 * This requires your "API URL" and "Authentication Token".
 * To get these variables, open FreshBooks and go to
 * My Account > FreshBooks API.
 *
 */

var FreshBooks = require('../'),
    apiUrl = "YOUR_URL",
    apiToken = "YOUR_TOKEN";

var freshbooks = new FreshBooks(apiUrl, apiToken);

var data = {
    email: 'test@testaddy.com',
    contacts: function(){
        return [{
            contact: {
                first_name: 'first',
                last_name: 'last',
                email: 'another.test@testaddy.com'
            }
        },{
            contact: {
                first_name: 'john',
                last_name: 'done',
                email: 'second.email@testaddy.com'
            }
        }]
    }
};

freshbooks.client.create(data, function(error, client) {
    if (error) console.log(error);
    if (client) console.log(client);
});
