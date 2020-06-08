const columns = [
  'Columna SKT_ID',
  'Columna Amount',
  'Columna Getway',
  'Columna Date',
  'Columna Issuer',
  'Columna User_id']

const ul = document.querySelector('ul')

const setColumn = (column) => {
  return new Promise (resolve => setTimeout(() => {
    ul.innerHTML += `<li>${column}</li>`
    resolve();
  }, Math.random() * 5000))
}

async function showColumns() {
  for(let col = 0; col < columns.length; col++){
    await setColumn(columns[col]);
  }
}

showColumns();