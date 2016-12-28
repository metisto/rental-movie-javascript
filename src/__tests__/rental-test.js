
import { statement } from 'rental';
import expect from 'expect';

describe('statement', () => {

  const movies = {
    'F001': { 'title': 'Star Wars', 'code': 'regular' },
    'F002': { 'title': 'Assasin\'s creed', 'code': 'new' },
    'F003': { 'title': 'Bambi', 'code': 'childrens' },
  };

  it('should blah', () => {
    const customer = {
      'name': 'martin',
      'rentals': [
        { 'movieID': 'F001', 'days': 3 },
        { 'movieID': 'F002', 'days': 1 },
      ],
    };
    expect(statement(customer, movies)).toEqual('Rental Record for martin\n\tStar Wars\t3.5\n\tAssasin\'s creed\t3\nAmount owed is 6.5\nYou earned 2 frequent renter points\n');
  });
});
