const categories = {
      animali: ['Dog', 'Cat', 'Bird', 'Fish', 'Elephant', 'Lion', 'Tiger', 'Giraffe', 'Monkey', 'Gorilla', 'Zebra', 'Horse', 'Cow', 'Pig', 'Sheep', 'Goat', 'Rabbit', 'Squirrel', 'Mouse', 'Rat', 'Bear', 'Wolf', 'Fox', 'Deer', 'Moose', 'Kangaroo', 'Koala', 'Panda', 'Penguin', 'Dolphin', 'Whale', 'Shark', 'Octopus', 'Jellyfish', 'Turtle', 'Crocodile', 'Alligator', 'Snake', 'Lizard', 'Frog', 'Toad', 'Butterfly', 'Bee', 'Ant', 'Spider', 'Scorpion', 'Crab', 'Lobster', 'Shrimp', 'Starfish', 'Seagull', 'Eagle', 'Owl', 'Falcon', 'Parrot', 'Peacock', 'Flamingo', 'Swan', 'Duck', 'Goose', 'Chicken', 'Rooster', 'Turkey', 'Pigeon', 'Bat', 'Hedgehog', 'Hamster', 'Guinea pig', 'Chinchilla', 'Ferret', 'Rabbit', 'Parakeet', 'Canary', 'Goldfish', 'Betta fish', 'Jellyfish', 'Clownfish', 'Seahorse', 'Stingray', 'Lobster', 'Crab', 'Shrimp', 'Squid', 'Koala', 'Kangaroo', 'Platypus', 'Tasmanian devil', 'Wombat', 'Emu', 'Quokka', 'Cheetah', 'Leopard', 'Hyena', 'Hippopotamus', 'Rhinoceros', 'Gorilla', 'Chimpanzee', 'Orangutan', 'Lemur', 'Meerkat'],
      colori: ['Amaranth', 'Amber', 'Apricot', 'Aquamarine', 'Azure', 'Beige', 'Black', 'Blue', 'Blush', 'Bronze', 'Brown', 'Burgundy', 'Cerulean', 'Champagne', 'Chartreuse', 'Chocolate', 'Cobalt', 'Copper', 'Coral', 'Crimson', 'Cyan', 'Emerald', 'Fuchsia', 'Gold', 'Gray', 'Green', 'Indigo', 'Ivory', 'Jade', 'Lavender', 'Lilac', 'Lime', 'Magenta', 'Maroon', 'Mauve', 'Navy', 'Olive', 'Orange', 'Peach', 'Periwinkle', 'Pink', 'Plum', 'Purple', 'Red', 'Rose', 'Ruby', 'Sapphire', 'Scarlet', 'Silver', 'Teal', 'Turquoise', 'Violet', 'White', 'Yellow'],
      cibi: ['Bread', 'Cheese', 'Pasta', 'Rice', 'Meat', 'Fish', 'Chicken', 'Beef', 'Pork', 'Lamb', 'Vegetables', 'Fruits', 'Salad', 'Sandwich', 'Soup', 'Pizza', 'Burger', 'French fries', 'Sushi', 'Curry', 'Tacos', 'Burrito', 'Pancakes', 'Waffles', 'Eggs', 'Bacon', 'Pancetta', 'Ham', 'Sausage', 'Steak', 'Ribs', 'Lobster', 'Shrimp', 'Crab', 'Oysters', 'Clams', 'Mussels', 'Scallops', 'Salmon', 'Tuna', 'Cod', 'Haddock', 'Halibut', 'Trout', 'Snapper', 'Tilapia', 'Caviar', 'Lobster bisque', 'Calamari', 'Octopus', 'Squid', 'Miso soup', 'Ramen', 'Pho', 'Dim sum', 'Pad Thai', 'Fried rice', 'Stir-fry', 'Teriyaki', 'Tempura', 'BBQ ribs', 'Pulled pork', 'Roast chicken', 'Baked salmon', 'Grilled steak', 'Meatballs', 'Chicken wings', 'Caesar salad', 'Greek salad', 'Caprese salad', 'Spinach salad', 'Cobb salad', 'Fruit salad', 'Apple pie', 'Chocolate cake', 'Ice cream', 'Brownies', 'Cheesecake', 'Cupcake', 'Donut', 'Pudding', 'Creme brulee', 'Tiramisu', 'Macarons', 'Croissant', 'Bagel', 'Cinnamon roll', 'Pretzel', 'Churro', 'Popcorn', 'Nachos', 'Guacamole', 'Hummus', 'Salsa', 'Tortilla chips', 'Scones', 'Danish', 'Breadsticks', 'Gazpacho', 'Phyllo dough'],
      finance: ['Acquisition', 'Asset', 'Bank', 'Bond', 'Broker', 'Budget', 'Capital', 'Cash', 'Commodity', 'Credit', 'Currency', 'Debt', 'Derivative', 'Dividend', 'Earnings', 'Economy', 'Equity', 'Exchange', 'Futures', 'Hedge', 'Inflation', 'Insurance', 'Interest', 'Investment', 'Leverage', 'Loan', 'Market', 'Mergers', 'Option', 'Portfolio', 'Price', 'Profit', 'Rate', 'Risk', 'Return', 'Savings', 'Securities', 'Shares', 'Stock', 'Tax', 'Trade', 'Transaction', 'Volatility', 'Wealth', 'Yield', 'Annuity', 'Audit', 'Bear', 'Bull', 'Crisis', 'Deficit', 'Diversification', 'Divestment', 'Downturn', 'Equilibrium', 'Fiscal', 'Forex', 'Growth', 'Incentive', 'Inflationary', 'Insolvency', 'Interbank', 'IPO', 'Liquidity', 'Margin', 'Monetary', 'Outflow', 'Pension', 'Ponzi', 'Recession', 'Regulation', 'Reserve', 'Short', 'Stagnation', 'Subprime', 'Surplus', 'Term', 'Trend', 'Underwrite', 'Upswing', 'Venture', 'Volatility', 'Yield', 'Zoning', 'Arbitrage', 'Benchmark', 'Bourse', 'Collateral', 'Currency', 'Default', 'Depreciation', 'Exchange', 'Foreclosure', 'Hedge', 'Inflation', 'Lien', 'Liquidity', 'Margin', 'Option', 'Recession', 'Securities', 'Short', 'Spread', 'Stock']
    };

