# wtd-api
wtd-api is an api made with mock data to be used for a future project. It is a rest api containing tables for user information, 
credit card information, transaction history, and fixed expenses.

this api can be found on localhost:3000. 

### Endpoints 

user table:

##### GET /users -
returns list of 30 users
and includes the following information:

id - unique number id
first name - text containing first name of user
last name - text containing last name of user
email - text containing user's email address for signing in
password - text containing user's password (since this is not real data, it is not protected) for sign in
monthly income - integer representing user's monthly income. (120000 = $12,000.00)

##### GET /users/:id - 
returns a specific user's information
includes following information: 

id - unique number id
first name - text containing first name of user
last name - text containing last name of user
email - text containing user's email address for signing in
password - text containing user's password (since this is not real data, it is not protected) for sign in
monthly income - integer representing user's monthly income. (120000 = $12,000.00)

##### GET /credit_cards -
returns list of all credit cards
includes the following information:

id - unique number id
type - text containing provider name of user's credit card (ex: 'Visa')
user id - unique number id of the user
last four - last four numbers on the credit card

##### GET /fixed_expenses - 
returns all fixed expenses
includes the following information: 

id- unique number id
type - text containing the description of fixed expense (ex: 'rent')
amount - integer for the amount of money the fixed expense costs each month. (ex: 40000 = $400.00)
user id - unique number id of the user 

##### GET /users/:user_id/credit_cards -
returns the credit card information of a specific user
includes the following information: 

id - unique number id of the credit card
type - text containing provider name of user's credit card (ex: 'Visa')
user id - unique number id of the user
last four - last four digits of the user's credit card number

##### GET users/:user_id/transactions - 
returns all transactions pertaining to a specific user
includes the following information:

id - unique number id
date - date of the transaction
description - text containing additional information about the transaction (ex: 'small coffee bought at The Market')
credit card id: unique number id of the credit card that was used
user id: unique number id of the user

##### GET /users/:user_id/fixed_expenses - 
returns all of the fixed expenses of a specific user
includes the following information: 

id: unique number id
type: text containing the description of fixed expense (ex: 'rent')
amount - integer for the amount of money the fixed expense costs each month. (ex: 40000 = $400.00)
user id - unique number id of the user 

##### POST /users -
adds a new user to the list of all users
adds the followig information: 

id - unique number id
first name - text containing first name of user
last name - text containing last name of user
email - text containing user's email address for signing in
password - text containing user's password (since this is not real data, it is not protected) for sign in
monthly income - integer representing user's monthly income. (120000 = $12,000.00)

##### POST /credit_cards - 
adds a new credit card to the list of all credit cards
adds the following information: 

id - unique number id of the credit card
type - text containing provider name of user's credit card (ex: 'Visa')
user id - unique number id of the user
last four - last four digits of the user's credit card number

##### POST /users/:user_id/fixed_expenses - 
adds a new fixed expense for a specific user
adds the following information: 

id: unique number id
type: text containing the description of fixed expense (ex: 'rent')
amount - integer for the amount of money the fixed expense costs each month. (ex: 40000 = $400.00)
user id - unique number id of the user 

##### PUT /users/:id - 
updates/changes information on a specific user
can update any the following information: 

first name - text containing first name of user
last name - text containing last name of user
email - text containing user's email address for signing in
password - text containing user's password (since this is not real data, it is not protected) for sign in
monthly income - integer representing user's monthly income. (120000 = $12,000.00)

##### PUT /fixed_expenses/:id - 
updates/changes information on a specific fixed expense
can update any of the following information: 

type: text containing the description of fixed expense (ex: 'rent')
amount - integer for the amount of money the fixed expense costs each month. (ex: 40000 = $400.00)


##### PUT /credit_cards/:id - 
updates/changes information on a specific credit card
can update any of the following information: 

type - text containing provider name of user's credit card (ex: 'Visa')
last four - last four digits of the user's credit card number

##### DELETE /transactions/:id' - 
deletes information for a specific transaction
deletes the following information: 

id - unique number id
date - date of the transaction
description - text containing additional information about the transaction (ex: 'small coffee bought at The Market')
credit card id: unique number id of the credit card that was used
user id: unique number id of the user

##### DELETE /fixed_expenses/:id
deletes a specific fixed expense
deletes the following information: 

id: unique number id
type: text containing the description of fixed expense (ex: 'rent')
amount - integer for the amount of money the fixed expense costs each month. (ex: 40000 = $400.00)
user id - unique number id of the user 


##### DELETE /credit_cards/:id
deletes information from a specific credit card
deletes the following information: 

id - unique number id of the credit card
type - text containing provider name of user's credit card (ex: 'Visa')
user id - unique number id of the user
last four - last four digits of the user's credit card number


### endpoint examples 

##### /users: 

`{
    id: 1,
    first_name: 'Joe',
    last_name: 'Fox',
    email: 'NY152@aol.com',
    password: 'brinkley',
    monthly_income: 1000000
 }`
 
 ##### /credit_cards:
 `{
    id: 1,
    type: 'Amex'
    user_id: 12,
    last_four: '1234'
 }`
 
 ##### /fixed_expenses
 
 `{ 
   id: 1,
   type: 'Amazon Prime',
   amount: 1000,
   user_id: 12
 }`
 
 ##### /transactions
 
 `{ 
    id: 1,
    date: '12-25-2017',
    description: 'Party dress from Nordstrom'
    credit_card_id: 14,
    user_id: 12
  }`
    

### errors

404 Not Found - specific user, transaction, credit card, or fixed expense does not exist in the database
500 Internal Error - error found with the server

### Standard JSON API

  I did not include a 'type' attribute for every data table, like the API docs suggest, because I found that some tables did not need
  information about the type (for example, a 'type' would not make sense for the 'transactions' table, although I included a 
  'description' attribute for more information). However, I did include an 'id' attribute for every table. 
  
  I did not specify which characters were allowed to be used for each attribute. Although users should not be able to use certain characters 
  while filling out specific attributes, (ex: numbers/symbols should not be used for 'first_name', 'last_name' etc.) I did not include
  any disabling of characters because of time contraints. 
  
  

