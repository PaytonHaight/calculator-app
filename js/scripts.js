// variables

const myDiv = document.querySelector('div');

//Events

myDiv.addEventListener('click', (event) => {
  let output = document.querySelector('output');
	if (event.target.className == 'number') {
        console.log('hello');
        return output.innerHTML = (output.innerHTML + event.target.innerHTML);
    } else if (event.target.className == 'finalize') {
      console.log('2nd statement satisfied');
      output.innerHTML = eval(output.innerHTML);
    } else if (event.target.className == 'clear') {
      console.log('if statement not satisfied')
      console.log(event.target.className);
      output.innerHTML = '';
    }
});
