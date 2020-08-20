function check() {
    const date = new Date() //Atribuindo a data atual para a variável
    const year = date.getFullYear() //Passando o ano para outra váriavel em 4 por exemplo 2020
    const send_date = document.getElementById('send_date') //Div do HTML responsável por enviar os dados pra tela
    let userYear = document.getElementById('txtyear') //Data de nascimento do usuário inserida
    const userYearNumber = Number(userYear.value) //Transformando em número a data de nascimento

    if (userYear.value.lenght == 0 || Number(userYear.value) > year) { /*Se a data inserida for 0 ou maior que o nosso ano atual então vai dar erro */
        alert('Make sure the data is correct')
        send_date.innerHTML = `The minimum age is 1 year, <br> ${userYearNumber} is not valid `
    }
      else { /*Senão é porque está correta */
        const formSex = document.getElementsByName('radsex') //Atributindo a uma váriavel todos os inputs do tipo radio
        let age = year - Number(userYear.value) //Transformando em número a data de nascimento
        let gender = '' //Váriavel que vai receber o gênero da pessoa
        const img = document.createElement('img') //Criando a imagem de forma dinamicamente com javascript
            img.setAttribute('id', 'img') //Atribuindo id chamado img

        if (formSex[0].checked) { /* Verificando se a pessoa marcou a primeira opção do nosso input do tipo radio */
            gender = 'Male' // Se foi a primeira ela é do sexo masculino
              if (age === 2020 || age === 0) { // Se a idade for = 2020 ou = 0 então vai avisar um erro
                alert('Make sure your data, try again ;)')
              }
              else if (age >= 1 && age <= 12) { //Verificando se a idade está entre 1 e 12
                img.setAttribute('src', 'img/criancaHomem.jpg')
              }
              else if (age <= 18) { //Verificando se a idade está entre 13 e 18
                img.setAttribute('src', 'img/jovemHomem.png')
              }
              else if (age < 50) { //Verificando se a idade está entre entre 19 e 49
                img.setAttribute('src', 'img/adultoHomem.png')
              }
              else { //Verificando se a idade está entre 50 pra cima
                img.setAttribute('src', 'img/idosoHomem.png')
              }
       }
        else if (formSex[1].checked) { /* Verificando se a pessoa marcou a segunda opção do nosso input do tipo radio */
          gender = 'Female' // Se foi a segunda ela é do sexo feminino
            if (age === 2020 || age === 0) { // Se a idade for = 2020 ou = 0 então vai avisar um erro
              alert('Make sure your data, try again ;)')
            }
            else if (age >= 1 && age <= 12) { //Verificando se a idade está entre 1 e 12
              img.setAttribute('src', 'img/criancaHomem.jpg')
                img.setAttribute('src', 'img/criancaMulher.png')
            }
            else if (age <= 18) { //Verificando se a idade está entre 13 e 18
                img.setAttribute('src', 'img/jovemMulher.png')
            }
            else if (age < 50) { //Verificando se a idade está entre entre 19 e 49
                img.setAttribute('src', 'img/adultoMulher.jpg')
            }
            else { //Verificando se a idade está entre 50 pra cima
                img.setAttribute('src', 'img/idosoMulher.png')
            }
        }
       
        age == 2020 || age == 0 ? send_date.innerHTML = `The minimum age is 1 year, try again ` //Se for entre 2020 e 0 anos, vai mandar a pessao tentar novamente com outra data
                    : send_date.innerHTML = `Found ${gender} with ${age} old.`  //Se não vai mostrar o gênero da pessoa a idade 

        img.width = '150' //Colocando um width de 150 na imagem
        send_date.appendChild(img)  //Colocando a img referente a idade da pessoa
        send_date.classList.add('text') //Adicionado uma classe de estilo pro texto
    }
}
