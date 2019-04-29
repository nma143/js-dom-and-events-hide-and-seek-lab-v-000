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
  for (let i=0; i<allranked.length; ++i)
  { 
    allranked[i].innerHTML =parseInt(allranked[i].innerHTML) + n;
  }
  return allranked;

}
