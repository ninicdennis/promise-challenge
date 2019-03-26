// The following code is very inefficient. You can try to determing a better way -- hint
// changing the backend to take more than a single argument. Or you can simply get it to pass
// the way it is written. 

function callBackend(userId) {

  let users = [
    { id: 1, name: 'John', salary: 93000 },
    { id: 2, name: 'Sarah', salary: 122000 },
  ]

  let user = users.filter(u => userId.indexOf(u.id) > -1)

  return new Promise(function(resolve, reject) { //You need to create the promise with two paramaeters and wrap the following code
    setTimeout(() => {
      if (user.length > 0) {
        resolve(user)
        //Do the happy path here and return [{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }]
      } else {
        //Do the unhappy path here and return a messgae
        reject({msg:"this is broke"})
      }
    }, Math.floor(Math.random()*3 +1))
  })}

function main () {
  let userId = [2, 1]
  const results = callBackend(userId)
  
    results
      .then(function (data) {
      console.log("User", data)
    })
      .catch(function (error) {
      console.log('Oh no...', error.msg)
    })
}

main()
