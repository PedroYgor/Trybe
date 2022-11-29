const fs = require('fs').promises;

const getSimpsonsJson = async () => {
  const response = await fs.readFile('./simpsons.json', 'utf-8')
  const data = JSON.parse(response)
  return data;
}

const getSimpsonsFamilyJson = async () => {
  const response = await fs.readFile('./simpsonFamily.json', 'utf-8')
  const data = JSON.parse(response)
  return data;
}


const main = async () => {
  try {
    const data = await getSimpsonsJson()
    data.map(({id, name}) => console.log(`${id} - ${name}`))
  } catch (e) {
    console.log(e)
  }
}

// main()


const searchId = async (id) => {
  try {
    const data = await getSimpsonsJson()
    let mensagem = 'id não encontrado'
    data.forEach(({id: idItem, name}) => {
      if (idItem == id) mensagem = `${idItem} - ${name}`
    })
     console.log(mensagem);
  } catch (e) {
    console.log(e);
  }
}

// searchId(10)

const deleteId = async () => {
  try {
    const data = await getSimpsonsJson()
    const dataFiltered = data.filter(({id}) => id !== '6' && id !== '10')
    console.log(dataFiltered);
  } catch (e) {
    console.log(e);
  }
}

// deleteId()


const createFile = async () => {
  try {
    const data = await getSimpsonsJson()
    const dataFiltered = data.filter(({id}) => id === '1' || id === '4' )
    const content = JSON.stringify(dataFiltered)
    await fs.writeFile('./simpsonFamily.json', content)
  } catch (e) {
    console.log(e);
  }
}

// createFile()

const addPersonagem = async () => {
  try {
    const data = await getSimpsonsJson()
    const simpsonsFamily = await getSimpsonsFamilyJson()
    const dataFiltered = data.find(({name}) => name === 'Nelson Muntz')
    simpsonsFamily.push(dataFiltered)
    const content = JSON.stringify(simpsonsFamily)
    fs.writeFile('./simpsonFamily.json', content)
  } catch (e) {
    console.log(e);
  }
}

// addPersonagem()


const replacePersonagem = async () => {
  try {
    const data = await getSimpsonsJson()
    const simpsonsFamily = await getSimpsonsFamilyJson()
    const newPersonagem = data.find(({name}) => name === 'Maggie Simpson')
    const simpsonsFamilyFiltered = simpsonsFamily.filter((item) => item.name !== 'Nelson Muntz')
    simpsonsFamilyFiltered.push(newPersonagem)
    const content = JSON.stringify(simpsonsFamilyFiltered)
    fs.writeFile('./simpsonFamily.json', content)
  } catch (e) {
    console.log(e);
  }
}

replacePersonagem()