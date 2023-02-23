//Створити програму, яка дозволить керувати списком покупок і зберігати його у csv файл.
//1)﻿﻿Функція для додавання продуктів у список (csv файл)

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'shopping-list.csv',
    header: [
        {id: 'id', title: 'ID'},
        {id: 'name', title: 'Назва'},
        {id: 'quantity', title: 'Кількість'},
        {id: 'price', title: 'Ціна'}
    ]
});

let shoppingList = [];

function addProduct(name, quantity, price) {
    const id = shoppingList.length + 1;
    shoppingList.push({ id, name, quantity, price });

    csvWriter.writeRecords(shoppingList)
        .then(() => console.log('Продукт додано до списку.'))
        .catch(() => console.log('Помилка збереження у файл.'));
}


//2)﻿﻿Функція для отримання даних про продукт за його унікальним ідентифікатором

const csv = require('csv-parser');
const fs = require('fs');

function getProductById(id) {
  let product = null;

  fs.createReadStream('shopping-list.csv')
    .pipe(csv())
    .on('data', (data) => {
      if (data.id == id) {
        product = data;
      }
    })
    .on('end', () => {
      if (product) {
        console.log(product);
      } else {
        console.log('Продукт з таким ID не знайдено.');
      }
    });
}


//3)﻿﻿Функція для видалення продукту зі списку (csv файлу) за його унікальним ідентифікатором

const csv = require('csv-parser');
const fs = require('fs');
const { Transform } = require('stream');

function deleteProductById(id) {
  const readStream = fs.createReadStream('shopping-list.csv');
  const writeStream = fs.createWriteStream('temp.csv');

  readStream
    .pipe(csv())
    .pipe(new Transform({
      objectMode: true,
      transform: function (data, _, cb) {
        if (data.id !== id) {
          this.push(data);
        }
        cb();
      }
    }))
    .pipe(writeStream);

  writeStream.on('finish', () => {
    fs.renameSync('temp.csv', 'shopping-list.csv');
    console.log(`Продукт з ID ${id} успішно видалено.`);
  });
}


//4)﻿﻿Функція для зміни продукту за його унікальним ідентифікатором

const csv = require('csv-parser');
const fs = require('fs');
const { Transform } = require('stream');

function updateProductById(id, newProductData) {
  const readStream = fs.createReadStream('shopping-list.csv');
  const writeStream = fs.createWriteStream('temp.csv');

  readStream
    .pipe(csv())
    .pipe(new Transform({
      objectMode: true,
      transform: function (data, _, cb) {
        if (data.id === id) {
          data.name = newProductData.name || data.name;
          data.quantity = newProductData.quantity || data.quantity;
          data.price = newProductData.price || data.price;
        }
        this.push(data);
        cb();
      }
    }))
    .pipe(writeStream);

  writeStream.on('finish', () => {
    fs.renameSync('temp.csv', 'shopping-list.csv');
    console.log(`Продукт з ID ${id} успішно оновлено.`);
  });
}

