const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => requestApi.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
 fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = `Localização: ${data.city}`
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

// POST
function addUser() {
  fetch(url, {
    method: "POST", // método padrão: GET. Usado o POST para poder enviar dados.
    body: JSON.stringify(newUser), // os dados que serão add.
    headers: {
      "Content-type": "application/json;charset=UTF-8" //documentação
    }
  })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))

}

// PUT
function hadleUpDateUser(upDateUser, id){
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(upDateUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8" //documentação
    }
  }) //passando para api qual usuário será atualizado.
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// DELETE
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UFT-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Olivia Zars",
  avatar: "http://picsum.photos/300/300",
  city: "Dourados"
}

const upDateUser = {
  name: "Thiago Marinho",
  avatar: "https://avatars.githubusercontent.com/u/380327?v=4",
  city: "Dourados"
}

// Chamadas:
// addUser(newUser)
// hadleUpDateUser(upDateUser, 1)
// deleteUser(5)
// getUsers()
// getUser()

//////////////////// Consumindo API com AXIOS ////////////////////////

// //GET
// function getUsers() {
//   axios.get(url)
//     .then(response => {
// 			apiResult.textContent = JSON.stringify(response.data)
// 		})
//     .catch(error => console.error(error))
// }

// function getUser(id) {
// 	axios.get(`${url}/${id}`)
// 		.then(res => {
// 			const data = res.data
// 			userName.textContent = `ID ${data.id} - ${data.name}`
// 			userCity.textContent = data.city
// 			userAvatar.src = data.avatar
// 		})
// 		.catch(error => console.error(error))
// }

// //POST
// function addNewUser(newUser) {
// 	axios.post(url, newUser )
// 		.then(res => console.log(res))
// 		.catch(error => console.error(error))
// }

// const newUser2 = {
// 	name: 'Ana Paula',
// 	avatar: 'http://picsum.photos/200/300',
// 	city: 'Rio de Janeiro'
// }

// //PUT 
// function updateUser(id, userUpdated) {
// 	axios.put(`${url}/${id}`, userUpdated)
// 		.then(response => console.log(response))
// 		.catch(error => console.error(error))
// }

// const userUpdated = {
// 	name: "Marcelo Calvis",
// 	avatar: 'http://picsum.photos/200/300',
// 	city: 'São Paulo'
// }

// //DELETE
// function deleteUser(id) {
// 	axios.delete(`${url}/${id}`)
// 		.then(response => console.log(response))
// 		.catch(error => console.log(error))
// }

// // Chamadas
// // getUsers()
// // updateUser(3, userUpdated)
// // getUser(1)
// // addNewUser(newUser)
// // deleteUser(2)