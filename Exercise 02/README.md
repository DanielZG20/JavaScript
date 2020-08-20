# Exercício 02 de JavaScript


## Este pequeno exercício verifica a idade da pessoa

#### Bom este pequeno programa
Começa pedindo o ano de nascimento do **usuário**, **se o usuário** tentar calcular sem colocar um valor ou deixando em branco, aparecerá um **`alert`** avisando, que a idade mínima é de 1 ano.

Logo após o **usuário** inserir dados corretos, o **programa** verificará se a data de nascimento que o **usuário** digitou é igual a 0 ou maior que o ano em que vivemos no momento em que a aplicação for executada, **SE sim**, então ele enviará um `alert` avisando pro usuário verificar os dados se estão corretos, **SE não** então a partir daí começa o **programa**.

Com todos os dados inseridos corretamente, o **programa** pegará o todos os **`<input>`** do **`type="radio"`**, e colocará numa váriavel chamada **formSex**, e criamos também uma váriavel chamada **`gender = ''`** e uma outra chamada **age** recebendo a váriavel **year - Number(userYear.value)**, ou seja dentro da váriavel **age**, recebemos o ano atual - o ano que o **usuário** digitou através do **`<input>`**, com isso em mente, também criamos de forma dinamica com o **JavaScript** uma tag **HTML** **`<img>`** inserindo um **`id`** chamado **`img`.**

O **JavaScript** verificará o valor do **`<input>`** do **`type="radio"`**, qual a opção que o **usuário** marcou **SE** foi a **primeira ou a segunda opção**.

**SE o usuário marcou a primeira opção** a váriavel **`gender = 'Male'`**, receberá o valor **Male**, e por precaução colocamos outra verificação caso a data de nascimento do **usuário** passou mesmo sendo um 0 ou maior ou igual o ano atual que vivemos ele verificára novamente **SE sim** a **idade === 0 || idade === 0**, então vai mandar um **`alert`** , verifique seus dados, tente novamente. **SE não** começará a verificar se a **age** está entre ***x idade e y idade***, e colocando respectivamente a *imagem* de cada tipo de **idade... (se é criança, jovem, adulto ou idoso)**, atribuimos o **`src`** dentro da **`<img>`** que criamos de forma dinamicamente passando dentro da **`src`** a url da **img** que está dentro de uma pasta chamada **img**

**SE o usuário marcou a segunda opção** são os mesmos passos, apenas trocando a variável **`gender = 'Female'`**, recebendo o valor **Female** e as **imagens**, trocando o **`src`** para cada tipo de **idade... (se é criança, jovem, adulto ou idoso)**

E jogamos dentro de uma **`<div>`** do **HTML** a resposta que encontrou o **gender** com **age** anos.

É bem simples o **programa**, mas pode ser de extrema ajuda, obrigado a todos, um **FORTE** **abraço**

### Use a vontade os exercícios para treinar e compreender, vamos interagir !

Me chamo Daniel Zanoni Garcia, sou um dos donos da página [Dev_Hours](https://www.instagram.com/dev_hours) no instagram, apaixonado por novas tecnologias desde sempre, atualmente focado para o desenvolvimento web.

#### Redes sociais

[Linkedin](https://www.linkedin.com/in/daniel-zanoni-garcia)

[GitHub](https://github.com/DanielZG20)

[Dev_Hours](https://www.instagram.com/dev_hours)
