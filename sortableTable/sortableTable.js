/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!
  //give ability to sort by each column header with click event
  //convert each value to a number and sort
  $('th').click(function(event){
    var node = event.target.firstChild.nodeValue;
      if(node.slice(0,1) === 'I'){
        var newList = $('tbody tr td')
        var oldList = $('tbody tr')
        console.log(oldList.sort(function(a,b){
            
        }))
        console.log(newList[0].firstChild.nodeValue)
      };
    ;
    
    if(node.slice(0,1)=='E'){
      console.log('Expiration Date')
    }
    if(node.slice(0,1)=='P'){
      console.log('Price per Pound')
    }
    if(node.slice(0,1)=='N'){
      console.log('Number of pounds')
    }
  })
});


