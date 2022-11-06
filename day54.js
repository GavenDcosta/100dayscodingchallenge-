//Learnt About the target element and also learnt about various Events

document.getElementById('btn1').addEventListener('click', function (e) {
    let variable = e.target
    variable = Array.from(e.target.classList)
    let varclass = e.target.className  //java script uses camel
    //react uses pascal
    console.log(variable) //will return the target(the tag which was clicked inorder for this function to run)
    //in this case it will print the button tag that was clicked
    console.log(varclass)  //will return the class name of the target i.e the className of the button
    console.log(e.target.classList) //will return the list of classes
    console.log(e.target.id) //will print the id of the button
    console.log(e)    //will return many events
  //  location.href = 'https://youtube.com'  //youtube will be opened on clicking button
    console.log(e.offsetX)  //will return the x position that i clicked(can click only inside the target tag)
    console.log(e.offsetY)  //will return the y position that i clicked(can click only inside the target tag)
   // console.log(e.clientX)  //will return the x position that i clicked(can click anywhere on the page)
   // console.log(e.clientY)  //will return the y position that i clicked(can click anywhere on the page)   

/*      1- Mouse Events
      click,	onclick	=> When mouse click on an element
      dblclick, ondblclick => when mouse double clicks on an element 
      mouseover,	onmouseover =>	When the cursor of the mouse comes over the element 
      mouseout,	onmouseout	=> When the cursor of the mouse leaves an element
      mousedown,	onmousedown =>	When the mouse button is pressed over the element
      mouseup,	onmouseup	 => When the mouse button is released over the element
      mousemove,	onmousemove =>	When the mouse movement takes place.

         2-  KeyBoard Events
      Keydown & Keyup,	onkeydown & onkeyup =>	When the user press and then release the key

         3-  Form Events
      focus,	onfocus =>	When the user focuses on an element
      submit,	onsubmit =>	When the user submits the form
      blur,	onblur =>	When the focus is away from a form element
      change,	onchange =>	When the user modifies or changes the value of a form element

         4-  Window/Document Events
      load,	onload =>	When the browser finishes the loading of the page
      unload,	onunload =>	When the visitor leaves the current webpage, the browser unloads it
      resize,	onresize =>	When the visitor resizes the window of the browser
*/
})