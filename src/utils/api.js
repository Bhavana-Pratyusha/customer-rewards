export const fetchTransactions = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('/data.json')
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      }, 1000);
    });
  };
  