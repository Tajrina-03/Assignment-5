### 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Answer:** Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll are given below-
**I.** getElementById("id")--------ID (#id)------ Single element (HTMLElement)-------- Returns the first element with the given ID.\
**II.** getElementsByClassName("class")---------	Class (.class)--------- HTMLCollection (array-like)---------- Returns all elements with the given class name.\
**III.** querySelector("selector")----------	CSS Selector---------- First matching element---------	Returns the first element that matches a CSS-style selector.\
**IV.** querySelectorAll("selector")---------	CSS Selector-------- NodeList (array-like)--------Returns all elements that match the selector.\

### 2.How do you create and insert a new element into the DOM?
**Answer:** Steps to Create and Insert a New Element into the DOM-\
**step-1:** Create a new element\
const newElement = document.createElement('p');\
**step-2:** Add some content or styling (optional)\
newElement.textContent = 'This is a new paragraph!';\
**step-3:** Find the parent element to insert it\
const parent = document.getElementById('container');\
**step-4:** Append the new element to the parent\
parent.appendChild(newElement);

### 3.What is Event Bubbling and how does it work?
**Answer:** Event Bubbling is a behavior in the DOM where an event starts at the target element and then "bubbles up" to its parent elements.\
**How it's work:**\
I. There is a <button> inside a <div>.\
II. When click the button, the event is first triggered on the button.\
III. Then it bubbles up to the div.\
IV. Then to the <body>, <html> and so on.\

### 4.What is Event Delegation in JavaScript? Why is it useful?
**Answer:** Event Delegation is a JavaScript technique where instead of adding event listeners to multiple child elements, you add a single event listener to a parent element and handle events for the children using `event.target`.
It's useful because:\
 I.Better performance.\
 II.Works with dynamically added elements.\
 III.Cleaner and more maintainable code.\
 
 ### 5.What is the difference between preventDefault() and stopPropagation() methods?
 **Answer:** The difference between preventDefault() and stopPropagation() methods are given below:\
 **preventDefault()**\
 Prevents the browser's default behavior for an event.\
 stop the default action like submitting a form, following a link, etc.\
**stopPropagation()**\
 Stops the event from bubbling up to parent elements.
 stay on the current element only, and not affect its ancestors.

