$('#myModal').modal('show');
  var playerToken = 'O';
  var computerToken = 'X';
  var canAddline;
  var elements = [$('#box1'), $('#box2'), $('#box3'), $('#box4'), $('#box5'), $('#box6'), $('#box7'), $('#box8'), $('#box9')];
  //PLAY AS X OR O

  $('button').on('click', function() {
    playerToken = $(this).text();
    computerToken = $(this).siblings().text();

  });

  function findRow(token) {
    this.box1 = $('#box1').text() === token;
    this.box2 = $('#box2').text() === token;
    this.box3 = $('#box3').text() === token;
    this.box4 = $('#box4').text() === token;
    this.box5 = $('#box5').text() === token;
    this.box6 = $('#box6').text() === token;
    this.box7 = $('#box7').text() === token;
    this.box8 = $('#box8').text() === token;
    this.box9 = $('#box9').text() === token;
  }

  function winningCombinations(board) {
    if (board.box1 && board.box2 && board.box3 && canAddLine) {
      $('#row1').addClass('horizontal-line');
      clearBoard();
      return true;
    } else if (board.box4 && board.box5 && board.box6 && canAddLine) {

      $('#row2').addClass('horizontal-line');
      clearBoard();
      return true;
    } else if (board.box7 && board.box8 && board.box9 && canAddLine) {
      $('#row3').addClass('horizontal-line');
      clearBoard();
      return true;
    } else if (board.box1 && board.box4 && board.box7 && canAddLine) {
      $('#box1').addClass('vertical-line');
      clearBoard();
      return true;
    } else if (board.box2 && board.box5 && board.box8 && canAddLine) {
      $('#box2').addClass('vertical-line');
      clearBoard();
      return true;
    } else if (board.box3 && board.box6 && board.box9 && canAddLine) {
      $('#box3').addClass('vertical-line');
      clearBoard();
      return true;
    } else if (board.box7 && board.box5 && board.box3 && canAddLine) {
      $('.board').addClass('diagonal-line1');
      clearBoard();
      return true;
    } else if (board.box1 && board.box5 && board.box9 && canAddLine) {
      $('.board').addClass('diagonal-line2');
      clearBoard();
      return true;
    }
  }

  function clearBoard() {

    canAddLine = false;
    setTimeout(function() {
      $('.content-box').text('');
      $('div').removeClass('horizontal-line vertical-line diagonal-line1 diagonal-line2');
    }, 2000)

    setTimeout(function() {
      canAddLine = true;
      generateFirstComputerToken(randomNum());
    }, 2500)
  }

  function randomNum() {
    return Math.floor(Math.random() * 9);
  }

  function generateFirstComputerToken(num) {
    if ($('.board').text().replace(/\W/g, '') === '') {
      elements[num].addClass('o-or-x');
      elements[num].text(computerToken);
    }
  }

  function generateComputerToken(num) {
    if (canAddLine === true) {
      if (elements[num].text() === '') {

        elements[num].addClass('o-or-x');
        elements[num].text(computerToken);
        var computer = new findRow(computerToken);
        winningCombinations(computer);

      } else {
        return generateComputerToken(randomNum());
      }
    }

    if ($('.board').text().replace(/\W/g, '').length === 9) {
      clearBoard();
    }

  }

  $('button').on('click', function() {
    canAddLine = true;
    generateComputerToken(randomNum());

  });

  $('.content-box').on('click', function() {
    if ($(this).text() === '' && canAddLine) {

      $(this).addClass('o-or-x');
      $(this).text(playerToken);
      var player = new findRow(playerToken);
      winningCombinations(player);
      generateComputerToken(randomNum());

    }

  });
    
