
let maxNumber = 75;
window.addEventListener('load',
    function (event) {
        //ボタン生成
        let buttons = document.getElementById('buttons');
        for (let i = 0; i < (maxNumber/10); i++) {
            let tr = document.createElement('tr');
            for (let j = 1; j <= 10; j++) {
                let number = i * 10 + j;
                let td = document.createElement('td');
                let button = document.createElement('button');
                if (number > maxNumber) {
                    break;
                }
                button.type = 'button';
                button.id = 'button' + number;
                button.className = 'btn btn-raised btn-default btn-main';
                button.innerHTML = number;
                button.addEventListener('click', function(){clickButton(number)}, false);
                td.appendChild(button);
                tr.appendChild(td);
            }
            buttons.appendChild(tr);
        }

        //クイズ生成
        let quizzes = document.getElementById('quizzes');
        for (let i = 1; i <= maxNumber; i++) {
            let quiz = document.createElement('div');
            let modalDialog = document.createElement('div');
            let modalContent = document.createElement('div');
            let modalHeader = document.createElement('div');
            let modalBody = document.createElement('div');
            let header = document.createElement('h2');
            let body = document.createElement('p');
            quiz.id = 'quiz' + i;
            quiz.className = 'modal fade';
            quiz.tabindex = '-1';
            modalDialog.className = 'modal-dialog';
            modalContent.className = 'modal-content';
            modalHeader.className = 'modal-header';
            modalBody.className = 'modal-body';
            header.innerHTML = 'クイズ ' + i;
            body.innerHTML = 'text';
            modalHeader.appendChild(header);
            modalBody.appendChild(body);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(modalBody);
            modalDialog.appendChild(modalContent);
            quiz.appendChild(modalDialog);
            quizzes.appendChild(quiz);
        }
    }
, false);

function clickButton(number) {
    console.log(number);
    let button = document.getElementById('button' + number);
    button.className = 'btn btn-raised btn-info btn-main';
    $('#quiz' + number).modal();
}
