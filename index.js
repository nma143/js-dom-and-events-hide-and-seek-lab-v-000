function getFirstSelector(selector)
{
  return document.querySelector(selector);
}
function nestedTarget()
{
  return document.querySelector('.target');
}
function deepestChild()
{
  return document.querySelector('#grand-node div div div div');
}
function increaseRankBy(n)
{
  let allranked = document.querySelectorAll('ul.ranked-list li');
<<<<<<< HEAD
  for (let i=0; i<allranked.length; ++i)
  { 
    allranked[i].innerHTML =parseInt(allranked[i].innerHTML) + n;
  }
  return allranked;
=======


>>>>>>> ce45c0ff0a5e4d082e9314636c6d1b969e7ccf17

}
