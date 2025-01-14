/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  for (let i = 0; i < transactions.length; i++) {
    const categoryIndex = ans.findIndex(obj => obj.category === transactions[i].category);

    if (categoryIndex !== -1) {
      // Category already exists, add the current transaction's price to totalSpent
      ans[categoryIndex].totalSpent += transactions[i].price;
    } else {
      // Category doesn't exist, add a new object to the array
      ans.push({ category: transactions[i].category, totalSpent: transactions[i].price });
    }
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
