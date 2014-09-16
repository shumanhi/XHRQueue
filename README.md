XHRQueue
=========

XHRQueue is way to handle you ajax reuquest.
It lets you create a queue of Ajax Requests (jqXHR object, http://api.jquery.com/jquery.ajax/). 

-The requests are automatically removed from the queue once completetd.<br>
-Requests can be manually canceled and removed from the queue<br>
-Reuqests can be assigned a key, so that the request can be deleted based on the key.<br>
<br>
<br>
$qXHR = new XHRQueue();<br>
<br>
<b>//ADD TO QUEUE<br></b>
$qXHR.addToQueue($.ajax(......));<br>
<br>
<b>//ADD ANOTHER REQUEST TO QUEUE<br></b>
var request = $.ajax(......);<br>
$qXHR.addToQueue(request);<br>
<br>
<b>//REMOVE <br></b>
$qXHR.removeFromQueue(request);<br>
<br>
<b>//CANCEL AND REMOVE ALL THE PREVIOUS REQUESTS FROM THE QUEUE BEFORE ADDING A NEW ONE<br></b>
$qXHR.removeAll().addToQueue($.ajax(....))<br>
<br>
<br>
<b>----- KEY BASED ------<br></b><br>
<b>//ADD TO QUEUE<br></b>
$qXHR.addToQueue($.ajax(......),"key1");<br>
<br>
<b>//ADD ANOTHER REQUEST TO QUEUE<br></b>
$qXHR.addToQueue($.ajax(......),"key2");<br>
<br>
<b>//REMOVE FROM THE QUEUE<br></b>
$qXHR.removeFromQueue(null,"key2");<br>
