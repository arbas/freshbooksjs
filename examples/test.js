/*
 *
 * This requires your "API URL" and "Authentication Token".
 * To get these variables, open FreshBooks and go to
 * My Account > FreshBooks API.
 *
 */

var FreshBooks = require('../'),
    apiUrl = "https://prattsj.freshbooks.com/api/2.1/xml-in",
    apiToken = "73d116ebd5595547024879435b0eb614";

var freshbooks = new FreshBooks(apiUrl, apiToken);

var data = {
    task_id: 3,
    //tax_id: 479,
    time_entry_id: 2218091,
    project_id: 23976,
    hours: 111.11
    //name: 'VAT????????'
    //client_id: 108729,
    //payment_id: 347495,
    //project_id: 23977,
    //name: 'Testy Test 2',
    //bill_method: 'staff-rate'
    //invoice_id: '00001185780'
    //amount: 1000,
    //staff_id: 1,
    //category_id: 1,
    //expense_id: '00000493848',
    //notes: 'This is a test for the FreshBooks-Google Docs integration prototype'
    //notes: 'This is a test for the FreshBooks-Google Docs integration prototype (updated!)'
};

freshbooks.time_entry.create(data, function(error, result) {
    if (error) console.log(error);
    if (result) console.log(result);
});
