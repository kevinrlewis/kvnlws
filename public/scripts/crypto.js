// console.log('in crypto.js file...');
// $('a[data-toggle="tab"]').one('shown.bs.tab', function(e) {
//   console.log('tab clicked...');
//   var target = $(e.target).attr("href"); // activated tab
//   if ($(target).is('#caesar')) {
//     console.log('caesar tab clicked...');
//   }
//
// });


function caesarClick() {
  console.log('caesar tab clicked...');
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  $('#plaintext-caesar').text(alphabet.join(''));
  $('#ciphertext-caesar').text(alphabet.join(''));
}

function atbashClick() {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  $('#plaintext-atbash').html(alphabet.join(''));
  $('#ciphertext-atbash').html(alphabet.reverse());
}

function genmonoClick() {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  $('#plaintext-genmono').html(alphabet.join(''));
  $('#ciphertext-genmono').html(shuffleArray(alphabet).join(''));
}


function left() {
  shiftnum = parseInt($('#shift-amount').text());
  if(shiftnum == 0) {
    shiftnum = 25;
    calphabet = $('#ciphertext-caesar').text().split('');
    calphabet.push(calphabet.shift());
    $('#ciphertext-caesar').html(calphabet.join(''));
    $('#shift-amount').html(shiftnum);
    return;
  }
  shiftnum = shiftnum - 1;
  calphabet = $('#ciphertext-caesar').text().split('');
  calphabet.push(calphabet.shift());
  $('#ciphertext-caesar').html(calphabet.join(''));
  $('#shift-amount').html(shiftnum);
}

function right() {
  shiftnum = parseInt($('#shift-amount').text());
  if(shiftnum == 25) {
    shiftnum = 0;
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    $('#ciphertext-caesar').html(alphabet.join(''));
    $('#shift-amount').html(shiftnum);
    return;
  }
  shiftnum = shiftnum + 1;
  calphabet = $('#ciphertext-caesar').text().split('');
  calphabet.unshift(calphabet.pop());
  $('#ciphertext-caesar').html(calphabet.join(''));
  $('#shift-amount').html(shiftnum);
}

/**
* Randomize array element order in-place.
* Using Durstenfeld shuffle algorithm.
*/
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function encryptcaesar() {
  palphabet = $('#plaintext-caesar').text().split('');
  calphabet = $('#ciphertext-caesar').text().split('');
  plaintext = $('#plaintextInput-caesar').val();
  plaintext = plaintext.toLowerCase();
  plaintext = plaintext.replace(/\s+/g, '');
  enciphered = '';
  for(i = 0; i < plaintext.length; i++) {
    if($.inArray(plaintext[i], palphabet) == -1) {
      continue;
    } else {
      enciphered += calphabet[palphabet.indexOf(plaintext[i])];
    }
  }

  $('#encrypted-caesar').html(enciphered);
}

function encryptatbash() {
  palphabet = $('#plaintext-atbash').text().split('');
  calphabet = $('#ciphertext-atbash').text().split('');
  plaintext = $('#plaintextInput-atbash').val();
  plaintext = plaintext.toLowerCase();
  plaintext = plaintext.replace(/\s+/g, '');
  enciphered = '';
  for(i = 0; i < plaintext.length; i++) {
    if($.inArray(plaintext[i], palphabet) == -1) {
      continue;
    } else {
      enciphered += calphabet[palphabet.indexOf(plaintext[i])];
    }
  }

  $('#encrypted-atbash').html(enciphered);
}

function encryptgenmono() {
  palphabet = $('#plaintext-genmono').text().split('');
  calphabet = $('#ciphertext-genmono').text().split('');
  plaintext = $('#plaintextInput-genmono').val();
  plaintext = plaintext.toLowerCase();
  plaintext = plaintext.replace(/\s+/g, '');
  enciphered = '';
  for(i = 0; i < plaintext.length; i++) {
    if($.inArray(plaintext[i], palphabet) == -1) {
      continue;
    } else {
      enciphered += calphabet[palphabet.indexOf(plaintext[i])];
    }
  }

  $('#encrypted-genmono').html(enciphered);
}
