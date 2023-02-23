//1)

const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const prompt = require('prompt-sync')();

const csvWriter = createCsvWriter({
  path: 'shopping_list.csv',
  header: [
    { id: 'item', title: 'Item' },
    { id: 'quantity', title: 'Quantity' },
  ],
});

let shoppingList = [];

function addItem() {
  const item = prompt('Enter item name: ');
  const quantity = prompt('Enter quantity: ');

  const newItem = {
    item: item,
    quantity: quantity,
  };

  shoppingList.push(newItem);
}

function removeItem() {
  const index = prompt('Enter index of item to remove: ');
  shoppingList.splice(index, 1);
}

function printList() {
  console.log('Shopping List:');
  console.log('--------------');

  shoppingList.forEach((item, index) => {
    console.log(`${index}: ${item.item} (${item.quantity})`);
  });
}

function saveList() {
  csvWriter.writeRecords(shoppingList).then(() => {
    console.log('Shopping list has been saved to shopping_list.csv');
  });
}

function loadList() {
  shoppingList = [];

  fs.createReadStream('shopping_list.csv')
    .pipe(csv())
    .on('data', (row) => {
      shoppingList.push(row);
    })
    .on('end', () => {
      console.log('Shopping list has been loaded from shopping_list.csv');
    });
}

function showMenu() {
  console.log('');
  console.log('Select an action:');
  console.log('1. Add item');
  console.log('2. Remove item');
  console.log('3. Print list');
  console.log('4. Save list');
  console.log('5. Load list');
  console.log('6. Exit');
  console.log('');

  const choice = prompt('Enter choice: ');

  switch (choice) {
    case '1':
      addItem();
      break;
    case '2':
      removeItem();
      break;
    case '3':
      printList();
      break;
    case '4':
      saveList();
      break;
    case '5':
      loadList();
      break;
    case '6':
      console.log('Goodbye!');
      return;
    default:
      console.log('Invalid choice');
  }

  showMenu();
}

showMenu();


//2)
