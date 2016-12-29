# Rental Movie refactoring

Source: http://www.martinfowler.com/articles/refactoring-video-store-js/

## Current situation

Currently the program manage a video store.
The `statement` method prints out a simple text output of a rental statement

A customer record:

    {
      "name": "Jhon Doe",
      "rentals": [
        {"movieID": "F001", "days": 3},
        {"movieID": "F002", "days": 1},
      ]
    }

The movies structure looks like this:

    {
      'F001': { 'title': 'Star Wars', 'code': 'regular' },
      'F002': { 'title': 'Assasin\'s creed', 'code': 'new' },
      'F003': { 'title': 'Bambi', 'code': 'childrens' },
    };

The rental statement is :

    Rental Record for Jhon Doe
      Star Wars 3.5
      Assasin's creed  3
    Amount owed is 6.5
    You earned 2 frequent renter points


## Evolution

The owner of the video store wants to have also an HTML version of the rental statement:

    <h1>Rental Record for <em>Jhon Doe</em></h1>
    <table>
      <tr><td>Star Wars</td><td>3.5</td></tr>
      <tr><td>Assasin's creed</td><td>3</td></tr>
    </table>
    <p>Amount owed is <em>6.5</em></p>
    <p>You earned <em>2</em> frequent renter points</p>

Note: do not remove the text version
