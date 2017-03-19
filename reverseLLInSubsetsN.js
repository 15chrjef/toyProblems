const reverseLLInSubsets = (head, n) => {
  var cur = head
  var prev = null
  var next = null
  var count = 0;
  while(cur !== null && count < n){
    var next = cur.next;
    cur.next = prev
    prev = cur
    cur = next
    count++
  }
  if(cur !== null){
    head.next = reverseLLInSubsets(cur, n)
  }
  return prev
}
