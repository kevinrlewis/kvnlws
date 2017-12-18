function submitPost() {
  var dateinseconds = new Date().getTime() / 1000;
  var obj = {
    hash: $('#hashpermission').val(),
    subject: $('#subjectInput').val(),
    content: $('#postInput').val(),
    date: dateinseconds
  }

  // attempt to submit a blog post
  $.ajax({
    type: "POST",
    url: "/post",
    contentType: "application/json",
    data: JSON.stringify(obj),
    success: function(data, status) {
      console.log('success data: ' + data);
      // display post
      //location.reload();
    },
    error: function(data, status) {
      // hash check failed
      console.log(status);
    }
  });

}

// function getdate(seconds) {
//   var date = new Date(seconds);
//   var year = date.getFullYear();
//   var month = date.getMonth() + 1;
//   var day = date.getDate();
//   return date + '/' + month + '/' + year;
// }
