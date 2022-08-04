/*
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const BillInput = document.getElementById('billTotalInput')

const tipInput = document.getElementById('tipInput')

const numberOfPeopleDiv = document.getElementById('numberOfPeople')

const PerPersonTotalDivD = document.getElementById('perPersonTotal')
// Get number of people from number of people div


let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(BillInput.value)
  const tip = Number(tipInput.value)/100
  const tipamount= bill*tip

  const total = tipamount+bill
  console.log({total})

  const perPersonTotal = total/numberOfPeople

PerPersonTotalDivD.innerText = `$${perPersonTotal.toLocaleString('en-US')}`
  

  // get the tip from user & convert it into a percentage (divide by 100)
  

  // get the total tip amount
  

  // calculate the total (tip amount + bill)
  

  // calculate the per person total (total divided by number of people)


  // update the perPersonTotal on DOM & show it to user

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople +=1

  numberOfPeopleDiv.innerText = numberOfPeople


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people
calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
if( numberOfPeople >1){
  numberOfPeople -=1

  numberOfPeopleDiv.innerText = numberOfPeople
  
}
  
  // decrement the amount of people
calculateBill()

  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}