let back = document.querySelector('.back');
        let chatBox = document.querySelector('.chatBox');
        let open = document.querySelector('.open');

        back.onclick = function(){
            chatBox.classList.add('hide');
        }

        open.onclick = function(){
            chatBox.classList.remove('hide');
        }