function generateRandomNumber() {
      const randomLength = Math.floor(Math.random() * 4) + 1; 
      let randomNumber = '';

      for (let i = 0; i < randomLength; i++) {
        randomNumber += Math.floor(Math.random() * 10); 
      }

      return randomNumber;
    }

    function generateUsername(parolaIniziale, categoria, includiNumeri) {
      const parole = categories[categoria];
      const parolaCasuale = parole[Math.floor(Math.random() * parole.length)];
      let username = '';

      if (Math.random() < 0.5) {
        username = parolaIniziale + parolaCasuale;
      } else {
        username = parolaCasuale + parolaIniziale;
      }

      if (includiNumeri) {
        const numeroCasuale = generateRandomNumber();
        username += numeroCasuale;
      }

      return username;
    }

    function generateButtonClicked() {
      const parolaIniziale = document.getElementById('parolaIniziale').value;
      const categoria = document.getElementById('categoria').value;
      const includiNumeri = document.getElementById('includiNumeri').value === 'true';

      const usernameGenerato = generateUsername(parolaIniziale, categoria, includiNumeri);
      const ul = document.getElementById('usernameList');
      
      if (ul.childElementCount >= 10) {
        ul.removeChild(ul.firstChild); 
      }

      const li = document.createElement('li');
      li.textContent = usernameGenerato;
      ul.appendChild(li);
    }

    function generateButtonClicked() {
      const parolaIniziale = document.getElementById('parolaIniziale').value;
      const categoria = document.getElementById('categoria').value;
      const includiNumeri = document.getElementById('includiNumeri').value === 'true';

      const usernameGenerato = generateUsername(parolaIniziale, categoria, includiNumeri);
      const ul = document.getElementById('usernameList');
      
      if (ul.childElementCount >= 10) {
        ul.removeChild(ul.firstChild);
      }

      const li = document.createElement('li');
      li.textContent = usernameGenerato;
      ul.appendChild(li);
    }